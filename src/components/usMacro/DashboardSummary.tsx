import { motion } from "framer-motion";

interface DashboardSummaryProps {
  fedFundsRate: {
    lower: number | undefined;
    upper: number | undefined;
  };
  pceLevelValue: number | undefined;
  latestGdp?: {
    nominal: number | undefined;
    real: number | undefined;
  };
  latestUnemployment?: number | undefined;
  latestNonfarm?: number | undefined;
  latestCpi?: string | undefined;
  latestTreasury?: {
    tenYear: string | undefined;
    twoYear: string | undefined;
    spread: string | undefined;
  };
}

const DashboardSummary = ({ 
  fedFundsRate, 
  pceLevelValue,
  latestGdp,
  latestUnemployment,
  latestNonfarm,
  latestCpi,
  latestTreasury
}: DashboardSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-blue-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-blue-800"
      >
        <h3 className="text-lg font-semibold text-blue-300 mb-2">Fed Policy</h3>
        <p className="text-2xl font-bold text-white mb-1">Fed Funds</p>
        <p className="text-sm text-gray-300">{
          fedFundsRate.lower !== undefined && fedFundsRate.upper !== undefined
            ? `${fedFundsRate.lower}%-${fedFundsRate.upper}%`
            : "N/A"
        }</p>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-purple-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-purple-800"
      >
        <h3 className="text-lg font-semibold text-purple-300 mb-2">Inflation</h3>
        <p className="text-2xl font-bold text-white mb-1">Core PCE</p>
        <p className="text-sm text-gray-300">{pceLevelValue ? pceLevelValue.toFixed(2) : "N/A"}</p>
        <p className="text-sm text-gray-300">Core CPI: {latestCpi || "N/A"}</p>
      </motion.div>
      
      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-red-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-red-800"
      >
        <h3 className="text-lg font-semibold text-red-300 mb-2">Treasury Yields</h3>
        <p className="text-2xl font-bold text-white mb-1">2Y/10Y</p>
        <p className="text-sm text-gray-300">
          10Y: {latestTreasury?.tenYear || "N/A"} | 2Y: {latestTreasury?.twoYear || "N/A"}
        </p>
        <p className="text-sm text-gray-300">Spread: {latestTreasury?.spread || "N/A"}</p>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-green-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-green-800"
      >
        <h3 className="text-lg font-semibold text-green-300 mb-2">GDP Growth</h3>
        <p className="text-2xl font-bold text-white mb-1">Real GDP</p>
        <p className="text-sm text-gray-300">{latestGdp?.real !== undefined ? `${latestGdp.real}%` : "N/A"}</p>
        <p className="text-sm text-gray-300">Nominal: {latestGdp?.nominal !== undefined ? `${latestGdp.nominal}%` : "N/A"}</p>
      </motion.div>

      <motion.div 
        whileHover={{ scale: 1.02 }}
        className="bg-yellow-900/30 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-yellow-800"
      >
        <h3 className="text-lg font-semibold text-yellow-300 mb-2">Labor Market</h3>
        <p className="text-2xl font-bold text-white mb-1">Unemployment</p>
        <p className="text-sm text-gray-300">{latestUnemployment !== undefined ? `${latestUnemployment}%` : "N/A"}</p>
        <p className="text-sm text-gray-300">Nonfarm: {latestNonfarm !== undefined ? `${latestNonfarm}k` : "N/A"}</p>
      </motion.div>
    </div>
  );
};

export default DashboardSummary; 