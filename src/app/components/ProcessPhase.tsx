import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ProcessPhaseProps {
  number: string;
  title: string;
  subtitle: string;
  content: string;
  items: string[];
  icon: ReactNode;
  index: number;
}

export default function ProcessPhase({
  number,
  title,
  subtitle,
  content,
  items,
  icon,
  index
}: ProcessPhaseProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative"
    >
      <div className="bg-[rgba(15,23,43,0.5)] border border-[rgba(255,255,255,0.1)] rounded-[32px] p-12 hover:border-[rgba(12,174,255,0.5)] transition-all duration-500 group">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(12,174,255,0.05)] to-[rgba(43,127,255,0.05)] rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          {/* Header with Icon and Number */}
          <div className="flex items-start justify-between mb-8">
            <div className="flex items-center gap-6">
              {/* Icon Circle */}
              <div className="relative">
                <div className="bg-[#0f172b] border-2 border-[rgba(12,174,255,0.3)] size-[100px] rounded-full flex items-center justify-center group-hover:border-[#0caeff] transition-colors duration-500">
                  <div className="text-[#0caeff]">
                    {icon}
                  </div>
                </div>
                {/* Number Badge */}
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-[#0caeff] to-[#2b7fff] size-[40px] rounded-full flex items-center justify-center shadow-lg">
                  <p className="text-[20px] font-bold text-white">{number}</p>
                </div>
              </div>

              {/* Title */}
              <div>
                <p className="mb-2 text-[36px] font-bold leading-[42px] tracking-[-0.5px] text-white">{title}</p>
                <p className="text-[18px] font-medium leading-[24px] tracking-[-0.3px] text-[#0caeff]">{subtitle}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <p className="text-[18px] leading-[32px] tracking-[-0.4px] text-[#cad5e2]">
              {content}
            </p>
          </div>

          {/* Items List */}
          <div className="space-y-4">
            {items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group/item"
              >
                <div className="mt-1.5">
                  <div className="size-[24px] rounded-full bg-gradient-to-br from-[rgba(12,174,255,0.2)] to-[rgba(43,127,255,0.2)] border border-[rgba(12,174,255,0.4)] flex items-center justify-center group-hover/item:from-[rgba(12,174,255,0.4)] group-hover/item:to-[rgba(43,127,255,0.4)] transition-all duration-300">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 12 12">
                      <path d="M2 6L5 9L10 3" stroke="#0caeff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <p className="text-[16px] leading-[28px] tracking-[-0.3px] text-[#90a1b9] transition-colors duration-300 group-hover/item:text-white">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
