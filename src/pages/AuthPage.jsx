import React, { useState } from "react";
import Header from "../components/Header";
import AuthForm from "../components/auth/AuthForm";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import AuthInfo from "../components/auth/AuthInfo";
import OnboardingPage from "./OnboardingPage";

const AuthPage = ({ onNavigate }) => {
  const [mode, setMode] = useState("login");
  const [showOnboarding, setShowOnboarding] = useState(false);

  //After successful signup
  if (showOnboarding) {
    return (
      <OnboardingPage
        onComplete={() => onNavigate("/dashboard")}
      />
    );
  }

  return (
    <>
      <NavBar />
      <div className="min-h-[82vh] bg-xp-canvas flex items-center justify-center p-4">
        <div className="w-full max-w-[850px] min-h-[600px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] grid grid-cols-[40%_60%]">
          <AuthInfo />

          <div className="bg-white px-8 py-10 sm:px-11">
            <Header mode={mode} setMode={setMode} />
            <AuthForm
              mode={mode}
              setMode={setMode}
              onSignupSuccess={() => setShowOnboarding(true)}
              onLoginSuccess={() => setShowOnboarding(true)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
