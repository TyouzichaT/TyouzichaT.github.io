import { Line } from "react-chartjs-2";
import ChartSection from "./ChartSection";

interface TreasuryData {
  Date: string;
  "10Y": string;
  "2Y": string;
  Spread: string;
}

interface TreasuryYieldChartProps {
  data: TreasuryData[];
  chartOptions: any;
}

const TreasuryYieldChart = ({ data, chartOptions }: TreasuryYieldChartProps) => {
  return (
    <ChartSection
      title="Treasury Yield Curve & Bond Market"
      chart={
        <div className="h-64 sm:h-96">
          <Line
            data={{
              labels: data.map((item) => item.Date),
              datasets: [
                {
                  label: "10-Year Yield",
                  data: data.map((item) => parseFloat(item["10Y"])),
                  fill: false,
                  borderColor: "rgb(75, 192, 192)",
                  tension: 0.1,
                },
                {
                  label: "2-Year Yield",
                  data: data.map((item) => parseFloat(item["2Y"])),
                  fill: false,
                  borderColor: "rgb(255, 99, 132)",
                  tension: 0.1,
                },
                {
                  label: "Spread (10Y-2Y)",
                  data: data.map((item) => parseFloat(item.Spread)),
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
                    label: function (context: any) {
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
          The yield curve (especially the 10Y-2Y spread) is a powerful economic predictor. Inversion (negative spread) has historically preceded recessions.
        </p>
      }
      investmentImplications={
        <div>
          <p className="mb-2">The yield curve has been deeply inverted, a classic recession signal, but is now normalizing as the market anticipates Fed rate cuts.</p>
          <p className="mb-2">As the curve steepens from inversion toward normal, fixed income opportunities shift. Falling front-end yields benefit short-duration bonds first.</p>
          <p>If the curve steepens due to inflation concerns, consider inflation-protected securities.</p>
        </div>
      }
      assetRecommendations={{
        favorable: ["Short/Intermediate Bonds", "TIPS", "Floating Rate Notes"],
        cautious: ["Long-Duration Bonds", "High-Yield Bonds"]
      }}
    />
  );
};

export default TreasuryYieldChart; 