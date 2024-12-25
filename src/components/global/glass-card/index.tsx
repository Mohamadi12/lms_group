import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const GlassCard = ({ children, className }: Props) => {
  return (
    <Card
      className={cn(
        className,
        "rounded-2xl bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-4xl bg-opacity-40"
      )}
    >
      {children}
    </Card>
  );
};

export default GlassCard;

// Composant GlassCard :
// Ce composant crée une carte avec un effet de verre (glassmorphism) pour un style moderne et esthétique.

// Props :
// children : Le contenu à afficher à l'intérieur de la carte.
// className : Permet de personnaliser les styles supplémentaires.
// Styles appliqués :
// Effet de verre :
// Utilise backdrop-filter et backdrop-blur-4xl pour créer un flou d'arrière-plan.
// bg-opacity-40 rend l'arrière-plan semi-transparent.

// Autres styles :
// Bordure arrondie (rounded-2xl).
// Couleur de fond et de bordure (bg-themeGray, border-themeGray).
