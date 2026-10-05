import {
  ArrowLeft,
  CalendarDays,
  CheckCircle2,
  Moon,
  SlidersHorizontal,
} from "lucide-react";

const options = [
  {
    id: "weekly",
    title: "Weekly",
    description: "1-2 sessions per week.\nIdeal for consistent engagement.",
    icon: CalendarDays,
  },
  {
    id: "evenings",
    title: "Evenings",
    description: "Available after standard business hours.",
    icon: Moon,
  },
  {
    id: "custom",
    title: "Custom",
    description: "I will review requests manually as they arrive.",
    icon: SlidersHorizontal,
  },
];

function Step4Availability({ data, updateData, onNext, onBack, errors = {} }) {
  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onNext();
      }}
      className="p-6 sm:p-8"
    >
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-[26px] font-semibold tracking-tight text-xp-title">
          Set Your Availability
        </h2>

        <p className="mt-2 max-w-[600px] text-[15px] leading-6 text-slate-600">
          How often would you like to participate in sessions? You can always
          change this later in your settings.
        </p>
      </div>

      {/* Options */}
      <div className="grid gap-4 sm:grid-cols-3">
        {options.map((option) => {
          const Icon = option.icon;
          const selected = data.availability === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() =>
                updateData({
                  availability: option.id,
                })
              }
              className={`
                relative min-h-[136px] cursor-pointer rounded-lg border p-4 text-left
                transition-all duration-200
                ${
                  selected
                    ? "border-xp-primary bg-xp-selection"
                    : "border-slate-200 bg-white hover:border-xp-selection-border"
                }
              `}
            >
              {/* Radio */}
              <span
                className={`
                  absolute right-4 top-4 flex h-5 w-5 items-center
                  justify-center rounded-full border
                  ${
                    selected
                      ? "border-xp-primary bg-xp-primary"
                      : "border-slate-300"
                  }
                `}
              >
                {selected && <span className="h-2 w-2 rounded-full bg-white" />}
              </span>

              {/* Icon */}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-xp-icon-bg">
                <Icon size={18} className="text-xp-primary" />
              </span>

              <h3 className="mt-3 text-[14px] font-semibold text-xp-ink">
                {option.title}
              </h3>

              <p className="mt-1 whitespace-pre-line text-[11px] leading-4 text-slate-600">
                {option.description}
              </p>
            </button>
          );
        })}
      </div>
      {errors.availability && (
        <p className="mt-3 text-sm text-red-600" role="alert">
          {errors.availability}
        </p>
      )}

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
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
          className="flex h-10 cursor-pointer items-center gap-3 rounded-md bg-xp-action px-7 text-sm font-semibold text-white shadow-sm hover:bg-xp-action-hover"
        >
          Finish
          <CheckCircle2 size={17} />
        </button>
      </div>
    </form>
  );
}

export default Step4Availability;
