import { motion } from 'motion/react';
import { Search, Target, Palette, Rocket } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      description: 'Through research and conversations, I uncover real challenges and hidden opportunities.',
      methods: ['Research', 'Analysis', 'Interviews'],
      icon: Search,
      color: '#3b82f6'
    },
    {
      num: '02',
      title: 'Define',
      description: 'I synthesize insights into clear problem statements and design principles.',
      methods: ['Framing', 'Personas', 'Mapping'],
      icon: Target,
      color: '#06b6d4'
    },
    {
      num: '03',
      title: 'Design',
      description: 'Ideas become tangible through rapid iteration and thoughtful refinement.',
      methods: ['Wireframing', 'Prototyping', 'Visual Design'],
      icon: Palette,
      color: '#14b8a6'
    },
    {
      num: '04',
      title: 'Deliver',
      description: 'I validate with users, iterate based on feedback, and ensure continuous evolution.',
      methods: ['Testing', 'Iteration', 'Documentation'],
      icon: Rocket,
      color: '#10b981'
    }
  ];

  return (
    <section
      id="process"
      className="relative w-full overflow-hidden bg-[#020618] py-20 sm:py-24 lg:py-32"
    >
      <div className="relative z-10 mx-auto max-w-[1143px] px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-16 lg:mb-20"
        >
          <p className="mb-4 text-[13px] font-medium uppercase tracking-[2px] text-[#0caeff] md:pl-12">
            How I Work
          </p>
          <h2 className="max-w-[600px] text-[34px] font-bold leading-[1.1] text-white md:pl-12 md:text-[48px]">
            My Design Process
          </h2>
        </motion.div>

        {/* Horizontal Process Flow */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="pointer-events-none absolute left-0 right-0 top-[64px] hidden lg:block">
            <div className="relative mx-auto h-32 max-w-[1143px]">
              <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#3b82f6]/30 via-[#06b6d4]/30 via-[#14b8a6]/30 to-[#10b981]/30" />
              <div className="absolute left-[25%] top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[#06b6d4]/35" />
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[#14b8a6]/35" />
              <div className="absolute left-[75%] top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rotate-45 border-r-2 border-t-2 border-[#10b981]/35" />
            </div>
          </div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative group"
              >
                {/* Card */}
                <div className="h-full">
                  {/* Icon & Number */}
                  <div className="mb-8">
                    {/* Icon Circle */}
                    <div className="mb-6 flex justify-center lg:justify-start">
                      {/* Icon Container */}
                      <div 
                        className="flex h-28 w-28 items-center justify-center rounded-[28px] backdrop-blur-sm transition-all duration-300 group-hover:scale-105 sm:h-32 sm:w-32"
                        style={{
                          background: `${step.color}08`,
                          border: `1px solid ${step.color}20`
                        }}
                      >
                        <step.icon 
                          className="h-12 w-12 sm:h-14 sm:w-14"
                          style={{ color: step.color }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </div>

                    {/* Step Number */}
                    <div>
                      <span 
                        className="block text-[72px] font-bold leading-none opacity-[0.08] sm:text-[80px]"
                        style={{ color: step.color }}
                      >
                        {step.num}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Title */}
                    <h3 className="mb-2 text-[28px] font-bold leading-[1.2] text-white sm:text-[32px]">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="mb-6 text-[15px] leading-[1.7] text-[rgba(255,255,255,0.6)]">
                      {step.description}
                    </p>

                    {/* Methods */}
                    <div className="flex flex-wrap gap-2">
                      {step.methods.map((method) => (
                        <span
                          key={method}
                          className="rounded-full px-3 py-1.5 text-[12px]"
                          style={{
                            background: `${step.color}08`,
                            color: `${step.color}dd`,
                            border: `1px solid ${step.color}15`
                          }}
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mt-20 max-w-[900px] text-center sm:mt-24"
        >
          <p className="text-[18px] leading-[1.7] text-[rgba(255,255,255,0.6)] md:text-[20px]">
            Each project is unique, but this framework ensures I'm solving the right problems in the right way—always putting people first.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
