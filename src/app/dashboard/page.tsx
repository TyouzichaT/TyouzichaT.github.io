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
} from "../../components/dashboard/types";
import DashboardSummary from "../../components/dashboard/DashboardSummary";
import FederalFundsChart from "../../components/dashboard/FederalFundsChart";
import TreasuryYieldChart from "../../components/dashboard/TreasuryYieldChart";
import InflationOutlookChart from "../../components/dashboard/InflationOutlookChart";
import LaborMarketChart from "../../components/dashboard/LaborMarketChart";
import GdpGrowthChart from "../../components/dashboard/GdpGrowthChart";
import InvestmentStrategySummary from "../../components/dashboard/InvestmentStrategySummary";

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

// Professional Financial Chart Options
const chartOptions: ChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      labels: {
        color: "#a1a1aa", // zinc-400
        font: {
          family: "Inter, sans-serif",
          size: 11,
          weight: 500
        },
        usePointStyle: true,
        pointStyle: 'circle',
      },
    },
    tooltip: {
      backgroundColor: '#18181b', // zinc-900
      titleColor: '#fff',
      bodyColor: '#e4e4e7', // zinc-200
      borderColor: '#27272a', // zinc-800
      borderWidth: 1,
      padding: 10,
      titleFont: {
        family: 'Inter, sans-serif',
        size: 13,
        weight: 600
      },
      bodyFont: {
        family: 'Inter, sans-serif',
        size: 12
      },
      displayColors: true,
      usePointStyle: true,
    }
  },
  scales: {
    y: {
      ticks: {
        color: "#71717a", // zinc-500
        font: {
          family: "Inter, sans-serif",
          size: 10
        }
      },
      grid: {
        color: "rgba(255, 255, 255, 0.03)",
        drawBorder: false,
      },
      border: {
        display: false
      }
    },
    x: {
      ticks: {
        color: "#71717a", // zinc-500
        font: {
          family: "Inter, sans-serif",
          size: 10
        }
      },
      grid: {
        display: false
      },
      border: {
        display: false
      }
    },
  },
  elements: {
    line: {
      tension: 0.3,
      borderWidth: 2,
    },
    point: {
      radius: 0,
      hitRadius: 20,
      hoverRadius: 4
    }
  }
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
    // Helper to process data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleDataSuccess = (result: any) => {
      // Update all state variables with the data from the single API call
      if (result.gdp && Array.isArray(result.gdp)) {
        try {
          const processedData: EconomicData[] = result.gdp.map((item: Record<string, unknown>) => {
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

      if (result.treasury && Array.isArray(result.treasury)) {
        setTreasuryData(result.treasury);
      } else {
        setTreasuryData([]);
      }

      if (result.pce && Array.isArray(result.pce)) {
        setPceData(result.pce);
      } else {
        setPceData([]);
      }

      if (result.cpi && Array.isArray(result.cpi)) {
        setCpiData(result.cpi);
      } else {
        setCpiData([]);
      }

      if (result.unemployment && Array.isArray(result.unemployment)) {
        setUnemploymentData(result.unemployment);
      } else {
        setUnemploymentData([]);
      }

      if (result.nonfarm && Array.isArray(result.nonfarm)) {
        setNonfarmData(result.nonfarm);
      } else {
        setNonfarmData([]);
      }

      if (result.federalFunds && Array.isArray(result.federalFunds)) {
        setFederalfundsData(result.federalFunds);
      } else {
        setFederalfundsData([]);
      }

      if (result.synthesis) {
        setSynthesisData(result.synthesis);
      } else {
        setSynthesisData(null);
      }

      setLoading(false);
    };

    const fetchData = async () => {
      try {
        const API_BASE_URL = process.env.API_BASE_URL || 'https://cool-lab-fe67.zuoyou1998.workers.dev';
        const apiUrl = `${API_BASE_URL}/?type=synthesis`;
        console.log(`Fetching data from: ${apiUrl}`);

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout

        try {
          const response = await fetch(apiUrl, {
            signal: controller.signal,
            method: 'GET'
          });
          clearTimeout(timeoutId);

          if (!response.ok) {
            console.error(`API error: ${response.status} ${response.statusText}`);
            throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
          }

          const result = await response.json();
          handleDataSuccess(result);

        } catch (fetchError) {
          console.warn("Fetch failed, falling back to cached/mock data IS DISABLED. Showing error.", fetchError);
          // Removed mock data fallback to ensure real data is used.
          // const mockData = await import("./mockData").then(m => m.default).catch(() => null);
          // if (mockData) { ... }
          throw fetchError;
        }
      } catch (err) {
        console.error("Error in data fetching:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

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

  if (loading) {
    return (
      <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center bg-black">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-2 border-zinc-800 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
          <p className="text-zinc-500 text-sm font-medium">Loading market data...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 flex items-center justify-center bg-black">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-500/10 mb-4">
            <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-lg font-semibold text-zinc-100 mb-2">Data Feed Error</h2>
          <p className="text-zinc-500 text-sm mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium rounded-md transition-colors"
          >
            Retry Connection
          </button>
        </div>
      </main>
    );
  }

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

  return (
    <main className="min-h-screen pt-24 pb-12 px-4 sm:px-6 bg-black">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-4">
            US Macro Economics
          </div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-2">
            Economic Dashboard
          </h1>
          <p className="text-zinc-400 max-w-2xl">
            Real-time monitoring of key US economic indicators and market signals.
          </p>
        </motion.div>

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

        {/* Federal Funds Rate Section */}
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
    </main>
  );
}