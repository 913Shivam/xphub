import React from "react";

const Header = ({ mode, setMode }) => {
  return (
    <div className="flex w-full border-b border-gray-200">
      <button
        type="button"
        onClick={() => setMode("login")}
        className={`relative w-1/2 py-2.5 text-sm cursor-pointer font-medium transition-colors ${mode === "login" ? "text-xp-primary" : "text-gray-600 hover:text-gray-900"} cursor-pointer font-medium`}
      >
        Log In
        {mode === "login" && (
          <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-xp-primary" />
        )}
      </button>

      <button
        type="button"
        onClick={() => setMode("signup")}
        className={`relative w-1/2 py-2.5 cursor-pointer font-medium text-sm transition-colors ${
          mode === "signup"
            ? "text-xp-primary"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        Sign Up
        {mode === "signup" && (
          <span className="absolute bottom-[-1px] left-0 h-[2px] w-full bg-xp-primary" />
        )}
      </button>
    </div>
  );
};

export default Header;
