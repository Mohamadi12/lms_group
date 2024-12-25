import SignUpForm from "@/components/forms/sign-up";
import { GoogleAuthButton } from "@/components/global/google-oauth-button";
import { Separator } from "@/components/ui/separator";
import React from "react";

const SignUpPage = () => {
  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite">Signup</h5>
      <p className="text-themeTextGray leading-tight">
        Network with people from around the world, join groups, create your own,
        watch courses and become the best version of yourself.
      </p>
      <SignUpForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <GoogleAuthButton method="signup" />
    </>
  );
};
export default SignUpPage;

// Composant SignUpPage :
// Cette page affiche une interface d'inscription avec un formulaire d'inscription standard et une option pour s'inscrire via Google.

// Éléments principaux :
// Titre et description :
// Un titre "Signup" et une description expliquant les avantages de la plateforme.

// Formulaire d'inscription :
// Utilise le composant SignUpForm pour permettre à l'utilisateur de s'inscrire avec des informations de base (nom, e-mail, mot de passe).

// Séparateur :
// Un séparateur horizontal (Separator) avec le texte "OR CONTINUE WITH" au centre pour distinguer les options d'inscription.

// Inscription via Google :
// Utilise le composant GoogleAuthButton pour permettre à l'utilisateur de s'inscrire via Google.

// Styles :
// Le texte et les éléments sont stylisés avec des couleurs spécifiques (text-themeTextWhite, text-themeTextGray, bg-themeGray) pour correspondre au thème de l'application.
