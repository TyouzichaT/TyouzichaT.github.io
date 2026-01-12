import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ChartSectionProps {
  title: string;
  chart: ReactNode;
  description?: ReactNode;
  investmentImplications?: ReactNode;
  assetRecommendations?: {
    favorable: string[];
    cautious: string[];
  };
}

const ChartSection = ({
  title,
  chart,
  description,
  investmentImplications
}: ChartSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-8"
    >
      <div className="flex items-center mb-4 border-l-2 border-indigo-500 pl-4">
        <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800/50 rounded-lg p-6 hover:border-zinc-700/50 transition-colors">
          <div className="relative w-full">
            {chart}
          </div>
          {description && (
            <div className="mt-6 pt-6 border-t border-zinc-800/50 text-zinc-400 text-sm leading-relaxed font-sans">
              {description}
            </div>
          )}
        </div>

        {investmentImplications && (
          <div className="bg-zinc-900/30 border border-zinc-800/30 rounded-lg p-6">
            <h3 className="text-sm font-medium uppercase tracking-wider text-indigo-400 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              IMPLICATIONS
            </h3>
            <div className="text-zinc-300 text-sm leading-relaxed font-sans space-y-4">
              {investmentImplications}
            </div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ChartSection;