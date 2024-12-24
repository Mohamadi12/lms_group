import React from 'react'
import CallToAction from './_components/call-to-action'
import DashboardSnippet from './_components/dashboard-snippet'
import dynamic from 'next/dynamic'


const PricingSection = dynamic(
  () =>
    import("./_components/pricing").then(
      (component) => component.PricingSection,
    ),
  { ssr: true },
)

export default function Home() {
  return (
    <main className="md:px-10 py-20 flex flex-col gap-36">
      <div>
        <CallToAction />
        <DashboardSnippet />
      </div>
      <PricingSection />
    </main>
  )
}

// Composant Home :

// Ce composant représente la page d'accueil d'un site web.

// Il contient plusieurs sections, dont un appel à l'action, un aperçu du tableau de bord, et une section de tarification.

// Éléments principaux :

// CallToAction : Une section pour encourager les utilisateurs à interagir avec la plateforme (titre, description, boutons).

// DashboardSnippet : Une section visuelle affichant un aperçu du tableau de bord avec une image.

// PricingSection : Une section dynamique (chargée avec dynamic) pour afficher les options de tarification.

// Fonctionnalités principales :

// Les sections sont disposées en colonne avec un espace (gap-36) entre elles pour une meilleure présentation.

// La section de tarification est chargée dynamiquement pour optimiser les performances (avec ssr: true pour le rendu côté serveur).








// import("./_components/pricing") :
// Cela charge le module pricing de manière asynchrone.
// Une fois le module chargé, il retourne un objet contenant le composant PricingSection.
// .then((component) => component.PricingSection) :
// Une fois le module chargé, on extrait le composant PricingSection de l'objet retourné.
// { ssr: true } :
// Cette option indique que le composant doit être rendu côté serveur (Server-Side Rendering).
// Si vous mettez ssr: false, le composant ne sera pas rendu côté serveur, mais uniquement dans le navigateur.