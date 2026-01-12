
const mockData = {
    gdp: [
        { Quarter: "2023 Q3", "Nominal GDP (% change)": 8.3, "Real GDP (% change)": 4.9 },
        { Quarter: "2023 Q4", "Nominal GDP (% change)": 5.1, "Real GDP (% change)": 3.4 },
        { Quarter: "2024 Q1", "Nominal GDP (% change)": 4.8, "Real GDP (% change)": 1.4 },
        { Quarter: "2024 Q2", "Nominal GDP (% change)": 5.6, "Real GDP (% change)": 3.0 },
        { Quarter: "2024 Q3", "Nominal GDP (% change)": 4.9, "Real GDP (% change)": 2.8 }
    ],
    treasury: [
        { Date: "2024-05", "10Y": "4.50", "2Y": "4.95", Spread: "-0.45" },
        { Date: "2024-06", "10Y": "4.40", "2Y": "4.75", Spread: "-0.35" },
        { Date: "2024-07", "10Y": "4.30", "2Y": "4.60", Spread: "-0.30" },
        { Date: "2024-08", "10Y": "4.10", "2Y": "4.40", Spread: "-0.30" },
        { Date: "2024-09", "10Y": "3.80", "2Y": "3.90", Spread: "-0.10" }
    ],
    pce: [
        { Monthly: "2024-05", "Core PCE Level": "2.6" },
        { Monthly: "2024-06", "Core PCE Level": "2.6" },
        { Monthly: "2024-07", "Core PCE Level": "2.6" },
        { Monthly: "2024-08", "Core PCE Level": "2.7" }
    ],
    cpi: [
        { Monthly: "2024-05", "Core CPI YoY (% change)": "3.4" },
        { Monthly: "2024-06", "Core CPI YoY (% change)": "3.3" },
        { Monthly: "2024-07", "Core CPI YoY (% change)": "3.2" },
        { Monthly: "2024-08", "Core CPI YoY (% change)": "3.2" }
    ],
    unemployment: [
        { date: "2024-05", value: 4.0 },
        { date: "2024-06", value: 4.1 },
        { date: "2024-07", value: 4.3 },
        { date: "2024-08", value: 4.2 }
    ],
    nonfarm: [
        { date: "2024-05", value: 216 },
        { date: "2024-06", value: 179 },
        { date: "2024-07", value: 89 },
        { date: "2024-08", value: 142 }
    ],
    federalFunds: [
        { date: "2023-07", federal_funds_rate_upper: 5.50, federal_funds_rate_lower: 5.25 },
        { date: "2023-12", federal_funds_rate_upper: 5.50, federal_funds_rate_lower: 5.25 },
        { date: "2024-06", federal_funds_rate_upper: 5.50, federal_funds_rate_lower: 5.25 },
        { date: "2024-09", federal_funds_rate_upper: 5.00, federal_funds_rate_lower: 4.75 }
    ],
    synthesis: {
        gdp_analysis: { comment: "GDP growth remains resilient but is showing signs of normalization closer to trend.", investment_implications: "Supportive for equities but suggests limited upside for cyclical sectors." },
        pce_analysis: { comment: "Inflation is moderating but remains sticky above the 2% target.", investment_implications: "Suggests rates may stay higher for longer, favoring shorter duration fixed income initially." },
        cpi_analysis: { comment: "Core CPI continues its slow descent, driven by shelter costs.", investment_implications: "" },
        treasury_analysis: { comment: "Yield curve remains inverted but is steepening as rate cut expectations solidify.", investment_implications: "Opportunity to extend duration as the cutting cycle begins." },
        unemployment_analysis: { comment: "Labor market is cooling, with unemployment ticking up slightly.", investment_implications: "Watch for recession signals if unemployment rises rapidly." },
        nonfarm_analysis: { comment: "Job gains are moderating, reflecting a balancing labor market.", investment_implications: "" },
        federalfunds_analysis: { comment: "The Fed has initiated its cutting cycle with a 50bps cut in September.", investment_implications: "Positive for risk assets and bonds; cash yields will decline." },
        overall_synthesis: {
            market_outlook: "Cautiously Optimistic. The economy is slowing but avoiding a recession (Soft Landing scenario).",
            equity_strategy: "Focus on Quality and Growth. Large cap tech continues to lead, but market breadth may improve.",
            fixed_income_strategy: "Overweight Duration. As rates fall, bond prices rise.",
            commodities_outlook: "Neutral. Gold remains a hedge against geopolitical risk and dollar weakness.",
            currency_outlook: "Bearish USD. Lower rates typically weaken the dollar.",
            alternatives_strategy: "Private Credit may offer yield pickup.",
            key_risks: "Resurgent inflation or a sharper-than-expected economic slowdown."
        }
    }
};

export default mockData;
