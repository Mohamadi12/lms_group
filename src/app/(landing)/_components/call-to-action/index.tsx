import GradientText from "@/components/global/gradient-text";
import { Button } from "@/components/ui/button";
import { BadgePlus } from "@/icons";
import Link from "next/link";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
      <GradientText
        className="text-[35px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
        element="H1"
      >
        Bringing Communities <br className="md:hidden" /> Together
      </GradientText>
      <p className="text-sm md:text-center text-left text-muted-foreground">
        Studies is a vibrant online community platform that empowers
        <br className="md:hidden" />
        people to connect, <br className="hidden md:block" /> collaborate, and
        cultivate meaningful
        <br className="md:hidden" />
        relationships
      </p>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        <Button
          variant="outline"
          className="rounded-xl bg-transparent text-base"
        >
          Watch Demo
        </Button>
        <Link href="/sign-in">
          <Button className="rounded-xl text-base flex gap-2 w-full">
            <BadgePlus /> Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CallToAction;

//   Composant CallToAction :
// Ce composant crée une section de "Call to Action" (appel à l'action) pour encourager les utilisateurs à interagir avec la plateforme.
// Il contient un titre, une description et deux boutons.

// Éléments principaux :
// Titre : Utilise le composant GradientText pour afficher un titre avec un effet de dégradé de couleurs.
// Description : Un texte descriptif expliquant l'objectif de la plateforme.
// Boutons :
// Un bouton "Watch Demo" pour voir une démonstration.
// Un bouton "Get Started" qui redirige vers /sign-in pour commencer.

// Fonctionnalités principales :
// Le titre est responsive et s'adapte à différentes tailles d'écran.
// La description est également responsive, avec des sauts de ligne différents pour les écrans mobiles et desktop.
// Les boutons sont stylisés et disposés en colonne sur mobile et en ligne sur desktop.
