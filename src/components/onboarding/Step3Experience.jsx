import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  CircleDollarSign,
  Megaphone,
  Plus,
  Rocket,
  UsersRound,
} from "lucide-react";

const experiences = [
  {
    id: "startup",
    title: "Built a Startup",
    description: "From 0 to 1, navigating the chaos of early-stage growth.",
    icon: Rocket,
  },
  {
    id: "funding",
    title: "Raised Funding",
    description: "Seed, Series A+, pitching, and term sheet negotiation.",
    icon: CircleDollarSign,
  },
  {
    id: "product",
    title: "Launched a Product",
    description: "GTM strategies, product marketing, and user acquisition.",
    icon: Megaphone,
  },
  {
    id: "team",
    title: "Scaled a Team",
    description: "Hiring, culture building, and leadership transitions.",
    icon: UsersRound,
  },
  {
    id: "crisis",
    title: "Managed a Crisis",
    description: "Navigating PR disasters, pivots, or financial distress.",
    icon: AlertTriangle,
  },
];

function Step3Experience({ data, updateData, onNext, onBack, errors = {} }) {
  const selected = data.experiences || [];

  const toggleExperience = (id) => {
    const exists = selected.includes(id);

    updateData({
      experiences: exists
        ? selected.filter((item) => item !== id)
        : [...selected, id],
    });
  };

  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onNext();
      }}
    >
      {/* Header */}
      <div className="px-6 pb-4 pt-5 sm:px-8">
        <h2 className="text-[26px] font-semibold tracking-tight text-xp-title">
          Share Your Experience
        </h2>

        <p className="mt-1 text-[15px] text-slate-600">
          Select the real-world scenarios where you can offer the most valuable
          guidance.
        </p>
      </div>

      {/* Cards */}
      <div className="border-y border-slate-200 bg-xp-panel px-6 py-5 sm:px-8">
        <div className="grid gap-3 sm:grid-cols-3">
          {experiences.map((experience) => {
            const Icon = experience.icon;
            const isSelected = selected.includes(experience.id);

            return (
              <button
                type="button"
                key={experience.id}
                onClick={() => toggleExperience(experience.id)}
                aria-pressed={isSelected}
                className={`
                  group relative min-h-[112px] cursor-pointer rounded-lg p-3 text-left
                  transition-all duration-200
                  ${
                    isSelected
                      ? "border-2 border-xp-primary bg-xp-selection shadow-sm"
                      : "border border-slate-200 bg-white hover:-translate-y-0.5 hover:border-xp-selection-border hover:bg-xp-selection hover:shadow-md"
                  }
                `}
              >
                {isSelected && (
                  <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full border-2 border-xp-primary text-xp-primary">
                    <Check size={12} strokeWidth={2.5} />
                  </span>
                )}

                <span
                  className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 ${
                    isSelected
                      ? "bg-transparent"
                      : "bg-xp-card-icon-bg group-hover:bg-xp-primary"
                  }`}
                >
                  <Icon
                    size={18}
                    className={`transition-colors duration-200 ${
                      isSelected
                        ? "text-xp-primary"
                        : "text-xp-primary group-hover:text-white"
                    }`}
                  />
                </span>

                <h3 className="text-[13px] font-semibold text-xp-ink">
                  {experience.title}
                </h3>

                <p className="mt-1 text-[11px] leading-4 text-slate-600">
                  {experience.description}
                </p>
              </button>
            );
          })}

          {/* Custom */}
          <button
            type="button"
            className="flex min-h-[112px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-slate-300 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-xp-primary hover:bg-xp-selection hover:shadow-md"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200">
                <Plus size={18} />
            </span>

            <span className="mt-2 text-[13px] font-medium text-xp-ink">
              Suggest Custom
            </span>
          </button>
        </div>
        {errors.experiences && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {errors.experiences}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 sm:px-8">
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
          Next: Availability
          <ArrowRight size={18} />
        </button>
      </div>
    </form>
  );
}

export default Step3Experience;
