import React, { useState } from "react";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import SocialAuth from "./SocialAuth";
import Divider from "./Divider";
import { hasValidationErrors, validateLoginForm } from "../../utils/utilities";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();

    const validationErrors = validateLoginForm({ email, password });
    setErrors(validationErrors);

    if (!hasValidationErrors(validationErrors)) {
      onLoginSuccess();
    }
  };

  return (
    <form onSubmit={handleLogin} noValidate className="w-full">
      <div className="mb-7">
        <h1 className="text-[24px] font-bold tracking-tight text-xp-heading">
          Welcome back
        </h1>

        <p className="mt-1 text-[15px] text-gray-500">
          Enter your details to access your account.
        </p>
      </div>
      <SocialAuth />

      <Divider />

      <EmailInput
        value={email}
        onChange={(value) => {
          setEmail(value);
          setErrors((previous) => ({ ...previous, email: null }));
        }}
        error={errors.email}
      />

      <PasswordInput
        value={password}
        onChange={(value) => {
          setPassword(value);
          setErrors((previous) => ({ ...previous, password: null }));
        }}
        isForget={true}
        error={errors.password}
      />

      <button
        type="submit"
        className="cursor-pointer mt-5 h-10 w-full rounded-md bg-xp-primary text-sm font-semibold text-white transition hover:bg-xp-primary-hover active:scale-[0.99]"
      >
        Log In
      </button>
    </form>
  );
};

export default LoginForm;
