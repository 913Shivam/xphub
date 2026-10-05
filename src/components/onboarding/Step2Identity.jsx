import { ArrowLeft, ArrowRight, ChevronDown, Plus } from "lucide-react";

function Step2Identity({ data, updateData, onNext, onBack, errors = {} }) {
  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onNext();
      }}
      className="p-6 sm:p-8"
    >
      <div className="text-center">
        <h2 className="text-[26px] font-semibold tracking-tight text-xp-title">
          Professional Identity
        </h2>

        <p className="mt-1 text-[15px] text-slate-600">
          Tell us where you are now, so we can connect you with the right
          experience.
        </p>
      </div>

      {/* Current position */}
      <section className="mt-5">
        <h3 className="border-b border-slate-200 pb-2 text-[16px] font-medium text-xp-ink">
          Current Position
        </h3>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Input
            label="Job Title"
            placeholder="e.g. Senior Product Manager"
            value={data.jobTitle}
            onChange={(value) => updateData({ jobTitle: value })}
            error={errors.jobTitle}
          />

          <Input
            label="Company"
            placeholder="e.g. Acme Corp"
            value={data.company}
            onChange={(value) => updateData({ company: value })}
            error={errors.company}
          />
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <SelectBox
            label="Industry"
            value={data.industry}
            placeholder="Select Industry"
            options={[
              "Technology",
              "Finance",
              "Healthcare",
              "Education",
              "Marketing",
              "Other",
            ]}
            onChange={(value) => updateData({ industry: value })}
            error={errors.industry}
          />

          <SelectBox
            label="Years of Experience"
            value={data.yearsExperience}
            placeholder="Select Range"
            options={["0-2 years", "3-5 years", "6-10 years", "10+ years"]}
            onChange={(value) =>
              updateData({
                yearsExperience: value,
              })
            }
            error={errors.yearsExperience}
          />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mt-5 border-t border-slate-200 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] font-medium text-xp-ink">
            Experience Timeline
          </h3>

          <span className="rounded bg-xp-badge-bg px-2 py-1 text-[10px] text-xp-muted">
            Optional
          </span>
        </div>

        <p className="mt-2 text-[13px] text-slate-600">
          Building a timeline helps match you with more relevant peers and
          insights.
        </p>

        <button
          type="button"
          className="mt-3 flex h-[88px] w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 transition hover:border-xp-primary hover:bg-xp-hover-bg"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-xp-identity-icon-bg">
            <Plus size={18} />
          </span>

          <span className="mt-1 text-sm font-semibold text-xp-ink">
            Add Previous Experience
          </span>
        </button>
      </section>

      {/* Footer */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex h-10 cursor-pointer items-center gap-2 rounded-md border border-slate-200 px-5 text-sm font-medium text-xp-secondary-ink hover:bg-slate-50"
        >
          <ArrowLeft size={17} />
          Back
        </button>

        <button
          type="submit"
          className="flex h-10 cursor-pointer items-center gap-3 rounded-md bg-xp-action px-7 text-sm font-semibold text-white hover:bg-xp-action-hover"
        >
          Next: Your Experience
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}

function Input({ label, placeholder, value, onChange, error }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-xp-ink">
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        className={`h-11 w-full rounded-md border px-4 text-sm outline-none placeholder:text-xp-focus-placeholder focus:border-xp-primary focus:ring-2 focus:ring-xp-primary/10 ${
          error ? "border-red-500" : "border-slate-200"
        }`}
      />
      <FieldError error={error} />
    </div>
  );
}

function SelectBox({ label, value, placeholder, options, onChange, error }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold text-xp-ink">
        {label}
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-invalid={Boolean(error)}
          className={`h-11 w-full appearance-none rounded-md border bg-white px-4 pr-10 text-sm outline-none focus:border-xp-primary ${
            error ? "border-red-500" : "border-slate-200"
          }`}
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-600"
        />
      </div>
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

export default Step2Identity;
