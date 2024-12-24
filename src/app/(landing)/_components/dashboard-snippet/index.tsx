import Image from "next/image";

const DashboardSnippet = () => {
  return (
    <div className="relative py-20">
      <div className="w-full h-3/6 absolute rounded-[50%] radial--blur opacity-40 mx-10" />
      <div className="w-full aspect-video relative">
        <Image
          priority
          src="/dashboard-snippet.png"
          className="opacity-[0.95]"
          alt="snippet"
          sizes="100vw"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default DashboardSnippet;

// Composant DashboardSnippet :
// Ce composant affiche un aperçu visuel d'un tableau de bord (dashboard) avec une image.

// Éléments principaux :
// Fond dégradé : Un élément avec une forme radiale et un effet de flou (radial--blur) est utilisé comme fond.
// Image : Une image du tableau de bord est chargée avec Image de Next.js. Elle est positionnée de manière à couvrir tout l'espace disponible (fill) tout en conservant ses proportions (objectFit="contain").

// Fonctionnalités principales :
// L'image est prioritaire (priority) pour un chargement rapide.
// Le fond dégradé avec flou ajoute un effet visuel moderne et attrayant.
