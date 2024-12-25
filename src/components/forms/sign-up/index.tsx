"use client";

import { FormGenerator } from "@/components/global/form-generator";
import { Loader } from "@/components/global/loader";
import { Button } from "@/components/ui/button";
import { GROUPLE_CONSTANTS } from "@/constants";
import { useAuthSignUp } from "@/hooks/authentication";
import dynamic from "next/dynamic";

const OtpInput = dynamic(
  () =>
    import("@/components/global/otp-input").then(
      (component) => component.default
    ),
  { ssr: false }
);

const SignUpForm = () => {
  const {
    register,
    errors,
    verifying,
    creating,
    onGenerateCode,
    onInitiateUserRegistration,
    code,
    setCode,
    getValues,
  } = useAuthSignUp();

  return (
    <form
      onSubmit={onInitiateUserRegistration}
      className="flex flex-col gap-3 mt-10"
    >
      {verifying ? (
        <div className="flex justify-center mb-5">
          <OtpInput otp={code} setOtp={setCode} />
        </div>
      ) : (
        GROUPLE_CONSTANTS.signUpForm.map((field) => (
          <FormGenerator
            {...field}
            key={field.id}
            register={register}
            errors={errors}
          />
        ))
      )}

      {verifying ? (
        <Button type="submit" className="rounded-2xl">
          <Loader loading={creating}>Sign Up with Email</Loader>
        </Button>
      ) : (
        <Button
          type="button"
          className="rounded-2xl"
          onClick={() =>
            onGenerateCode(getValues("email"), getValues("password"))
          }
        >
          <Loader loading={false}>Generate Code</Loader>
        </Button>
      )}
    </form>
  );
};

export default SignUpForm;

//   Composant SignUpForm :
// Ce composant gère un formulaire d'inscription avec une étape de vérification par code OTP.

// Fonctionnalités principales :

// Étape 1 : Formulaire d'inscription :
// Affiche les champs du formulaire d'inscription (GROUPLE_CONSTANTS.signUpForm) en utilisant FormGenerator.
// Un bouton "Generate Code" déclenche l'envoi d'un code de vérification par e-mail via onGenerateCode.

// Étape 2 : Vérification OTP :
// Si la vérification est en cours (verifying), affiche un champ OTP (OtpInput) pour saisir le code reçu.
// Un bouton "Sign Up with Email" soumet le formulaire pour finaliser l'inscription via onInitiateUserRegistration.

// Gestion des états :
// Utilise useAuthSignUp pour gérer :
// L'enregistrement des champs du formulaire (register).
// Les erreurs de validation (errors).
// Les états verifying (vérification en cours) et creating (inscription en cours).
// La récupération des valeurs du formulaire (getValues).

// Composant dynamique OtpInput :
// Chargé dynamiquement avec dynamic pour optimiser les performances (pas de rendu côté serveur avec ssr: false).

// Loader :
// Affiche un indicateur de chargement (Loader) pendant les étapes de génération de code et d'inscription.
