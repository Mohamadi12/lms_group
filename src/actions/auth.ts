"use server";

import client from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticatedUser = async () => {
  try {
    const clerk = await currentUser();
    if (!clerk) return { status: 404 };

    const user = await client.user.findUnique({
      where: {
        clerkId: clerk.id,
      },
      select: {
        id: true,
        firstname: true,
        lastname: true,
      },
    });
    if (user)
      return {
        status: 200,
        id: user.id,
        image: clerk.imageUrl,
        username: `${user.firstname} ${user.lastname}`,
      };
    return {
      status: 404,
    };
  } catch (error) {
    return {
      status: 400,
    };
  }
};
//   Fonction onAuthenticatedUser :
//   Cette fonction vérifie si un utilisateur est authentifié et récupère ses informations.

//   Étapes principales :
//   1. Récupère l'utilisateur actuel via currentUser() (probablement Clerk pour l'authentification).
//   2. Si l'utilisateur n'existe pas, retourne un statut 404.
//   3. Si l'utilisateur existe, cherche ses détails dans la base de données via client.user.findUnique.
//   4. Si l'utilisateur est trouvé, retourne ses informations (ID, image, nom complet) avec un statut 200.
//   5. Si une erreur survient, retourne un statut 400.

//   Retour :
//   Retourne un objet contenant :
//   status : Code de statut (200, 404, 400).
//   id, image, username : Informations de l'utilisateur si trouvé.



export const onSignUpUser = async (data: {
  firstname: string;
  lastname: string;
  image: string;
  clerkId: string;
}) => {
  try {
    const createdUser = await client.user.create({
      data: {
        ...data,
      },
    });

    if (createdUser) {
      return {
        status: 200,
        message: "User successfully created",
        id: createdUser.id,
      };
    }

    return {
      status: 400,
      message: "User could not be created! Try again",
    };
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again",
    };
  }
};
// Fonction onSignUpUser :
// Cette fonction crée un nouvel utilisateur dans la base de données avec les informations fournies.

// Paramètres :
// data : Un objet contenant les informations de l'utilisateur (firstname, lastname, image, clerkId).

// Fonctionnalités principales :
// Utilise client.user.create pour créer un utilisateur dans la base de données avec les données fournies.
// Si la création réussit, retourne un statut 200 avec un message de succès et l'ID de l'utilisateur.
// Si la création échoue, retourne un statut 400 avec un message d'erreur.

// Gestion des erreurs :
// En cas d'erreur, retourne un statut 400 avec un message d'erreur générique.



export const onSignInUser = async (clerkId: string) => {
  try {
    const loggedInUser = await client.user.findUnique({
      where: {
        clerkId,
      },
      select: {
        id: true,
        group: {
          select: {
            id: true,
            channel: {
              select: {
                id: true,
              },
              take: 1,
              orderBy: {
                createdAt: "asc",
              },
            },
          },
        },
      },
    });

    if (loggedInUser) {
      if (loggedInUser.group.length > 0) {
        return {
          status: 207,
          id: loggedInUser.id,
          groupId: loggedInUser.group[0].id,
          channelId: loggedInUser.group[0].channel[0].id,
        };
      }

      return {
        status: 200,
        message: "User successfully logged in",
        id: loggedInUser.id,
      };
    }

    return {
      status: 400,
      message: "User could not be logged in! Try again",
    };
  } catch (error) {
    return {
      status: 400,
      message: "Oops! something went wrong. Try again",
    };
  }
};
// Fonction onSignInUser :
// Cette fonction vérifie si un utilisateur peut se connecter et récupère ses informations, y compris son groupe et son canal associé.

// Paramètre :
// clerkId : L'identifiant unique de l'utilisateur (fourni par Clerk pour l'authentification).

// Fonctionnalités principales :
// Recherche l'utilisateur dans la base de données via client.user.findUnique.
// Si l'utilisateur existe et appartient à un groupe, retourne :
// Un statut 207 (Multi-Status) avec l'ID de l'utilisateur, l'ID du groupe et l'ID du canal associé.
// Si l'utilisateur existe mais n'appartient à aucun groupe, retourne :
// Un statut 200 avec un message de succès et l'ID de l'utilisateur.
// Si l'utilisateur n'existe pas ou en cas d'erreur, retourne un statut 400 avec un message d'erreur.

// Gestion des erreurs :
// En cas d'erreur, retourne un statut 400 avec un message d'erreur générique.
