import React from "react";
import { BadgeCheck, MessageSquare, TrendingUp } from "lucide-react";

const AuthInfo = () => {
  const benefits = [
    {
      icon: BadgeCheck,
      text: "Verified senior executives",
    },
    {
      icon: MessageSquare,
      text: "Meaningful sessions",
    },
    {
      icon: TrendingUp,
      text: "Accelerated career growth",
    },
  ];

  return (
    <section className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-xp-auth-gradient-start via-xp-auth-gradient-middle to-xp-auth-gradient-end px-9 py-10">
      
      <div>
       
        <h1 className="max-w-[230px] text-[30px] font-semibold leading-[1.15] tracking-[-0.8px] text-xp-heading">
          Elevate your professional journey.
        </h1>

        
        <p className="mt-4 max-w-[220px] text-[14px] leading-5 text-gray-600 font-medium">
          Connect with industry leader and build your journey.
        </p>

        
        <div className="mt-7 space-y-4">
          {benefits.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-4">
              <Icon size={20} strokeWidth={2} className="text-xp-auth-icon" />

              <span className="text-[14px] font-medium text-gray-700">
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>

      
      <div className="border-t border-xp-auth-divider pt-7">
        
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gray-300 text-xs font-semibold text-gray-700">
            SJ
          </div>

          <div>
            <h4 className="text-[14px] font-bold text-gray-800">Sarah J.</h4>

            <p className="text-[10px] text-gray-500 font-medium">
              VP of Engineering, TechFlow
            </p>
          </div>
        </div>

        
        <p className="mt-4 text-[14px] italic leading-[1.55] text-gray-600 font-[450]">
          "XP-HUB strips away the noise. The connections I've made here have
          directly influenced our technical strategy and my personal growth as a
          leader."
        </p>
      </div>
    </section>
  );
};

export default AuthInfo;
