import { Line } from "react-chartjs-2";
import ChartSection from "./ChartSection";

interface EconomicData {
  date: string;
  value: number;
  realValue?: number;
}

interface GdpGrowthChartProps {
  data: EconomicData[];
  chartOptions: any;
}

const GdpGrowthChart = ({ data, chartOptions }: GdpGrowthChartProps) => {
  return (
    <ChartSection
      title="GDP Growth Trends"
      chart={
        data && data.length > 0 ? (
          <div className="h-64 sm:h-96">
            <Line
              data={{
                labels: data.map((item) => item.date),
                datasets: [
                  {
                    label: "Nominal GDP Growth",
                    data: data.map((item) => item.value),
                    fill: false,
                    borderColor: "rgb(255, 99, 132)",
                    tension: 0.1,
                  },
                  {
                    label: "Real GDP Growth",
                    data: data.map((item) => item.realValue),
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
      description={
        <p className="text-sm">
          Real GDP growth shows the economy's expansion after accounting for inflation. The gap between nominal and real GDP reflects inflation's impact.
        </p>
      }
      investmentImplications={
        <div>
          <p className="mb-2">The economy has shown remarkable resilience, but growth is expected to slow as higher interest rates fully impact activity.</p>
          <p className="mb-2">In a slowing but still positive growth environment, balance sheet strength and earnings visibility become increasingly important for equity selection.</p>
          <p>International diversification may be beneficial if US growth slows more than global peers.</p>
        </div>
      }
      assetRecommendations={{
        favorable: ["Quality Stocks", "Dividend Growers", "International Exposure"],
        cautious: ["Cyclicals", "Highly Leveraged Companies", "Small Caps"]
      }}
    />
  );
};

export default GdpGrowthChart; 