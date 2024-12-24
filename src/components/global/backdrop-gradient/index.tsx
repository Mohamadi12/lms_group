import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  container?: string;
};

const BackdropGradient = ({ children, className, container }: Props) => {
  return (
    <div className={cn("relative w-full flex flex-col", container)}>
      <div
        className={cn("absolute rounded-[50%] radial--blur mx-10", className)}
      />
      {children}
    </div>
  );
};

export default BackdropGradient;

// Composant BackdropGradient :
// Ce composant crée un fond dégradé avec un effet de flou (radial--blur) pour entourer son contenu.

// Props :
// children : Le contenu à afficher à l'intérieur du fond dégradé.
// className : Permet de personnaliser les styles du fond dégradé.
// container : Permet de personnaliser les styles du conteneur principal.

// Fonctionnalités principales :
// Le fond dégradé est appliqué avec une forme arrondie (rounded-[50%]) et un effet de flou.
// Le contenu est positionné au-dessus du fond dégradé.
