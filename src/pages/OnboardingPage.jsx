import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ProgressSteps from "../components/onboarding/ProgressSteps";

import Step1AboutYou from "../components/onboarding/Step1AboutYou";
import Step2Identity from "../components/onboarding/Step2Identity";
import Step3Experience from "../components/onboarding/Step3Experience";
import Step4Availability from "../components/onboarding/Step4Availability";
import {
  hasValidationErrors,
  validateOnboardingStep,
} from "../utils/utilities";

const steps = ["Basics", "Identity", "Experience", "Availability"];

const OnboardingPage = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [validationErrors, setValidationErrors] = useState({});

  const [formData, setFormData] = useState({
    // Step 1
    firstName: "",
    lastName: "",
    location: "",
    headline: "",
    profilePicture: null,

    // Step 2
    jobTitle: "",
    company: "",
    industry: "",
    yearsExperience: "",

    //Step 3
    experiences: [],

    //step4
    availability: "weekly",
  });

  const updateFormData = (data) => {
    setFormData((previous) => ({
      ...previous,
      ...data,
    }));
    setValidationErrors((previous) => {
      const updated = { ...previous };
      Object.keys(data).forEach((field) => delete updated[field]);
      return updated;
    });
  };

  const nextStep = () => {
    const errors = validateOnboardingStep(currentStep, formData);
    setValidationErrors(errors);

    if (hasValidationErrors(errors)) return;

    if (currentStep < 4) {
      setDirection(1);
      setCurrentStep((previous) => previous + 1);
    } else {
      onComplete(formData);
    }
  };

  const previousStep = () => {
    if (currentStep > 1) {
      setDirection(-1);
      setCurrentStep((previous) => previous - 1);
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <Step1AboutYou
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            errors={validationErrors}
          />
        );

      case 2:
        return (
          <Step2Identity
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={previousStep}
            errors={validationErrors}
          />
        );

      case 3:
        return (
          <Step3Experience
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={previousStep}
            errors={validationErrors}
          />
        );

      case 4:
        return (
          <Step4Availability
            data={formData}
            updateData={updateFormData}
            onNext={nextStep}
            onBack={previousStep}
            errors={validationErrors}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="grid min-h-[100svh] place-items-center bg-xp-canvas px-4 py-4 sm:py-6">
      <div className="mx-auto w-full max-w-[740px] sm:translate-y-2">
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0_12px_35px_rgba(0,0,0,0.06)]">
          {/* Header */}
          <header className="flex items-center justify-between border-b border-gray-200 bg-xp-header px-6 py-3 sm:px-8">
            <h1 className="text-[20px] font-semibold tracking-tight text-xp-heading">
              XP-HUB
            </h1>

            <span className="text-[11px] font-medium uppercase tracking-[0.08em] text-gray-600">
              Step {currentStep} of 4
            </span>
          </header>

          {/* Animated progress */}
          <div className="px-6 pb-0 pt-4 sm:px-8">
            <ProgressSteps currentStep={currentStep} steps={steps} />
          </div>

          {/* Current step */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnboardingPage;
