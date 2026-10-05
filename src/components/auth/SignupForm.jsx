import React, { useState } from "react";
import SocialAuth from "./SocialAuth";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import Divider from "./Divider";
import { hasValidationErrors, validateSignupForm } from "../../utils/utilities";

const SignupForm = ({ setMode, onSignupSuccess }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();

    const validationErrors = validateSignupForm({
      firstName,
      lastName,
      email,
      password,
      termsAccepted,
    });
    setErrors(validationErrors);

    if (!hasValidationErrors(validationErrors)) {
      onSignupSuccess();
    }
  };

  return (
    <form onSubmit={handleSignup} noValidate>
      <div className="mb-6">
        <h1 className="text-[24px] font-bold tracking-tight text-xp-heading">
          Create your account
        </h1>

        <p className="mt-1 text-[15px] text-gray-500">
          Join XP-HUB and start your professional journey.
        </p>
      </div>

      <SocialAuth />

      <Divider />

      <div className="flex gap-4 ">
        <div>
          <label className="mb-2 block text-[13px] font-medium">
            First Name
          </label>

          <input
            type="text"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
              setErrors((previous) => ({ ...previous, firstName: null }));
            }}
            placeholder="Jane"
            aria-invalid={Boolean(errors.firstName)}
            className={`h-10 w-full rounded-md border px-3 text-sm outline-none focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10 font-medium ${
              errors.firstName ? "border-red-500" : "border-gray-200"
            }`}
          />
          <FieldError error={errors.firstName} />
        </div>

        <div>
          <label className="mb-2 block text-[13px] font-medium">
            Last Name
          </label>

          <input
            type="text"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
              setErrors((previous) => ({ ...previous, lastName: null }));
            }}
            placeholder="Doe"
            aria-invalid={Boolean(errors.lastName)}
            className={`h-10 w-full rounded-md border px-3 text-sm outline-none focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10 font-medium ${
              errors.lastName ? "border-red-500" : "border-gray-200"
            }`}
          />
          <FieldError error={errors.lastName} />
        </div>
      </div>

      <div className="mt-4">
        <EmailInput
          value={email}
          onChange={(value) => {
            setEmail(value);
            setErrors((previous) => ({ ...previous, email: null }));
          }}
          error={errors.email}
        />
      </div>

      <PasswordInput
        value={password}
        onChange={(value) => {
          setPassword(value);
          setErrors((previous) => ({ ...previous, password: null }));
        }}
        isForget={false}
        error={errors.password}
      />
      <p className="text-gray-400 text-xs py-1">
        Must be at least 8 characters.
      </p>
      <div className="mt-4 flex gap-1 font-medium">
        <input
          type="checkbox"
          id="t&c"
          checked={termsAccepted}
          onChange={(e) => {
            setTermsAccepted(e.target.checked);
            setErrors((previous) => ({ ...previous, termsAccepted: null }));
          }}
          aria-invalid={Boolean(errors.termsAccepted)}
        />
        <label htmlFor="t&c" className="text-xs">
          I agree to the{" "}
          <span className="text-xp-link cursor-pointer hover:underline">
            Terms of Service
          </span>{" "}
          and{" "}
          <span className="text-xp-link cursor-pointer hover:underline">
            Privacy Policy
          </span>
          .
        </label>
      </div>
      <FieldError error={errors.termsAccepted} />
      <button
        type="submit"
        className="mt-5 h-10 w-full cursor-pointer rounded-md bg-xp-primary text-sm font-semibold text-white hover:bg-xp-primary-hover"
      >
        Sign Up
      </button>

      <p className="text-sm text-center mt-3">
        Already have an account?{" "}
        <span
          className="text-xp-link hover:underline cursor-pointer"
          onClick={() => setMode("login")}
        >
          Log in
        </span>
      </p>
    </form>
  );
};

function FieldError({ error }) {
  if (!error) return null;

  return (
    <p className="mt-1 text-xs text-red-600" role="alert">
      {error}
    </p>
  );
}

export default SignupForm;
