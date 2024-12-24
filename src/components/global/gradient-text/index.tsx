import { cn } from "@/lib/utils";

type Props = {
  element?: "H1" | "H2";
  children: React.ReactNode;
  className?: string;
};

const GradientText = ({ children, className, element }: Props) => {
  switch (element) {
    case "H1":
      return <h1 className={cn(className, "text-gradient")}>{children}</h1>;
    case "H2":
      return <h2 className={cn(className, "text-gradient")}>{children}</h2>;
    default:
      return <p className={cn(className, "text-gradient")}>{children}</p>;
  }
};

export default GradientText;

// Composant GradientText :

// Ce composant permet d'afficher un texte avec un effet de dégradé de couleurs.
// Il peut être utilisé pour des titres (H1, H2) ou un paragraphe (p) par défaut.

// Props :
// element : Permet de choisir le type d'élément HTML (H1, H2 ou p par défaut).
// children : Le contenu textuel à afficher.
// className : Permet de personnaliser les styles supplémentaires.

// Fonctionnalités principales :
// Le texte est stylisé avec une classe text-gradient pour appliquer un effet de dégradé.
// Le composant utilise un switch pour déterminer quel élément HTML utiliser en fonction de la prop element.