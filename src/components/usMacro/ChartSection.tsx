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
  investmentImplications,
  assetRecommendations 
}: ChartSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-8 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        {title}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700 lg:col-span-2"
        >
          {chart}
          {description && <div className="mt-4 text-gray-300">{description}</div>}
        </motion.div>
        
        {investmentImplications && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-400">Investment Implications</h3>
            <div className="text-gray-200">{investmentImplications}</div>
            
            {assetRecommendations && (
              <div className="mt-4">
                <div className="mb-3">
                  <h4 className="text-lg font-medium text-green-400 mb-1">Favorable Assets</h4>
                  <div className="flex flex-wrap gap-2">
                    {assetRecommendations.favorable.map((asset, idx) => (
                      <span key={idx} className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-yellow-400 mb-1">Use Caution</h4>
                  <div className="flex flex-wrap gap-2">
                    {assetRecommendations.cautious.map((asset, idx) => (
                      <span key={idx} className="bg-yellow-900/40 text-yellow-300 px-3 py-1 rounded-full text-sm">
                        {asset}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default ChartSection; 