"use client";

import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { GROUPLE_CONSTANTS } from "@/constants";
import { useAuthSignIn } from "@/hooks/authentication";

const SignInForm = () => {
  const { isPending, onAuthenticateUser, register, errors } = useAuthSignIn();

  return (
    <form className="flex flex-col gap-3 mt-10" onSubmit={onAuthenticateUser}>
      {GROUPLE_CONSTANTS.signInForm.map((field) => (
        <FormGenerator
          {...field}
          key={field.id}
          register={register}
          errors={errors}
        />
      ))}
      <Button type="submit" className="rounded-2xl">
        <Loader loading={isPending}>Sign In with Email</Loader>
      </Button>
    </form>
  );
};

export default SignInForm;

//   Composant SignInForm :
// Ce composant gère un formulaire de connexion simple avec authentification par e-mail et mot de passe.

// Fonctionnalités principales :
// Formulaire de connexion :
// Affiche les champs du formulaire de connexion (GROUPLE_CONSTANTS.signInForm) en utilisant FormGenerator.
// Les champs incluent l'e-mail et le mot de passe.

// Soumission du formulaire :
// Le formulaire est soumis via onAuthenticateUser, qui gère l'authentification de l'utilisateur.
// Un bouton "Sign In with Email" déclenche la soumission.

// Gestion des états :
// Utilise useAuthSignIn pour gérer :

// L'enregistrement des champs du formulaire (register).
// Les erreurs de validation (errors).
// L'état isPending (indiquant si la connexion est en cours).

// Loader :
// Affiche un indicateur de chargement (Loader) pendant la connexion si isPending est true.
