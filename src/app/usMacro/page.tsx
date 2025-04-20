"use client";

import { motion } from "framer-motion";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";
import {
  EconomicData,
  CoreCpiData,
  PceData,
  TreasuryData,
  ChartOptions,
  SynthesisData
} from "../../components/usMacro/types";
import DashboardSummary from "../../components/usMacro/DashboardSummary";
import FederalFundsChart from "../../components/usMacro/FederalFundsChart";
import TreasuryYieldChart from "../../components/usMacro/TreasuryYieldChart";
import InflationOutlookChart from "../../components/usMacro/InflationOutlookChart";
import LaborMarketChart from "../../components/usMacro/LaborMarketChart";
import GdpGrowthChart from "../../components/usMacro/GdpGrowthChart";
import InvestmentStrategySummary from "../../components/usMacro/InvestmentStrategySummary";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Standard chart options used across all charts
const chartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255, 255, 255, 0.1)",
      },
    },
  },
};

export default function UsMacro() {
  const [nonfarmData, setNonfarmData] = useState<EconomicData[]>([]);
  const [gdpData, setGdpData] = useState<EconomicData[]>([]);
  const [cpiData, setCpiData] = useState<CoreCpiData[]>([]);
  const [pceData, setPceData] = useState<PceData[]>([]);
  const [treasuryData, setTreasuryData] = useState<TreasuryData[]>([]);
  const [unemploymentData, setUnemploymentData] = useState<EconomicData[]>([]);
  const [federalfundsData, setFederalfundsData] = useState<EconomicData[]>([]);
  const [synthesisData, setSynthesisData] = useState<SynthesisData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the synthesis endpoint that returns all data in one call
        const API_BASE_URL = process.env.API_BASE_URL || 'https://cool-lab-fe67.zuoyou1998.workers.dev';
        const apiUrl = `${API_BASE_URL}/?type=synthesis`;
        console.log(`Fetching data from: ${apiUrl}`);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          console.error(`API error: ${response.status} ${response.statusText}`);
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();

        // Update all state variables with the data from the single API call
        if (result.gdp && Array.isArray(result.gdp)) {
          try {
            const processedData: EconomicData[] = result.gdp.map((item: Record<string, unknown>) => {
              // Safely extract values handling potential different formats
              const quarter = typeof item.Quarter === 'string' ? item.Quarter : item["Quarter"];
              const nominalGdp = typeof item["Nominal GDP (% change)"] === 'string' ?
                parseFloat(item["Nominal GDP (% change)"] as string) :
                (item["Nominal GDP (% change)"] || 0);
              const realGdp = typeof item["Real GDP (% change)"] === 'string' ?
                parseFloat(item["Real GDP (% change)"] as string) :
                (item["Real GDP (% change)"] || 0);

              return {
                date: quarter as string,
                value: nominalGdp as number,
                realValue: realGdp as number
              };
            });
            setGdpData(processedData);
          } catch (mapError) {
            console.error(`Error processing GDP data:`, mapError);
            setGdpData([]);
          }
        } else {
          setGdpData([]);
        }

        // Set treasury data
        if (result.treasury && Array.isArray(result.treasury)) {
          setTreasuryData(result.treasury);
        } else {
          setTreasuryData([]);
        }

        // Set PCE data
        if (result.pce && Array.isArray(result.pce)) {
          setPceData(result.pce);
        } else {
          setPceData([]);
        }

        // Set CPI data
        if (result.cpi && Array.isArray(result.cpi)) {
          setCpiData(result.cpi);
        } else {
          setCpiData([]);
        }

        // Set unemployment data
        if (result.unemployment && Array.isArray(result.unemployment)) {
          setUnemploymentData(result.unemployment);
        } else {
          setUnemploymentData([]);
        }

        // Set nonfarm data
        if (result.nonfarm && Array.isArray(result.nonfarm)) {
          setNonfarmData(result.nonfarm);
        } else {
          setNonfarmData([]);
        }

        // Set federal funds data
        if (result.federalFunds && Array.isArray(result.federalFunds)) {
          setFederalfundsData(result.federalFunds);
        } else {
          setFederalfundsData([]);
        }

        // Set synthesis analysis data
        if (result.synthesis) {
          setSynthesisData(result.synthesis);
        } else {
          setSynthesisData(null);
        }

      } catch (err) {
        console.error("Error in data fetching:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Helper function to create standard chart data
  const createChartData = (data: EconomicData[], label: string, color: string) => ({
    labels: data.map((item) => item.date),
    datasets: [
      {
        label,
        data: data.map((item) => item.value),
        fill: false,
        borderColor: color,
        tension: 0.1,
      },
    ],
  });

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-8 max-w-md w-full border border-gray-700">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500 mb-6"></div>
            <h2 className="text-2xl font-semibold mb-2">Loading Dashboard</h2>
            <p className="text-gray-400 text-center">Fetching latest economic data and market indicators...</p>
          </div>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-xl p-8 max-w-md w-full border border-red-700/50">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-500/10 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-red-400">Unable to Load Data</h2>
            <p className="text-gray-400 text-center mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors text-white font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </main>
    );
  }

  // Extract latest values for the dashboard
  const latestFedFundsRate = {
    lower: federalfundsData.length > 0 ? federalfundsData[federalfundsData.length - 1].federal_funds_rate_lower : undefined,
    upper: federalfundsData.length > 0 ? federalfundsData[federalfundsData.length - 1].federal_funds_rate_upper : undefined
  };

  const latestPceValue = pceData.length > 0 ? parseFloat(pceData[pceData.length - 1]["Core PCE Level"]) : undefined;
  const latestCpiValue = cpiData.length > 0 ? cpiData[cpiData.length - 1]["Core CPI YoY (% change)"] : undefined;

  const latestGdp = {
    nominal: gdpData.length > 0 ? gdpData[gdpData.length - 1].value : undefined,
    real: gdpData.length > 0 ? gdpData[gdpData.length - 1].realValue : undefined,
  };

  const latestUnemployment = unemploymentData.length > 0 ? unemploymentData[unemploymentData.length - 1].value : undefined;
  const latestNonfarm = nonfarmData.length > 0 ? nonfarmData[nonfarmData.length - 1].value : undefined;

  const latestTreasury = {
    tenYear: treasuryData.length > 0 ? treasuryData[treasuryData.length - 1]["10Y"] : undefined,
    twoYear: treasuryData.length > 0 ? treasuryData[treasuryData.length - 1]["2Y"] : undefined,
    spread: treasuryData.length > 0 ? treasuryData[treasuryData.length - 1]["Spread"] : undefined,
  };

  // Render each chart section
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              US Macroeconomic Dashboard
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 sm:mb-6">
              Monitoring the US Economy to help you make better investment decisions
            </p>

            {/* Market Summary Dashboard */}
            <DashboardSummary
              fedFundsRate={latestFedFundsRate}
              pceLevelValue={latestPceValue}
              latestGdp={latestGdp}
              latestUnemployment={latestUnemployment}
              latestNonfarm={latestNonfarm}
              latestCpi={latestCpiValue}
              latestTreasury={latestTreasury}
            />
          </motion.div>

          {/* Federal Funds Rate Section - Moved to top as it's most relevant for investors */}
          <FederalFundsChart
            data={federalfundsData}
            chartOptions={chartOptions}
            analysisData={synthesisData?.federalfunds_analysis}
          />

          {/* Treasury Section */}
          <TreasuryYieldChart
            data={treasuryData}
            chartOptions={chartOptions}
            analysisData={synthesisData?.treasury_analysis}
          />

          {/* Inflation Outlook Section */}
          <InflationOutlookChart
            cpiData={cpiData}
            pceData={pceData}
            chartOptions={chartOptions}
            cpiAnalysisData={synthesisData?.cpi_analysis}
            pceAnalysisData={synthesisData?.pce_analysis}
          />

          {/* Labor Market Section */}
          <LaborMarketChart
            unemploymentData={unemploymentData}
            nonfarmData={nonfarmData}
            chartOptions={chartOptions}
            createChartData={createChartData}
            unemploymentAnalysisData={synthesisData?.unemployment_analysis}
            nonfarmAnalysisData={synthesisData?.nonfarm_analysis}
          />

          {/* GDP Section */}
          <GdpGrowthChart
            data={gdpData}
            chartOptions={chartOptions}
            analysisData={synthesisData?.gdp_analysis}
          />

          {/* Investment Strategy Summary Section */}
          <InvestmentStrategySummary
            overallSynthesis={synthesisData?.overall_synthesis}
          />
        </div>
      </div>
    </main>
  );
} 