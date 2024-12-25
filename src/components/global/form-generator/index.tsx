import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type FormGeneratorProps = {
  type?: "text" | "email" | "password" | "number";
  inputType: "select" | "input" | "textarea";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  register: UseFormRegister<any>;
  name: string;
  errors: FieldErrors<FieldValues>;
  lines?: number;
};

export const FormGenerator = ({
  inputType,
  options,
  label,
  placeholder,
  register,
  name,
  errors,
  type,
  lines,
}: FormGeneratorProps) => {
  switch (inputType) {
    case "input":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Input
            id={`input-${label}`}
            type={type}
            placeholder={placeholder}
            className="bg-themeBlack border-themeGray text-themeTextGray"
            {...register(name)}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "select":
      return (
        <Label htmlFor={`select-${label}`} className="flex flex-col gap-2">
          {label && label}
          <select
            id={`select-${label}`}
            className="w-full bg-transparent border-[1px] p-3 rounded-lg"
            {...register(name)}
          >
            {options?.length &&
              options.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                  className="dark:bg-muted"
                >
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    case "textarea":
      return (
        <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
          {label && label}
          <Textarea
            className="bg-themeBlack border-themeGray text-themeTextGray"
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === "Required" ? "" : message}
              </p>
            )}
          />
        </Label>
      );
    default:
      return <></>;
  }
};

//   Composant FormGenerator :
// Ce composant génère dynamiquement des champs de formulaire en fonction du type spécifié (input, select, textarea).

// Props :
// inputType : Détermine le type de champ à générer (input, select, textarea).
// type : Type d'entrée pour les champs input (texte, e-mail, mot de passe, nombre).
// options : Options pour les champs select (liste déroulante).
// label : Étiquette du champ.
// placeholder : Texte d'espace réservé pour le champ.
// register : Fonction de react-hook-form pour enregistrer le champ.
// name : Nom du champ pour la validation et l'enregistrement.
// errors : Objet contenant les erreurs de validation.
// lines : Nombre de lignes pour les champs textarea.

// Fonctionnalités principales :
// Champ input :
// Génère un champ de saisie standard avec un type spécifié (texte, e-mail, etc.).
// Affiche un message d'erreur si la validation échoue.

// Champ select :
// Génère une liste déroulante avec des options fournies.
// Affiche un message d'erreur si la validation échoue.

// Champ textarea :
// Génère une zone de texte avec un nombre de lignes personnalisé.
// Affiche un message d'erreur si la validation échoue.

// Gestion des erreurs :
// Utilise ErrorMessage pour afficher les messages d'erreur de validation.
// Masque le message "Required" pour une meilleure expérience utilisateur.
