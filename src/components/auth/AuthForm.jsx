import React from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthForm = ({ mode, setMode, onSignupSuccess, onLoginSuccess }) => {
  return (
    <div className="mt-8">
      {mode === "login" ? (
        <LoginForm onLoginSuccess={onLoginSuccess} />
      ) : (
        <SignupForm setMode={setMode} onSignupSuccess={onSignupSuccess} />
      )}
    </div>
  );
};

export default AuthForm;
