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
  data: T[];
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