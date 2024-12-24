"use client";

import { Card, CardContent } from "@/components/ui/card";
import { GROUPLE_CONSTANTS } from "@/constants";
import { useNavigation } from "@/hooks/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

type MenuProps = {
  orientation: "mobile" | "desktop";
};

const Menu = ({ orientation }: MenuProps) => {
  const { section, onSetSection } = useNavigation();
  switch (orientation) {
    case "desktop":
      return (
        <Card className="bg-themeGray border-themeGray bg-clip-padding backdrop--blur__safari backdrop-filter backdrop-blur-2xl bg-opacity-60 p-1 lg:flex hidden rounded-xl">
          <CardContent className="p-0 flex gap-2">
            {GROUPLE_CONSTANTS.landingPageMenu.map((menuItem) => (
              <Link
                href={menuItem.path}
                {...(menuItem.section && {
                  onClick: () => onSetSection(menuItem.path),
                })}
                className={cn(
                  "rounded-xl flex gap-2 py-2 px-4 items-center",
                  section == menuItem.path
                    ? "bg-[#09090B] border-[#27272A]"
                    : ""
                )}
                key={menuItem.id}
              >
                {section == menuItem.path && menuItem.icon}
                {menuItem.label}
              </Link>
            ))}
          </CardContent>
        </Card>
      );

    case "mobile":
      return (
        <div className="flex flex-col mt-10">
          {GROUPLE_CONSTANTS.landingPageMenu.map((menuItem) => (
            <Link
              href={menuItem.path}
              {...(menuItem.section && {
                onClick: () => onSetSection(menuItem.path),
              })}
              className={cn(
                "rounded-xl flex gap-2 py-2 px-4 items-center",
                section == menuItem.path ? "bg-themeGray border-[#27272A]" : ""
              )}
              key={menuItem.id}
            >
              {menuItem.icon}
              {menuItem.label}
            </Link>
          ))}
        </div>
      );
    default:
      return <></>;
  }
};

export default Menu;

// Composant Menu :
// Ce composant affiche un menu avec des liens (pour les versions mobile et desktop).
// Il utilise un hook personnalisé useNavigation pour suivre la section actuelle (section) et la mettre à jour (onSetSection).
// Menu dynamique :
// Les liens sont générés à partir d'une liste constante (GROUPLE_CONSTANTS.landingPageMenu).
// Chaque lien est stylisé différemment selon que la section actuelle correspond à son chemin (section == menuItem.path).
// Fonctionnalités principales :
// Les liens changent de style en fonction de la section active.
// Cliquer sur un lien met à jour la section actuelle via onSetSection.
// En résumé, ce composant affiche un menu adaptatif (mobile/desktop) qui suit et met à jour dynamiquement la section actuelle de l'application.
