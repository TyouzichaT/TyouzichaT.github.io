export interface EconomicData {
  date: string;
  value: number;
  realValue?: number;
  federal_funds_rate_upper?: number;
  federal_funds_rate_lower?: number;
}

export interface CoreCpiData {
  Monthly: string;
  "Core CPI YoY (% change)": string;
}

export interface PceData {
  Monthly: string;
  "Core PCE Level": string;
}

export interface TreasuryData {
  Date: string;
  "10Y": string;
  "2Y": string;
  Spread: string;
}

export interface ApiResponse<T> {
  [key: string]: T | string | number | boolean | null | undefined;
}

export interface ChartOptions {
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      labels: {
        color: string;
      };
    };
  };
  scales: {
    y: {
      ticks: {
        color: string;
      };
      grid: {
        color: string;
      };
    };
    x: {
      ticks: {
        color: string;
      };
      grid: {
        color: string;
      };
    };
  };
}

// Analysis data types for synthesis endpoint
export interface AnalysisData {
  comment: string;
  investment_implications: string;
}

export interface OverallSynthesis {
  market_outlook: string;
  equity_strategy: string;
  fixed_income_strategy: string;
  commodities_outlook: string;
  currency_outlook: string;
  alternatives_strategy: string;
  key_risks: string;
}

export interface SynthesisData {
  gdp_analysis: AnalysisData;
  pce_analysis: AnalysisData;
  cpi_analysis: AnalysisData;
  treasury_analysis: AnalysisData;
  unemployment_analysis: AnalysisData;
  nonfarm_analysis: AnalysisData;
  federalfunds_analysis: AnalysisData;
  overall_synthesis: OverallSynthesis;
} 