import React from "react";
import { FcGoogle } from "react-icons/fc";
import { RxLinkedinLogo } from "react-icons/rx";

const SocialAuth = () => {
  const handleGoogleLogin = () => {
    //Google authenication Logic

    console.log("Continue with google");
  };

  const handleLinkedInLogin = () => {
    //LinkedIn authentication Logic

    console.log("Continue with LinkedIn");
  };

  return (
    <div className="space-y-2.5">
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex h-[38px] w-full items-center justify-center gap-3 rounded-md border border-gray-200 bg-white text-[13px] font-semibold text-gray-800 transition hover:bg-gray-50 cursor-pointer font-medium"
      >
        <FcGoogle size={20} />
        <span>Continue with Google</span>
      </button>

      <button
        type="button"
        onClick={handleLinkedInLogin}
        className="flex h-[38px] w-full items-center justify-center gap-3 rounded-md border border-gray-200 bg-white text-[13px] font-semibold text-gray-800 transition hover:bg-gray-50 cursor-pointer font-medium"
      >
        <RxLinkedinLogo className="text-xp-linkedin" size={20} />
        <span>Continue with LinkedIn</span>
      </button>
    </div>
  );
};

export default SocialAuth;
