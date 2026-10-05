import React, { useRef } from "react";
import { ArrowRight, MapPin, UserRound } from "lucide-react";

const Step1AboutYou = ({ data, updateData, onNext, errors = {} }) => {
  const fileInputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files?.[0];

    if (file) {
      updateData({
        profilePicture: file,
      });
    }
  };

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onNext();
      }}
      className="p-6 sm:p-8"
    >
      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-[26px] font-semibold tracking-tight text-xp-title">
          About You
        </h2>

        <p className="mt-1 text-[15px] text-slate-600">
          Let's start by getting to know your professional background.
        </p>
      </div>

      {/* First + Last name */}
      <div className="grid gap-4 sm:grid-cols-2">
        <InputField
          label="First Name"
          placeholder="e.g. Jane"
          value={data.firstName}
          onChange={(value) => updateData({ firstName: value })}
          error={errors.firstName}
        />

        <InputField
          label="Last Name"
          placeholder="e.g. Doe"
          value={data.lastName}
          onChange={(value) => updateData({ lastName: value })}
          error={errors.lastName}
        />
      </div>

      {/* Location */}
      <div className="mt-3">
        <label className="mb-2 block text-xs font-semibold text-xp-ink">
          Location
        </label>

        <div className="relative">
          <MapPin
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-xp-icon"
          />

          <input
            type="text"
            value={data.location}
            onChange={(e) =>
              updateData({
                location: e.target.value,
              })
            }
            placeholder="City, Country"
            className="h-10 w-full rounded-md border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none transition focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10"
            aria-invalid={Boolean(errors.location)}
          />
        </div>
        <FieldError error={errors.location} />
      </div>

      {/* Headline */}
      <div className="mt-3">
        <div className="mb-2 flex justify-between">
          <label className="text-xs font-semibold text-xp-ink">
            Professional Headline
          </label>

          <span className="text-[11px] text-slate-500">
            {data.headline.length}/120
          </span>
        </div>

        <input
          type="text"
          maxLength={120}
          value={data.headline}
          onChange={(e) =>
            updateData({
              headline: e.target.value,
            })
          }
          placeholder="e.g. Senior Product Manager at TechCorp"
          className="h-10 w-full rounded-md border border-slate-200 px-4 text-sm outline-none transition focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10"
          aria-invalid={Boolean(errors.headline)}
        />
        <FieldError error={errors.headline} />

        <p className="mt-2 text-[11px] text-slate-600">
          This will be the first thing other professionals see.
        </p>
      </div>

      {/* Profile picture */}
      <div className="mt-4">
        <label className="mb-2 block text-xs font-semibold text-xp-ink">
          Profile Picture
        </label>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          onChange={handleFile}
          aria-invalid={Boolean(errors.profilePicture)}
        />

        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          className="flex h-[68px] w-full cursor-pointer items-center gap-3 rounded-md border border-dashed border-slate-200 px-4 text-left transition hover:border-xp-primary hover:bg-xp-hover-bg"
        >
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-xp-about-icon-bg">
            <UserRound size={20} className="text-xp-icon-strong" />
          </div>

          <div>
            <p className="text-sm font-semibold text-xp-primary">
              {data.profilePicture
                ? data.profilePicture.name
                : "Click to upload"}
            </p>

            <p className="mt-1 text-[11px] text-slate-600">
              JPEG, PNG under 5MB
            </p>
          </div>
        </button>
        <FieldError error={errors.profilePicture} />
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-end border-t border-slate-200 pt-4">
        <button
          type="submit"
          className="flex h-10 cursor-pointer items-center gap-3 rounded-md bg-xp-action px-6 text-sm font-semibold text-white shadow-sm transition hover:bg-xp-action-hover"
        >
          Next: Professional Identity
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
};

function InputField({ label, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-xp-ink">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`h-11 w-full rounded-md border px-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10 ${
          error ? "border-red-500" : "border-slate-200"
        }`}
      />
      <FieldError error={error} />
    </div>
  );
}

function FieldError({ error }) {
  if (!error) return null;

  return (
    <p className="mt-1 text-xs text-red-600" role="alert">
      {error}
    </p>
  );
}

export default Step1AboutYou;
