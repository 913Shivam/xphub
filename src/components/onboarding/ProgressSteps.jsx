import React from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const ProgressSteps = ({ currentStep, steps }) => {
  return (
    <div className="relative flex items-start justify-between">
      
      <div className="absolute left-[8%] right-[8%] top-5 h-[2px] bg-xp-progress-track" />

      {/* Completed Progress  */}
      <motion.div
        className="absolute left-[8%] top-5 h-[2px] bg-xp-primary"
        initial={{ width: "0%" }}
        animate={{
          width:
            currentStep == 1
              ? "0%"
              : `${((currentStep - 1) / (steps.length - 1)) * 84}%`,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />

      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const completed = stepNumber < currentStep;
        const active = stepNumber === currentStep;

        return (
          <div
            key={step}
            className="relative z-10 flex w-1/4 flex-col items-center"
          >
            <motion.div
              initial={false}
              animate={{
                scale: active ? 1.08 : 1,
              }}
              transition={{
                duration: 0.25,
              }}
              className={`
                flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors duration-300
                ${
                  completed
                    ? "bg-xp-primary text-white"
                    : active
                      ? "bg-xp-primary text-white ring-4 ring-xp-progress-ring"
                      : "bg-xp-progress-idle text-gray-500"
                }
                `}
            >
              {completed ? (
                <motion.div
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: "backOut",
                  }}
                >
                  <Check size={18} />
                </motion.div>
              ) : (
                stepNumber
              )}
            </motion.div>

            <motion.span
              animate={{
                color: active || completed ? "var(--color-xp-primary)" : "var(--color-slate-500)",
              }}
              className="mt-2 text-[11px] font-medium"
            >
              {step}
            </motion.span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSteps;
