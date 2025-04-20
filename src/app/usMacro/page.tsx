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
  ApiResponse,
  ChartOptions 
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        type SetterFunction<T> = React.Dispatch<React.SetStateAction<T[]>>;

        const types = [
          { type: 'nonfarm', setter: setNonfarmData as SetterFunction<EconomicData> },
          { type: 'gdp', setter: setGdpData as SetterFunction<EconomicData> },
          { type: 'pce', setter: setPceData as SetterFunction<PceData> },
          { type: 'treasury', setter: setTreasuryData as SetterFunction<TreasuryData> },
          { type: 'unemployment', setter: setUnemploymentData as SetterFunction<EconomicData> },
          { type: 'federalfunds', setter: setFederalfundsData as SetterFunction<EconomicData> },
          { type: 'cpi', setter: setCpiData as SetterFunction<CoreCpiData> }
        ];

        const promises = types.map(({ type, setter }) => {
          const fetchAndProcessData = async () => {
            try {
              // Use API_BASE_URL for both environments
              const API_BASE_URL = process.env.API_BASE_URL || 'https://green-heart-aaf5.zuoyou1998.workers.dev';

              // Try standard API endpoint format
              const apiUrl = `${API_BASE_URL}/?type=${type}`;
              console.log(`Fetching data from: ${apiUrl}`);

              const response = await fetch(apiUrl);

              if (!response.ok) {
                console.error(`API error: ${response.status} ${response.statusText}`);
                throw new Error(`Failed to fetch ${type} data: ${response.status} ${response.statusText}`);
              }

              const result: ApiResponse<unknown> = await response.json();

              if (type === 'gdp') {
                // Process GDP data to include both nominal and real values
                if (!result || !Array.isArray(result)) {
                  console.error(`Invalid GDP data format received:`, result);
                  // Set empty array to avoid rendering errors
                  (setter as SetterFunction<EconomicData>)([]);
                  return;
                }

                try {
                  const processedData: EconomicData[] = result.map((item: Record<string, unknown>) => {
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
                  (setter as SetterFunction<EconomicData>)(processedData);
                } catch (mapError) {
                  console.error(`Error processing GDP data:`, mapError);
                  // Set empty array to avoid rendering errors
                  (setter as SetterFunction<EconomicData>)([]);
                }
              } else if (type === 'treasury') {
                // Process Treasury data
                if (!result || !Array.isArray(result)) {
                  console.error(`Invalid treasury data format received:`, result);
                  (setter as SetterFunction<TreasuryData>)([]);
                  return;
                }
                (setter as SetterFunction<TreasuryData>)(result);
              } else {
                // Handle all other data types
                if (!result || !Array.isArray(result)) {
                  console.error(`Invalid ${type} data format received:`, result);
                  if (type === 'pce') {
                    (setter as SetterFunction<PceData>)([]);
                  } else if (type === 'cpi') {
                    (setter as SetterFunction<CoreCpiData>)([]);
                  } else {
                    (setter as SetterFunction<EconomicData>)([]);
                  }
                  return;
                }

                // Process data according to its type
                if (type === 'pce') {
                  const processedData: PceData[] = result;
                  (setter as SetterFunction<PceData>)(processedData);
                } else if (type === 'cpi') {
                  const processedData: CoreCpiData[] = result;
                  (setter as SetterFunction<CoreCpiData>)(processedData);
                } else {
                  const processedData: EconomicData[] = result;
                  (setter as SetterFunction<EconomicData>)(processedData);
                }
              }
            } catch (err) {
              console.error(`Error fetching ${type}:`, err);
              // Set empty array to prevent charts from breaking
              if (type === 'gdp') {
                (setter as SetterFunction<EconomicData>)([]);
              } else if (type === 'pce') {
                (setter as SetterFunction<PceData>)([]);
              }
              else if (type === 'treasury') {
                (setter as SetterFunction<TreasuryData>)([]);
              }
              else if (type === 'cpi') {
                (setter as SetterFunction<CoreCpiData>)([]);
              }
              else {
                (setter as SetterFunction<EconomicData>)([]);
              }

              // Don't rethrow, handle locally to prevent Promise.all from failing completely
              return null;
            }
          };

          return fetchAndProcessData().catch(err => {
            console.error(`Error fetching ${type}:`, err);
            // Set empty array to prevent charts from breaking
            if (type === 'gdp') {
              (setter as SetterFunction<EconomicData>)([]);
            } else if (type === 'pce') {
              (setter as SetterFunction<PceData>)([]);
            }
            else if (type === 'treasury') {
              (setter as SetterFunction<TreasuryData>)([]);
            }
            else if (type === 'cpi') {
              (setter as SetterFunction<CoreCpiData>)([]);
            }
            else {
              (setter as SetterFunction<EconomicData>)([]);
            }

            // Don't rethrow, handle locally to prevent Promise.all from failing completely
            return null;
          });
        });

        await Promise.all(promises);
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

  // Extract latest Fed Funds Rate and PCE values for the dashboard
  const latestFedFundsRate = {
    lower: federalfundsData.length > 0 ? federalfundsData[0].federal_funds_rate_lower : undefined,
    upper: federalfundsData.length > 0 ? federalfundsData[0].federal_funds_rate_upper : undefined
  };
  
  const latestPceValue = pceData.length > 0 ? parseFloat(pceData[0]["Core PCE Level"]) : undefined;

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
            />
          </motion.div>

          {/* Federal Funds Rate Section - Moved to top as it's most relevant for investors */}
          <FederalFundsChart 
            data={federalfundsData} 
            chartOptions={chartOptions} 
          />

          {/* Treasury Section */}
          <TreasuryYieldChart 
            data={treasuryData} 
            chartOptions={chartOptions} 
          />

          {/* Inflation Outlook Section */}
          <InflationOutlookChart 
            cpiData={cpiData}
            pceData={pceData}
            chartOptions={chartOptions}
          />

          {/* Labor Market Section */}
          <LaborMarketChart 
            unemploymentData={unemploymentData}
            nonfarmData={nonfarmData}
            chartOptions={chartOptions}
            createChartData={createChartData}
          />

          {/* GDP Section */}
          <GdpGrowthChart 
            data={gdpData}
            chartOptions={chartOptions}
          />

          {/* Investment Strategy Summary Section */}
          <InvestmentStrategySummary />
        </div>
      </div>
    </main>
  );
} 