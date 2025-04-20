import { motion } from "framer-motion";

const InvestmentStrategySummary = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-8 sm:mb-16"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
        Current Investment Strategy Overview
      </h2>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-blue-400">Current Economic Environment</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Late-cycle economy with slowing growth</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Inflation moderating but above target</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Labor market cooling gradually</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Fed transitioning from tightening to easing</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-green-400">Favorable Asset Classes</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Short/Intermediate Bonds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Quality Companies with Low Debt</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Inflation-Protected Securities</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Defensive Sectors (Healthcare, Staples)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>Gold & Select Commodities</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">Use Caution With</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Highly Leveraged Companies</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Consumer Discretionary</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Small Caps with Weak Financials</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>High Yield Credit</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-500 mr-2">•</span>
                <span>Long-Duration Assets (if inflation persists)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-purple-400">Key Risks to Watch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-purple-900/20 rounded-lg p-3">
              <h4 className="font-medium text-purple-300 mb-2">Inflation Resurgence</h4>
              <p className="text-sm text-gray-300">If inflation proves stickier than expected, the Fed may need to maintain higher rates for longer, pressuring rate-sensitive assets.</p>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-3">
              <h4 className="font-medium text-purple-300 mb-2">Growth Recession</h4>
              <p className="text-sm text-gray-300">Economic growth could slow more than expected, hurting earnings and potentially causing volatility across risk assets.</p>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-3">
              <h4 className="font-medium text-purple-300 mb-2">Policy Mistake</h4>
              <p className="text-sm text-gray-300">The Fed could cut rates too late or too little to prevent economic weakness, or too aggressively and reignite inflation.</p>
            </div>
            <div className="bg-purple-900/20 rounded-lg p-3">
              <h4 className="font-medium text-purple-300 mb-2">Geopolitical Tensions</h4>
              <p className="text-sm text-gray-300">Global conflicts and trade tensions could disrupt supply chains and commodities markets, creating potential inflation pressure.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default InvestmentStrategySummary; 