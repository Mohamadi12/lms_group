"use client";

import { Button } from "@/components/ui/button";
import { Google } from "@/icons";
import { Loader } from "../loader";
import { useGoogleAuth } from "@/hooks/authentication";

type GoogleAuthButtonProps = {
  method: "signup" | "signin";
};

export const GoogleAuthButton = ({ method }: GoogleAuthButtonProps) => {
  const { signUpWith, signInWith } = useGoogleAuth();
  return (
    <Button
      {...(method === "signin"
        ? {
            onClick: () => signInWith("oauth_google"),
          }
        : {
            onClick: () => signUpWith("oauth_google"),
          })}
      className="w-full rounded-2xl flex gap-3 bg-themeBlack border-themeGray"
      variant="outline"
    >
      <Loader loading={false}>
        <Google />
        Google
      </Loader>
    </Button>
  );
};

// Composant GoogleAuthButton :
// Ce composant crée un bouton pour se connecter ou s'inscrire via Google en utilisant OAuth.

// Props :
// method : Détermine si le bouton est utilisé pour la connexion (signin) ou l'inscription (signup).

// Fonctionnalités principales :
// Connexion ou inscription via Google :
// Utilise signInWith ou signUpWith (provenant de useGoogleAuth) pour déclencher l'authentification OAuth avec Google.
// L'action dépend de la valeur de method.

// Styles :
// Le bouton est stylisé avec un fond sombre (bg-themeBlack), une bordure (border-themeGray), et un effet arrondi (rounded-2xl).
// Il inclut une icône Google (<Google />) et le texte "Google".
// Loader :
// Le composant Loader est utilisé pour afficher un indicateur de chargement, mais ici il est désactivé (loading={false}).
