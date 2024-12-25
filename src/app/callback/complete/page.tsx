import { onSignUpUser } from "@/actions/auth";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CompleteOAuthAfterCallback = async () => {
  const user = await currentUser();
  if (!user) redirect("/sign-in");
  const complete = await onSignUpUser({
    firstname: user.firstName as string,
    lastname: user.lastName as string,
    image: user.imageUrl,
    clerkId: user.id,
  });

  if (complete.status == 200) {
    redirect(`/group/create`);
  }

  if (complete.status !== 200) {
    redirect("/sign-in");
  }
};

export default CompleteOAuthAfterCallback;

// Fonction CompleteOAuthAfterCallback :
// Ce composant gère la finalisation de l'inscription d'un utilisateur après une authentification OAuth réussie (par exemple, via Google).

// Étapes principales :
// Récupération de l'utilisateur :
// Utilise currentUser de Clerk pour obtenir les informations de l'utilisateur authentifié.
// Si l'utilisateur n'existe pas, redirige vers la page de connexion (/sign-in).

// Création de l'utilisateur :
// Appelle onSignUpUser pour enregistrer l'utilisateur dans la base de données avec les informations fournies (prénom, nom, image, ID Clerk).

// Redirection :
// Si l'inscription réussit (complete.status == 200), redirige l'utilisateur vers /group/create pour créer un groupe.
// Si l'inscription échoue, redirige vers la page de connexion (/sign-in).

// Utilisation :
// Ce composant est généralement utilisé après une authentification OAuth pour finaliser l'inscription et rediriger l'utilisateur vers la page appropriée.
