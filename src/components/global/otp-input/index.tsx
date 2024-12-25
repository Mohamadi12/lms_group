import { InputOTP, InputOTPSlot } from "@/components/ui/input-otp";
import React from "react";

type Props = {
  otp: string;
  setOtp: React.Dispatch<React.SetStateAction<string>>;
};

const OTPInput = ({ otp, setOtp }: Props) => {
  return (
    <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
      <div className="flex gap-3">
        <div>
          <InputOTPSlot index={0} />
        </div>
        <div>
          <InputOTPSlot index={1} />
        </div>
        <div>
          <InputOTPSlot index={2} />
        </div>
        <div>
          <InputOTPSlot index={3} />
        </div>
        <div>
          <InputOTPSlot index={4} />
        </div>
        <div>
          <InputOTPSlot index={5} />
        </div>
      </div>
    </InputOTP>
  );
};

export default OTPInput;

// Composant OTPInput :
// Ce composant crée un champ de saisie pour un code OTP (One-Time Password) à 6 chiffres.

// Props :
// otp : La valeur actuelle du code OTP.
// setOtp : Une fonction pour mettre à jour la valeur du code OTP.

// Fonctionnalités principales :
// Utilise le composant InputOTP pour gérer la saisie du code OTP.
// Affiche 6 slots (emplacements) pour chaque chiffre du code OTP via InputOTPSlot.
// Met à jour la valeur du code OTP (otp) à chaque changement via onChange.

// Structure :
// Les slots sont disposés horizontalement avec un espace entre eux (gap-3).
