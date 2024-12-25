import { onSignInUser } from "@/actions/auth";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

const CompleteSigIn = async () => {
  const user = await currentUser();
  if (!user) return redirect("/sign-in");

  const authenticated = await onSignInUser(user.id);

  if (authenticated.status === 200) return redirect(`/group/create`);

  if (authenticated.status === 207)
    return redirect(
      `/group/${authenticated.groupId}/channel/${authenticated.channelId}`
    );

  if (authenticated.status !== 200) {
    redirect("/sign-in");
  }
};

export default CompleteSigIn;

// Fonction CompleteSigIn :
// Ce composant gère la finalisation de la connexion d'un utilisateur après une authentification réussie (par exemple, via Clerk).

// Étapes principales :
// Récupération de l'utilisateur :
// Utilise currentUser de Clerk pour obtenir les informations de l'utilisateur authentifié.
// Si l'utilisateur n'existe pas, redirige vers la page de connexion (/sign-in).

// Vérification de l'authentification :
// Appelle onSignInUser pour vérifier si l'utilisateur est déjà enregistré et récupérer ses informations (ID, groupe, canal).

// Redirection :
// Si l'utilisateur n'a pas de groupe (authenticated.status === 200), redirige vers /group/create pour créer un groupe.
// Si l'utilisateur a déjà un groupe (authenticated.status === 207), redirige vers le canal correspondant (/group/{groupId}/channel/{channelId}).
// Si l'authentification échoue, redirige vers la page de connexion (/sign-in).

// Utilisation :
// Ce composant est généralement utilisé après une connexion réussie pour rediriger l'utilisateur vers la page appropriée en fonction de son état (création de groupe ou accès à un canal existant).
