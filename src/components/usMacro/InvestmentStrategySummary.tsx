import { motion } from "framer-motion";
import { OverallSynthesis } from "./types";
import React from "react";
import { ArrowTrendingUpIcon, ArrowTrendingDownIcon, ExclamationTriangleIcon, CurrencyDollarIcon, BuildingLibraryIcon, ChartBarIcon } from '@heroicons/react/24/outline';

// Utility function to format text that might contain newlines or special characters
const formatRiskText = (text: string): React.ReactNode => {
  if (!text) return null;
  const cleanText = text.replace(/\*\*/g, '');
  return cleanText.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ));
};

interface InvestmentStrategySummaryProps {
  overallSynthesis?: OverallSynthesis;
}

const InvestmentStrategySummary = ({ overallSynthesis }: InvestmentStrategySummaryProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mb-8 sm:mb-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-violet-400 to-purple-500">
          Current Investment Strategy Overview
        </h2>
        
        {overallSynthesis ? (
          <div className="space-y-6">
            {/* Market Outlook Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-blue-900/30"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">Market Outlook</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{formatRiskText(overallSynthesis.market_outlook)}</p>
              </div>
            </motion.div>

            {/* Strategy Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {/* Equity Strategy */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg border border-green-900/30"
              >
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-400" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-green-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-green-400">Equity</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{formatRiskText(overallSynthesis.equity_strategy)}</p>
                </div>
              </motion.div>

              {/* Fixed Income Strategy */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg border border-indigo-900/30"
              >
                <div className="h-2 bg-gradient-to-r from-indigo-500 to-indigo-400" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-500/10 rounded-lg">
                      <BuildingLibraryIcon className="h-5 w-5 text-indigo-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-indigo-400">Fixed Income</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{formatRiskText(overallSynthesis.fixed_income_strategy)}</p>
                </div>
              </motion.div>

              {/* Commodities Outlook */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg border border-amber-900/30"
              >
                <div className="h-2 bg-gradient-to-r from-amber-500 to-amber-400" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <CurrencyDollarIcon className="h-5 w-5 text-amber-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-amber-400">Commodities</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{formatRiskText(overallSynthesis.commodities_outlook)}</p>
                </div>
              </motion.div>

              {/* Currency & Alternatives combined */}
              <motion.div 
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-lg border border-cyan-900/30"
              >
                <div className="h-2 bg-gradient-to-r from-cyan-500 to-fuchsia-400" />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <CurrencyDollarIcon className="h-5 w-5 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-cyan-400">Currency & Alternatives</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{formatRiskText(overallSynthesis.currency_outlook)}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{formatRiskText(overallSynthesis.alternatives_strategy)}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Risks Section */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-purple-900/30"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <ExclamationTriangleIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">Key Risks to Watch</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {overallSynthesis.key_risks && overallSynthesis.key_risks.split(/(?:\d+\.\s*|\n+)/).filter(risk => risk.trim()).map((risk, index) => {
                    const cleanedRisk = risk.replace(/\*\*/g, '');
                    const [title, ...descriptionParts] = cleanedRisk.split(':');
                    const description = descriptionParts.join(':').trim();

                    if (!title) return null;

                    let riskTitle = title.trim();
                    let riskDescription = description || title.trim();

                    if (!description && title.length > 15) {
                      const words = title.split(' ');
                      if (words.length > 3) {
                        riskTitle = words.slice(0, 3).join(' ');
                        riskDescription = title;
                      }
                    }

                    return (
                      <motion.div 
                        key={index} 
                        whileHover={{ scale: 1.03, y: -3 }}
                        className="bg-gradient-to-br from-purple-900/20 to-purple-800/5 rounded-xl p-4 border border-purple-800/30 shadow-lg"
                      >
                        <h4 className="font-medium text-purple-300 mb-3 flex items-center">
                          <span className="flex items-center justify-center bg-purple-700/50 text-purple-200 h-6 w-6 rounded-full mr-3 text-xs font-bold">{index + 1}</span>
                          <span>{riskTitle}</span>
                        </h4>
                        <p className="text-sm text-gray-300 leading-relaxed pl-9">{formatRiskText(riskDescription)}</p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          // Fallback to static content if no synthesis data
          <div className="space-y-6">
            {/* Economic Overview Card */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-blue-900/30"
            >
              <div className="px-6 py-8 sm:px-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <ChartBarIcon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">Current Economic Environment</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-blue-900/20 backdrop-blur-sm p-4 rounded-xl border border-blue-900/30"
                  >
                    <h4 className="text-sm font-medium text-blue-300 mb-3">Late-cycle Indicators</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">•</span>
                        <span>Late-cycle economy with slowing growth</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">•</span>
                        <span>Inflation moderating but above target</span>
                      </li>
                    </ul>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="bg-blue-900/20 backdrop-blur-sm p-4 rounded-xl border border-blue-900/30"
                  >
                    <h4 className="text-sm font-medium text-blue-300 mb-3">Policy Shift</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">•</span>
                        <span>Labor market cooling gradually</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 mr-3">•</span>
                        <span>Fed transitioning from tightening to easing</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Asset Strategy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Favorable Assets */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-green-900/30"
              >
                <div className="h-2 bg-gradient-to-r from-green-500 to-green-400" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-green-500/10 rounded-lg">
                      <ArrowTrendingUpIcon className="h-5 w-5 text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-green-400">Favorable Asset Classes</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-green-900/20 border border-green-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3">•</span>
                      <span>Short/Intermediate Bonds</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-green-900/20 border border-green-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3">•</span>
                      <span>Quality Companies with Low Debt</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-green-900/20 border border-green-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3">•</span>
                      <span>Inflation-Protected Securities</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-green-900/20 border border-green-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3">•</span>
                      <span>Defensive Sectors (Healthcare, Staples)</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-green-900/20 border border-green-800/30 transition-colors xl:col-span-2"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 mr-3">•</span>
                      <span>Gold & Select Commodities</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Caution Assets */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-yellow-900/30"
              >
                <div className="h-2 bg-gradient-to-r from-yellow-500 to-yellow-400" />
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 bg-yellow-500/10 rounded-lg">
                      <ArrowTrendingDownIcon className="h-5 w-5 text-yellow-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-yellow-400">Use Caution With</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-yellow-900/20 border border-yellow-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 mr-3">•</span>
                      <span>Highly Leveraged Companies</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-yellow-900/20 border border-yellow-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 mr-3">•</span>
                      <span>Consumer Discretionary</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-yellow-900/20 border border-yellow-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 mr-3">•</span>
                      <span>Small Caps with Weak Financials</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-yellow-900/20 border border-yellow-800/30 transition-colors"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 mr-3">•</span>
                      <span>High Yield Credit</span>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-start p-3 rounded-lg backdrop-blur-sm hover:bg-yellow-900/20 border border-yellow-800/30 transition-colors xl:col-span-2"
                    >
                      <span className="flex-shrink-0 h-5 w-5 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400 mr-3">•</span>
                      <span>Long-Duration Assets (if inflation persists)</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Key Risks Section */}
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-xl border border-purple-900/30"
            >
              <div className="h-2 bg-gradient-to-r from-purple-500 to-fuchsia-400" />
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <ExclamationTriangleIcon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-400">Key Risks to Watch</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-gradient-to-br from-purple-900/20 to-purple-800/5 rounded-xl p-4 border border-purple-800/30 shadow-lg"
                  >
                    <h4 className="font-medium text-purple-300 mb-3 flex items-center">
                      <span className="flex items-center justify-center bg-purple-700/50 text-purple-200 h-6 w-6 rounded-full mr-3 text-xs font-bold">1</span>
                      <span>Inflation Reacceleration</span>
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed pl-9">{formatRiskText("Monthly PCE data suggests inflation could be stubborn, potentially delaying or reversing Fed easing expectations.")}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-gradient-to-br from-purple-900/20 to-purple-800/5 rounded-xl p-4 border border-purple-800/30 shadow-lg"
                  >
                    <h4 className="font-medium text-purple-300 mb-3 flex items-center">
                      <span className="flex items-center justify-center bg-purple-700/50 text-purple-200 h-6 w-6 rounded-full mr-3 text-xs font-bold">2</span>
                      <span>Hard Landing/Recession</span>
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed pl-9">{formatRiskText("Growth slows more sharply than anticipated, leading to significant earnings downgrades and labor market deterioration.")}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-gradient-to-br from-purple-900/20 to-purple-800/5 rounded-xl p-4 border border-purple-800/30 shadow-lg"
                  >
                    <h4 className="font-medium text-purple-300 mb-3 flex items-center">
                      <span className="flex items-center justify-center bg-purple-700/50 text-purple-200 h-6 w-6 rounded-full mr-3 text-xs font-bold">3</span>
                      <span>Geopolitical Escalation</span>
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed pl-9">{formatRiskText("Conflicts or trade tensions disrupt supply chains, boost commodity prices, and dampen sentiment.")}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -3 }}
                    className="bg-gradient-to-br from-purple-900/20 to-purple-800/5 rounded-xl p-4 border border-purple-800/30 shadow-lg"
                  >
                    <h4 className="font-medium text-purple-300 mb-3 flex items-center">
                      <span className="flex items-center justify-center bg-purple-700/50 text-purple-200 h-6 w-6 rounded-full mr-3 text-xs font-bold">4</span>
                      <span>Fed Policy Error</span>
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed pl-9">{formatRiskText("The Fed either waits too long to cut (risking recession) or cuts prematurely (risking inflation resurgence).")}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default InvestmentStrategySummary; 