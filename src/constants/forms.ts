export type AuthFormProps = {
  id: string;
  type: "email" | "text" | "password";
  inputType: "select" | "input";
  options?: { value: string; label: string; id: string }[];
  label?: string;
  placeholder: string;
  name: string;
};
export const SIGN_UP_FORM: AuthFormProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "First name",
    name: "firstname",
    type: "text",
  },
  {
    id: "2",
    inputType: "input",
    placeholder: "Last name",
    name: "lastname",
    type: "text",
  },
  {
    id: "3",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "4",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
];

export const SIGN_IN_FORM: AuthFormProps[] = [
  {
    id: "1",
    inputType: "input",
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: "4",
    inputType: "input",
    placeholder: "Password",
    name: "password",
    type: "password",
  },
];

//   Type AuthFormProps :
// Définit la structure des champs de formulaire pour l'authentification.

// Propriétés :
// id : Identifiant unique du champ.
// type : Type de champ (email, text, password).
// inputType : Type d'entrée (input, select).
// options : Options pour les champs select (liste déroulante).
// label : Étiquette du champ (optionnelle).
// placeholder : Texte d'espace réservé pour le champ.
// name : Nom du champ pour la validation et l'enregistrement.

// Tableau SIGN_UP_FORM :
// Contient les champs nécessaires pour un formulaire d'inscription :
// Prénom (firstname, texte).
// Nom (lastname, texte).
// E-mail (email, e-mail).
// Mot de passe (password, mot de passe).

// Tableau SIGN_IN_FORM :
// Contient les champs nécessaires pour un formulaire de connexion :
// E-mail (email, e-mail).
// Mot de passe (password, mot de passe).

// Utilisation :
// Ces tableaux peuvent être utilisés pour générer dynamiquement des formulaires d'inscription et de connexion en combinant avec un composant comme FormGenerator.
