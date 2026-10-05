import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, isForget, error }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between">
        <label className="text-[13px] font-medium">
          Password
        </label>

        {isForget && (
          <button
            type="button"
            className="text-[12px] font-medium text-xp-link hover:underline cursor-pointer"
          >
            Forgot password?
          </button>
        )}
      </div>

      <div className="relative">
        <input
          type={isShowPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="••••••••"
          aria-invalid={Boolean(error)}
          aria-describedby={error ? "password-error" : undefined}
          className={`h-10 w-full rounded-md border bg-white px-3 pr-10 text-sm text-gray-800 outline-none placeholder:text-gray-300 transition focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10 font-medium ${
            error ? "border-red-500" : "border-gray-200"
          }`}
        />

        <button
          type="button"
          aria-label={isShowPassword ? "Hide password" : "Show password"}
          className="text-primary cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
          onClick={toggleShowPassword}
        >
          {isShowPassword ? (
            <FaRegEye size={20} className="text-slate-500 hover:text-slate-700" />
          ) : (
            <FaRegEyeSlash size={20} className="text-slate-500 hover:text-slate-700" />
          )}
        </button>
      </div>
      {error && (
        <p id="password-error" className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;
