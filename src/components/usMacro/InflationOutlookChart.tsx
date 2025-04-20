import { Line } from "react-chartjs-2";
import ChartSection from "./ChartSection";

interface CoreCpiData {
  Monthly: string;
  "Core CPI YoY (% change)": string;
}

interface PceData {
  Monthly: string;
  "Core PCE Level": string;
}

interface InflationOutlookChartProps {
  cpiData: CoreCpiData[];
  pceData: PceData[];
  chartOptions: any;
}

const InflationOutlookChart = ({ cpiData, pceData, chartOptions }: InflationOutlookChartProps) => {
  return (
    <ChartSection
      title="Inflation Outlook"
      chart={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <Line
              data={{
                labels: cpiData.map((item) => item.Monthly),
                datasets: [
                  {
                    label: "Core CPI YoY (%)",
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
                      label: function (context: any) {
                        return `Core CPI YoY: ${context.parsed.y.toFixed(2)}%`;
                      }
                    }
                  }
                }
              }}
            />
          </div>
          <div className="h-64">
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
              options={chartOptions}
            />
          </div>
        </div>
      }
      description={
        <p className="text-sm">
          Core CPI and the Fed's preferred Core PCE both show inflation moderating but remaining above the Fed's 2% target.
        </p>
      }
      investmentImplications={
        <div>
          <p className="mb-2">Inflation is coming down but the last mile to 2% is proving difficult. This "sticky" inflation could limit how far the Fed can cut rates.</p>
          <p className="mb-2">Moderating but persistent inflation creates a mixed environment - good for some real assets as inflation protection, but challenging for rate-sensitive growth stocks if it keeps rates higher than expected.</p>
          <p>Companies with pricing power and low debt tend to outperform in this environment.</p>
        </div>
      }
      assetRecommendations={{
        favorable: ["TIPS", "Value Stocks", "Commodities", "Quality Companies"],
        cautious: ["Long-Duration Bonds", "Highly Leveraged Companies"]
      }}
    />
  );
};

export default InflationOutlookChart; 