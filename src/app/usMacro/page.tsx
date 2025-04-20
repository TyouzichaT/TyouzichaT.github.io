"use client";

import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
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
import { useEffect, useState, ReactNode } from "react";

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

interface EconomicData {
  date: string;
  value: number;
  realValue?: number;
  federal_funds_rate_upper?: number;
  federal_funds_rate_lower?: number;
}

interface CoreCpiData {
  Monthly: string;
  "Core CPI YoY (% change)": string;
}

interface PceData {
  Monthly: string;
  "Core PCE Level": string;
}

interface TreasuryData {
  Date: string;
  "10Y": string;
  "2Y": string;
  Spread: string;
}

interface ApiResponse<T> {
  data: T[];
}

// Standard chart options used across all charts
const chartOptions = {
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

// Reusable chart section component
interface ChartSectionProps {
  title: string;
  chart: ReactNode;
  description?: ReactNode;
}

const ChartSection = ({ title, chart, description }: ChartSectionProps) => {
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
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-8 shadow-lg border border-gray-700"
      >
        {chart}
        {description && <div className="mt-4 text-gray-300">{description}</div>}
      </motion.div>
    </motion.section>
  );
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
              const apiUrl = `${API_BASE_URL}/api/${type}`;
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
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-xl">Loading data...</p>
        </div>
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-xl">Error: {error}</p>
        </div>
      </main>
    );
  }

  // Render each chart section
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-2 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              US Macroeconomic Analysis
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 sm:mb-6">
              Key Economic Indicators and Trends
            </p>
          </motion.div>

          {/* Nonfarm Payroll Section */}
          <ChartSection
            title="Nonfarm Payroll"
            chart={
              <div className="h-64 sm:h-96">
                <Line
                  data={{
                    labels: nonfarmData.map((item) => item.date),
                    datasets: [
                      {
                        label: "Total Nonfarm Payroll (thousands)",
                        data: nonfarmData.map((item) => item.value),
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions,
                    plugins: {
                      ...chartOptions.plugins,
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            const value = context.parsed.y;
                            return `Payrolls: ${value.toLocaleString()} thousand`;
                          }
                        }
                      }
                    },
                    scales: {
                      ...chartOptions.scales,
                      y: {
                        ...chartOptions.scales.y,
                        title: {
                          display: true,
                          text: 'Nonfarm Payrolls (thousands)',
                          color: 'white'
                        }
                      }
                    }
                  }}
                />
              </div>
            }
            description={
              <>
                <p className="text-sm">
                  Nonfarm payroll employment is a measure of the number of U.S. workers excluding farm workers and some other categories.
                  It&apos;s a key indicator of economic health and job market strength.
                </p>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400">Key Trends:</h3>
                    <ul className="text-sm list-disc list-inside">
                      <li>Pandemic Impact: Loss of 21.9M jobs (Feb-Apr 2020)</li>
                      <li>Recovery to Pre-Pandemic Level: Feb 2022</li>
                      <li>Current: 9.3% above pre-pandemic peak</li>
                      <li>Continued Growth: Moderating but positive</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Monthly Changes:</h3>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-red-400 font-bold">Largest Loss:</span>
                        <p>Apr 2020: -20.5M jobs</p>
                      </div>
                      <div>
                        <span className="text-green-400 font-bold">Largest Gain:</span>
                        <p>Jun 2020: +4.6M jobs</p>
                      </div>
                      <div>
                        <span className="text-blue-400 font-bold">Recent Average:</span>
                        <p>2024: ~150K jobs/month</p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          />

          {/* GDP Section */}
          <ChartSection
            title="GDP Growth"
            chart={
              gdpData && gdpData.length > 0 ? (
                <div className="h-64 sm:h-96">
                  <Line
                    data={{
                      labels: gdpData.map((item) => item.date),
                      datasets: [
                        {
                          label: "Nominal GDP Growth",
                          data: gdpData.map((item) => item.value),
                          fill: false,
                          borderColor: "rgb(255, 99, 132)",
                          tension: 0.1,
                        },
                        {
                          label: "Real GDP Growth",
                          data: gdpData.map((item) => item.realValue),
                          fill: false,
                          borderColor: "rgb(54, 162, 235)",
                          tension: 0.1,
                        },
                      ],
                    }}
                    options={chartOptions}
                  />
                </div>
              ) : (
                <div className="h-64 sm:h-96 flex items-center justify-center">
                  <p className="text-gray-400">GDP data unavailable</p>
                </div>
              )
            }
          />

          {/* CPI Section */}
          <ChartSection
            title="Core Consumer Price Index (CPI)"
            chart={
              cpiData && cpiData.length > 0 ? (
                <div className="h-64 sm:h-96">
                  <Line
                    data={{
                      labels: cpiData.map((item) => item.Monthly),
                      datasets: [
                        {
                          label: "Core CPI YoY (% change)",
                          data: cpiData.map((item) => parseFloat(item["Core CPI YoY (% change)"])),
                          fill: false,
                          borderColor: "rgb(54, 162, 235)",
                          tension: 0.1,
                        },
                      ],
                    }}
                    options={{
                      ...chartOptions,
                      plugins: {
                        ...chartOptions.plugins,
                        tooltip: {
                          callbacks: {
                            label: function (context) {
                              return `Core CPI YoY: ${context.parsed.y.toFixed(2)}%`;
                            }
                          }
                        }
                      },
                      scales: {
                        ...chartOptions.scales,
                        y: {
                          ...chartOptions.scales.y,
                          title: {
                            display: true,
                            text: 'Year-over-Year Change (%)',
                            color: 'white'
                          }
                        }
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="h-64 sm:h-96 flex items-center justify-center">
                  <p className="text-gray-400">CPI data unavailable</p>
                </div>
              )
            }
            description={
              <p className="text-sm">
                Core CPI (Consumer Price Index) measures the change in prices of goods and services excluding food and energy.
                The year-over-year change shows the inflation rate compared to the same month in the previous year.
              </p>
            }
          />

          {/* PCE Section */}
          <ChartSection
            title="Core PCE Price Index"
            chart={
              pceData && pceData.length > 0 ? (
                <div className="h-64 sm:h-96">
                  <Line
                    data={{
                      labels: pceData.map((item) => item.Monthly),
                      datasets: [
                        {
                          label: "Core PCE Level",
                          data: pceData.map((item) => parseFloat(item["Core PCE Level"])),
                          fill: false,
                          borderColor: "rgb(255, 159, 64)",
                          tension: 0.1,
                        },
                      ],
                    }}
                    options={{
                      ...chartOptions,
                      plugins: {
                        ...chartOptions.plugins,
                        tooltip: {
                          callbacks: {
                            label: function (context) {
                              return `Core PCE: ${context.parsed.y.toFixed(2)}`;
                            }
                          }
                        }
                      },
                      scales: {
                        ...chartOptions.scales,
                        y: {
                          ...chartOptions.scales.y,
                          title: {
                            display: true,
                            text: 'Index Level',
                            color: 'white'
                          }
                        }
                      }
                    }}
                  />
                </div>
              ) : (
                <div className="h-64 sm:h-96 flex items-center justify-center">
                  <p className="text-gray-400">PCE data unavailable</p>
                </div>
              )
            }
            description={
              <p className="text-sm">
                The Core PCE Price Index is the Federal Reserve&apos;s preferred measure of inflation.
                It excludes volatile food and energy prices to better reflect underlying inflation trends.
              </p>
            }
          />

          {/* Treasury Section */}
          <ChartSection
            title="Treasury Yield Curve"
            chart={
              <div className="h-64 sm:h-96">
                <Line
                  data={{
                    labels: treasuryData.map((item) => item.Date),
                    datasets: [
                      {
                        label: "10-Year Yield",
                        data: treasuryData.map((item) => parseFloat(item["10Y"])),
                        fill: false,
                        borderColor: "rgb(75, 192, 192)",
                        tension: 0.1,
                      },
                      {
                        label: "2-Year Yield",
                        data: treasuryData.map((item) => parseFloat(item["2Y"])),
                        fill: false,
                        borderColor: "rgb(255, 99, 132)",
                        tension: 0.1,
                      },
                      {
                        label: "Spread (10Y-2Y)",
                        data: treasuryData.map((item) => parseFloat(item.Spread)),
                        fill: false,
                        borderColor: "rgb(153, 102, 255)",
                        tension: 0.1,
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions,
                    plugins: {
                      ...chartOptions.plugins,
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}%`;
                          }
                        }
                      }
                    },
                    scales: {
                      ...chartOptions.scales,
                      y: {
                        ...chartOptions.scales.y,
                        title: {
                          display: true,
                          text: 'Yield (%)',
                          color: 'white'
                        }
                      }
                    }
                  }}
                />
              </div>
            }
            description={
              <p className="text-sm">
                The Treasury yield curve shows the relationship between yields on Treasury securities of different maturities.
                The spread between 10-year and 2-year yields is a key indicator of economic expectations.
                A negative spread (inverted yield curve) often precedes economic slowdowns.
              </p>
            }
          />

          {/* Unemployment Section */}
          <ChartSection
            title="Unemployment Rate"
            chart={
              <div className="h-64 sm:h-96">
                <Line
                  data={createChartData(unemploymentData, "Unemployment Rate", "rgb(153, 102, 255)")}
                  options={{
                    ...chartOptions,
                    plugins: {
                      ...chartOptions.plugins,
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            return `Unemployment Rate: ${context.parsed.y.toFixed(1)}%`;
                          }
                        }
                      }
                    },
                    scales: {
                      ...chartOptions.scales,
                      y: {
                        ...chartOptions.scales.y,
                        title: {
                          display: true,
                          text: 'Unemployment Rate (%)',
                          color: 'white'
                        },
                        min: 0,
                        max: 16
                      }
                    }
                  }}
                />
              </div>
            }
            description={
              <>
                <p className="text-sm">
                  The unemployment rate shows the percentage of the labor force that is jobless and actively seeking employment.
                  The data reveals a dramatic pandemic spike followed by a strong recovery, with current levels remaining historically low.
                </p>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-blue-400">Key Periods:</h3>
                    <ul className="text-sm list-disc list-inside">
                      <li>Pre-Pandemic: 3.5-3.6% (Jan-Feb 2020)</li>
                      <li>Pandemic Peak: 14.8% (Apr 2020)</li>
                      <li>Recovery: 14.8% → 3.9% (Apr 2020 - Dec 2021)</li>
                      <li>Current: 4.1-4.2% (2024-2025)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Market Implications:</h3>
                    <ul className="text-sm list-disc list-inside">
                      <li>Strong labor market recovery</li>
                      <li>Current levels remain healthy</li>
                      <li>Gradual cooling in 2024-2025</li>
                    </ul>
                  </div>
                </div>
              </>
            }
          />

          {/* Federal Funds Rate Section */}
          <ChartSection
            title="Federal Funds Rate"
            chart={
              <div className="h-64 sm:h-96">
                <Line
                  data={{
                    labels: federalfundsData.map((item) => item.date),
                    datasets: [
                      {
                        label: "Upper Bound",
                        data: federalfundsData.map((item) => item.federal_funds_rate_upper),
                        borderColor: "rgb(255, 99, 132)",
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.1,
                      },
                      {
                        label: "Lower Bound",
                        data: federalfundsData.map((item) => item.federal_funds_rate_lower || 0),
                        borderColor: "rgb(54, 162, 235)",
                        borderWidth: 2,
                        pointRadius: 0,
                        tension: 0.1,
                      },
                      {
                        label: "Target Range",
                        data: federalfundsData.map((item) => item.federal_funds_rate_upper),
                        borderColor: "rgba(0, 0, 0, 0)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        fill: {
                          target: "+1",
                          above: "rgba(255, 99, 132, 0.2)",
                        },
                        tension: 0.1,
                        pointRadius: 0,
                      },
                    ],
                  }}
                  options={{
                    ...chartOptions,
                    plugins: {
                      ...chartOptions.plugins,
                      tooltip: {
                        callbacks: {
                          label: function (context) {
                            const datasetLabel = context.dataset.label;
                            if (datasetLabel === "Target Range") {
                              return "";
                            }
                            const value = context.parsed.y;
                            return `${datasetLabel}: ${value !== null && value !== undefined ? value.toFixed(2) : 'N/A'}%`;
                          },
                          title: function (context) {
                            return context[0].label;
                          },
                          footer: function (tooltipItems) {
                            const idx = tooltipItems[0].dataIndex;
                            const upper = federalfundsData[idx]?.federal_funds_rate_upper ?? 0;
                            const lower = federalfundsData[idx]?.federal_funds_rate_lower ?? 0;
                            return `Target Range: ${lower.toFixed(2)}% - ${upper.toFixed(2)}%`;
                          }
                        }
                      }
                    },
                    scales: {
                      ...chartOptions.scales,
                      y: {
                        ...chartOptions.scales.y,
                        title: {
                          display: true,
                          text: 'Rate (%)',
                          color: 'white'
                        },
                        min: 0
                      }
                    }
                  }}
                />
              </div>
            }
            description={
              <p className="text-sm">
                The Federal Funds Rate is the target interest rate set by the Federal Reserve at which commercial banks borrow and lend their excess reserves to each other overnight. Since 2008, the Fed has used a target range with upper and lower bounds rather than a single target rate. The shaded area represents this target range.
              </p>
            }
          />
        </div>
      </div>
    </main>
  );
} 