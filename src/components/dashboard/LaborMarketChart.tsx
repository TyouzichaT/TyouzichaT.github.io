import { Line } from "react-chartjs-2";
import ChartSection from "./ChartSection";
import { ChartOptions, EconomicData, AnalysisData } from "./types";
import { ChartData } from "chart.js";

interface LaborMarketChartProps {
  unemploymentData: EconomicData[];
  nonfarmData: EconomicData[];
  chartOptions: ChartOptions;
  createChartData: (data: EconomicData[], label: string, color: string) => ChartData<"line">;
  unemploymentAnalysisData?: AnalysisData;
  nonfarmAnalysisData?: AnalysisData;
}

const LaborMarketChart = ({ 
  unemploymentData, 
  nonfarmData, 
  chartOptions,
  createChartData,
  unemploymentAnalysisData,
  nonfarmAnalysisData
}: LaborMarketChartProps) => {
  return (
    <ChartSection
      title="Labor Market Health"
      chart={
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-64">
            <Line
              data={createChartData(unemploymentData, "Unemployment Rate", "rgb(153, 102, 255)")}
              options={{
                ...chartOptions,
                scales: {
                  ...chartOptions.scales,
                  y: {
                    ...chartOptions.scales.y,
                    min: 0,
                    max: 16
                  }
                }
              }}
            />
          </div>
          <div className="h-64">
            <Line
              data={{
                labels: nonfarmData.map((item) => item.date),
                datasets: [
                  {
                    label: "Nonfarm Payrolls (thousands)",
                    data: nonfarmData.map((item) => item.value),
                    fill: false,
                    borderColor: "rgb(75, 192, 192)",
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
          {(unemploymentAnalysisData?.comment || nonfarmAnalysisData?.comment) ? 
            `${unemploymentAnalysisData?.comment || ""} ${nonfarmAnalysisData?.comment || ""}` : 
            "The labor market remains relatively strong but is showing signs of cooling, with the unemployment rate ticking up and job growth moderating."}
        </p>
      }
      investmentImplications={
        <div>
          {(unemploymentAnalysisData?.investment_implications || nonfarmAnalysisData?.investment_implications) ? (
            <>
              {unemploymentAnalysisData?.investment_implications && <p className="mb-2">{unemploymentAnalysisData.investment_implications}</p>}
              {nonfarmAnalysisData?.investment_implications && <p>{nonfarmAnalysisData.investment_implications}</p>}
            </>
          ) : (
            <>
              <p className="mb-2">The labor market is cooling gradually rather than collapsing, supporting a &quot;soft landing&quot; scenario where inflation moderates without severe economic damage.</p>
              <p className="mb-2">A resilient but slowing job market typically favors quality companies with strong balance sheets that can weather slower growth.</p>
              <p>Consumer spending will likely moderate but not collapse, suggesting a shift from discretionary to staples consumption.</p>
            </>
          )}
        </div>
      }
      assetRecommendations={{
        favorable: ["Consumer Staples", "Healthcare", "Quality Factors", "Defensive Sectors"],
        cautious: ["Consumer Discretionary", "Small Caps", "High Yield Credit"]
      }}
    />
  );
};

export default LaborMarketChart; 