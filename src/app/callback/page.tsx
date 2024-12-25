import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";

const CallBackPage = () => {
  return <AuthenticateWithRedirectCallback />;
};

export default CallBackPage;

// Composant CallBackPage :
// Ce composant gère la redirection après une authentification externe réussie (par exemple, via Google ou un autre fournisseur OAuth).

// Fonctionnalités principales :
// Utilise AuthenticateWithRedirectCallback de Clerk pour gérer le processus de redirection après une authentification externe.
// Ce composant est essentiel pour terminer le flux d'authentification OAuth et rediriger l'utilisateur vers la page appropriée.

// Utilisation :
// Ce composant est généralement utilisé sur une page de callback (par exemple, /callback) pour finaliser l'authentification et rediriger l'utilisateur vers l'application.
