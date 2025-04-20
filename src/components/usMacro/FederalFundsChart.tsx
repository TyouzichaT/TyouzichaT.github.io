import { Line } from "react-chartjs-2";
import ChartSection from "./ChartSection";

interface EconomicData {
  date: string;
  value: number;
  realValue?: number;
  federal_funds_rate_upper?: number;
  federal_funds_rate_lower?: number;
}

interface FederalFundsChartProps {
  data: EconomicData[];
  chartOptions: any;
}

const FederalFundsChart = ({ data, chartOptions }: FederalFundsChartProps) => {
  return (
    <ChartSection
      title="Federal Funds Rate & Monetary Policy"
      chart={
        <div className="h-64 sm:h-96">
          <Line
            data={{
              labels: data.map((item) => item.date),
              datasets: [
                {
                  label: "Upper Bound",
                  data: data.map((item) => item.federal_funds_rate_upper),
                  borderColor: "rgb(255, 99, 132)",
                  borderWidth: 2,
                  pointRadius: 0,
                  tension: 0.1,
                },
                {
                  label: "Lower Bound",
                  data: data.map((item) => item.federal_funds_rate_lower || 0),
                  borderColor: "rgb(54, 162, 235)",
                  borderWidth: 2,
                  pointRadius: 0,
                  tension: 0.1,
                },
                {
                  label: "Target Range",
                  data: data.map((item) => item.federal_funds_rate_upper),
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
                    label: function (context: any) {
                      const datasetLabel = context.dataset.label;
                      if (datasetLabel === "Target Range") {
                        return "";
                      }
                      const value = context.parsed.y;
                      return `${datasetLabel}: ${value !== null && value !== undefined ? value.toFixed(2) : 'N/A'}%`;
                    },
                    title: function (context: any) {
                      return context[0].label;
                    },
                    footer: function (tooltipItems: any) {
                      const idx = tooltipItems[0].dataIndex;
                      const upper = data[idx]?.federal_funds_rate_upper ?? 0;
                      const lower = data[idx]?.federal_funds_rate_lower ?? 0;
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
          The Federal Funds Rate directly impacts borrowing costs throughout the economy and is the Fed's primary tool for monetary policy.
        </p>
      }
      investmentImplications={
        <div>
          <p className="mb-2">The Fed's hiking cycle appears to have ended, with markets now pricing in rate cuts. This transition from tightening to easing typically creates a shift in asset performance.</p>
          <p className="mb-2">When the Fed begins cutting rates, it's often bullish for stocks initially, but the reason behind cuts matters. If cuts are preventative, markets may rally; if reacting to severe weakness, markets may struggle.</p>
          <p>Falling rates typically benefit longer-duration assets that were pressured during the hiking cycle.</p>
        </div>
      }
      assetRecommendations={{
        favorable: ["Long-Duration Bonds", "Growth Stocks", "REITs", "Gold"],
        cautious: ["Cash", "Short-Duration Bonds", "Value Stocks"]
      }}
    />
  );
};

export default FederalFundsChart; 