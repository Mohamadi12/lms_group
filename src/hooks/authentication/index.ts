import { SignInSchema } from "@/components/forms/sign-in/schema";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignIn, useSignUp } from "@clerk/nextjs";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SignUpSchema } from "@/components/forms/sign-up/schema";
import { onSignUpUser } from "@/actions/auth";
import { OAuthStrategy } from "@clerk/types";

export const useAuthSignIn = () => {
  const { isLoaded, setActive, signIn } = useSignIn();
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    mode: "onBlur",
  });

  const router = useRouter();
  const onClerkAuth = async (email: string, password: string) => {
    if (!isLoaded)
      return toast("Error", {
        description: "Oops! something went wrong",
      });
    try {
      const authenticated = await signIn.create({
        identifier: email,
        password: password,
      });

      if (authenticated.status === "complete") {
        reset();
        await setActive({ session: authenticated.createdSessionId });
        toast("Success", {
          description: "Welcome back!",
        });
        router.push("/callback/sign-in");
      }
    } catch (error: any) {
      if (error.errors[0].code === "form_password_incorrect")
        toast("Error", {
          description: "email/password is incorrect try again",
        });
    }
  };

  const { mutate: InitiateLoginFlow, isPending } = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      onClerkAuth(email, password),
  });

  const onAuthenticateUser = handleSubmit(async (values) => {
    InitiateLoginFlow({ email: values.email, password: values.password });
  });

  return {
    onAuthenticateUser,
    isPending,
    register,
    errors,
  };
};
// Fonction useAuthSignIn :
// Ce hook personnalisé gère le processus de connexion d'un utilisateur via Clerk (authentification) et utilise react-hook-form pour la gestion du formulaire.

// Fonctionnalités principales :
// Authentification avec Clerk :
// Utilise useSignIn de Clerk pour gérer la connexion.
// Vérifie si l'utilisateur est authentifié avec signIn.create.
// Si la connexion réussit, redirige l'utilisateur vers /callback/sign-in et affiche un message de succès.
// Gère les erreurs, comme un mot de passe incorrect, en affichant des messages d'erreur via toast.

// Gestion du formulaire :
// Utilise react-hook-form pour valider et gérer les données du formulaire de connexion.
// Applique la validation avec zod via SignInSchema.
// Réinitialise le formulaire après une connexion réussie.

// Mutation avec useMutation :
// Utilise useMutation pour lancer le processus de connexion de manière asynchrone.
// isPending indique si la connexion est en cours.

// Retour :
// Retourne des méthodes et des états pour gérer la connexion :
// onAuthenticateUser : Fonction pour soumettre le formulaire.
// isPending : Indique si la connexion est en cours.
// register : Méthode pour enregistrer les champs du formulaire.
// errors : Les erreurs de validation du formulaire.

