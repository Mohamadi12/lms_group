import { onAuthenticatedUser } from "@/actions/auth";
import BackdropGradient from "@/components/global/backdrop-gradient";
import GlassCard from "@/components/global/glass-card";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const user = await onAuthenticatedUser();

  if (user.status === 200) redirect("/callback/sign-in");

  return (
    <div className="container h-screen flex justify-center items-center">
      <div className="flex flex-col w-full items-center py-24">
        <h2 className="text-4xl font-bold text-themeTextWhite">Grouple.</h2>
        <BackdropGradient
          className="w-4/12 h-2/6 opacity-40"
          container="flex flex-col items-center"
        >
          <GlassCard className="xs:w-full md:w-7/12 lg:w-5/12 xl:w-4/12 p-7 mt-16">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  );
};

export default AuthLayout;

//   Composant AuthLayout :
// Ce composant sert de mise en page pour les pages d'authentification (connexion, inscription, etc.).
// Il vérifie si un utilisateur est déjà authentifié et redirige vers /callback/sign-in si c'est le cas.

// Fonctionnalités principales :
// Vérification de l'authentification :
// Utilise onAuthenticatedUser pour vérifier si l'utilisateur est déjà connecté.
// Si l'utilisateur est authentifié (user.status === 200), il est redirigé vers /callback/sign-in.

// Mise en page :
// Affiche un titre (Grouple.) et un contenu entouré d'un fond dégradé (BackdropGradient) et d'une carte avec effet de verre (GlassCard).
// Le contenu (children) est passé dynamiquement (par exemple, un formulaire de connexion ou d'inscription).

// Pourquoi /callback/sign-in ? :
// Redirection après authentification :
// /callback/sign-in est une route utilisée pour gérer les redirections après une authentification réussie.
// Cela permet de s'assurer que l'utilisateur est redirigé vers la bonne page après s'être connecté (par exemple, vers le tableau de bord ou une page spécifique).

// Styles :
// Le layout est centré verticalement et horizontalement.
// Le fond dégradé et la carte avec effet de verre ajoutent un style moderne et attrayant.
