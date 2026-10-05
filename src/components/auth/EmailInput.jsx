import React from "react";

const EmailInput = ({ value, onChange, error }) => {
  return (
    <div>
      <label className="mb-2 block text-[13px] font-medium ">
        Work Email
      </label>

      <input
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="jane@company.com"
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "email-error" : undefined}
        className={`h-10 w-full rounded-md border bg-white px-3 text-sm text-gray-800 outline-none placeholder:text-xp-auth-placeholder transition focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10 font-medium ${
          error ? "border-red-500" : "border-gray-200"
        }`}
      />
      {error && (
        <p id="email-error" className="mt-1 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmailInput;