export const useAuthSignUp = () => {
  const { setActive, isLoaded, signUp } = useSignUp();
  const [creating, setCreating] = useState<boolean>(false);
  const [verifying, setVerifying] = useState<boolean>(false);
  const [code, setCode] = useState<string>("");

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
  } = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    mode: "onBlur",
  });

  const router = useRouter();

  const onGenerateCode = async (email: string, password: string) => {
    if (!isLoaded)
      return toast("Error", {
        description: "Oops! something went wrong",
      });
    try {
      if (email && password) {
        await signUp.create({
          emailAddress: getValues("email"),
          password: getValues("password"),
        });

        await signUp.prepareEmailAddressVerification({
          strategy: "email_code",
        });

        setVerifying(true);
      } else {
        return toast("Error", {
          description: "No fields must be empty",
        });
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  };

  const onInitiateUserRegistration = handleSubmit(async (values) => {
    if (!isLoaded)
      return toast("Error", {
        description: "Oops! something went wrong",
      });

    try {
      setCreating(true);
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        return toast("Error", {
          description: "Oops! something went wrong, status in complete",
        });
      }

      if (completeSignUp.status === "complete") {
        if (!signUp.createdUserId) return;
        const user = await onSignUpUser({
          firstname: values.firstname,
          lastname: values.lastname,
          clerkId: signUp.createdUserId,
          image: "",
        });

        reset();

        if (user.status === 200) {
          toast("Success", {
            description: user.message,
          });
          await setActive({
            session: completeSignUp.createdSessionId,
          });
          router.push(`/group/create`);
        }
        if (user.status !== 200) {
          toast("Error", {
            description: user.message + "action failed",
          });
          router.refresh;
        }
        setCreating(false);
        setVerifying(false);
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (error) {
      console.error(JSON.stringify(error, null, 2));
    }
  });

  return {
    register,
    errors,
    onGenerateCode,
    onInitiateUserRegistration,
    verifying,
    creating,
    code,
    setCode,
    getValues,
  };
};
// Fonction useAuthSignUp :
// Ce hook personnalisé gère le processus d'inscription d'un utilisateur via Clerk (authentification) et utilise react-hook-form pour la gestion du formulaire.

// États locaux :
// creating : Indique si l'inscription est en cours.
// verifying : Indique si la vérification de l'e-mail est en cours.
// code : Stocke le code de vérification saisi par l'utilisateur.

// Fonctionnalités principales :
// Gestion du formulaire :
// Utilise react-hook-form pour valider et gérer les données du formulaire d'inscription.
// Applique la validation avec zod via SignUpSchema.

// Génération du code de vérification :
// Crée un utilisateur avec signUp.create et envoie un code de vérification par e-mail avec signUp.prepareEmailAddressVerification.
// Active l'état verifying pour afficher l'interface de saisie du code.

// Vérification du code et inscription :
// Vérifie le code saisi avec signUp.attemptEmailAddressVerification.
// Si la vérification réussit, crée l'utilisateur dans la base de données via onSignUpUser.
// Redirige l'utilisateur vers /group/create après une inscription réussie.
// Affiche des messages de succès ou d'erreur via toast.

// Retour :
// Retourne des méthodes et des états pour gérer l'inscription :
// register : Méthode pour enregistrer les champs du formulaire.
// errors : Les erreurs de validation du formulaire.
// onGenerateCode : Fonction pour générer et envoyer le code de vérification.
// onInitiateUserRegistration : Fonction pour valider le code et finaliser l'inscription.
// verifying, creating, code, setCode, getValues : États et méthodes pour gérer le processus.

export const useGoogleAuth = () => {
  const { signIn, isLoaded: LoadedSignIn } = useSignIn();
  const { signUp, isLoaded: LoadedSignUp } = useSignUp();

  const signInWith = (strategy: OAuthStrategy) => {
    if (!LoadedSignIn) return;
    try {
      return signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/sign-in",
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signUpWith = (strategy: OAuthStrategy) => {
    if (!LoadedSignUp) return;
    try {
      return signUp.authenticateWithRedirect({
        strategy,
        redirectUrl: "/callback",
        redirectUrlComplete: "/callback/complete",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return { signUpWith, signInWith };
};
// Fonction useGoogleAuth :
// Ce hook personnalisé permet à un utilisateur de se connecter ou de s'inscrire via des stratégies OAuth (comme Google) en utilisant Clerk.

// Fonctionnalités principales :
// Connexion OAuth (signInWith) :
// Utilise signIn.authenticateWithRedirect pour rediriger l'utilisateur vers le processus d'authentification OAuth.
// Après l'authentification, redirige vers /callback/sign-in.
// Inscription OAuth (signUpWith) :
// Utilise signUp.authenticateWithRedirect pour rediriger l'utilisateur vers le processus d'inscription OAuth.
// Après l'inscription, redirige vers /callback/complete.
// Gestion des erreurs :
// En cas d'erreur, l'erreur est simplement loguée dans la console.

// Retour :
// Retourne deux fonctions :
// signInWith : Pour se connecter via OAuth.
// signUpWith : Pour s'inscrire via OAuth.
