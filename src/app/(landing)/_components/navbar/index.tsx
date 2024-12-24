import React from "react";
import Menu from "./menu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logout } from "@/icons";
import { MenuIcon } from "lucide-react";
import GlassSheet from "@/components/global/glass-sheet";

const LandingPageNavbar = () => {
  return (
    <div className="w-full flex justify-between sticky top-0 items-center py-5 z-50">
      <p className="font-bold text-2xl">studies.</p>
      <Menu orientation="desktop" />
      <div className="flex gap-2">
        <Link href="/sign-in">
          <Button
            variant="outline"
            className="bg-themeBlack rounded-2xl flex gap-2 border-themeGray hover:bg-themeGray"
          >
            <Logout />
            Login
          </Button>
        </Link>
        <GlassSheet
          triggerClass="lg:hidden"
          trigger={
            <Button variant="ghost" className="hover:bg-transparent">
              <MenuIcon size={30} />
            </Button>
          }
        >
          <Menu orientation="mobile" />
        </GlassSheet>
      </div>
    </div>
  );
};

export default LandingPageNavbar;

//   Menu desktop : Un menu adaptatif pour les écrans larges, utilisant le composant Menu avec l'orientation "desktop".
// Bouton de connexion : Un lien vers /sign-in avec un bouton stylisé contenant une icône (Logout) et le texte "Login".
// Menu mobile : Un bouton déclencheur (icône MenuIcon) qui ouvre un "sheet" (fenêtre glissante) contenant le menu mobile (Menu avec l'orientation "mobile").
// Fonctionnalités principales :
// La barre de navigation est responsive : elle affiche un menu desktop pour les grands écrans et un menu mobile pour les petits écrans.
// Le menu mobile utilise le composant GlassSheet pour un effet visuel "verre".
