import SignInForm from "@/components/forms/sign-in";
import { GoogleAuthButton } from "@/components/global/google-oauth-button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const SignInPage = () => {
  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite">Login</h5>
      <p className="text-themeTextGray leading-tight">
        Network with people from around the world, join groups, create your own,
        watch courses and become the best version of yourself.
      </p>
      <SignInForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <GoogleAuthButton method="signin" />
    </>
  );
};

export default SignInPage;

// Composant SignInPage :
// Cette page affiche une interface de connexion avec un formulaire de connexion standard et une option pour se connecter via Google.

// Éléments principaux :
// Titre et description :
// Un titre "Login" et une description expliquant les avantages de la plateforme.

// Formulaire de connexion :
// Utilise le composant SignInForm pour permettre à l'utilisateur de se connecter avec un e-mail et un mot de passe.

// Séparateur :
// Un séparateur horizontal (Separator) avec le texte "OR CONTINUE WITH" au centre pour distinguer les options de connexion.

// Connexion via Google :
// Utilise le composant GoogleAuthButton pour permettre à l'utilisateur de se connecter via Google.

// Styles :
// Le texte et les éléments sont stylisés avec des couleurs spécifiques (text-themeTextWhite, text-themeTextGray, bg-themeGray) pour correspondre au thème de l'application.
