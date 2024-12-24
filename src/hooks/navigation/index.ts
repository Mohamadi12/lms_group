import { usePathname } from "next/navigation"
import { useState } from "react"

export const useNavigation = () =>{
    const pathName = usePathname()
    const [section, setSection] = useState<string>(pathName) //section sera string
    const onSetSection = (page: string) =>setSection(page)
    return {
        section,
        onSetSection
    }
}
// Récupère le chemin actuel avec usePathname() (par exemple, /about).
// Stocke ce chemin dans un état local avec useState.
// Fournit une fonction (onSetSection) pour mettre à jour cet état.
// Retourne la section actuelle et la fonction pour la modifier.