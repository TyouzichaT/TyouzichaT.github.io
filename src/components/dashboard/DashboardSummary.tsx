import { motion } from "framer-motion";

interface DashboardSummaryProps {
  fedFundsRate: {
    lower: number | undefined;
    upper: number | undefined;
  };
  pceLevelValue: number | undefined;
  latestGdp?: {
    nominal: number | undefined;
    real: number | undefined;
  };
  latestUnemployment?: number | undefined;
  latestNonfarm?: number | undefined;
  latestCpi?: string | undefined;
  latestTreasury?: {
    tenYear: string | undefined;
    twoYear: string | undefined;
    spread: string | undefined;
  };
}

const SummaryCard = ({ title, metric, subMetric, trendColor }: { title: string, metric: string | number, subMetric?: string, trendColor: string }) => {
  const getAccentColor = (c: string) => {
    switch (c) {
      case 'blue': return 'bg-blue-500';
      case 'purple': return 'bg-indigo-500';
      case 'red': return 'bg-rose-500';
      case 'green': return 'bg-emerald-500';
      case 'yellow': return 'bg-amber-500';
      default: return 'bg-zinc-500';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="relative overflow-hidden rounded-lg p-5 border border-zinc-800 bg-zinc-900/50 hover:border-zinc-700 transition-colors group"
    >
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${getAccentColor(trendColor)} opacity-80`} />
      <div className="flex flex-col h-full justify-between pl-2">
        <div>
          <h3 className="text-xs font-medium uppercase tracking-wider mb-3 text-zinc-400 group-hover:text-zinc-300 transition-colors">{title}</h3>
          <p className="text-2xl font-semibold text-zinc-100 font-mono tracking-tight">{metric}</p>
        </div>
        {subMetric && <p className="text-xs text-zinc-500 font-mono mt-2 pt-2 border-t border-zinc-800/50">{subMetric}</p>}
      </div>
    </motion.div>
  );
};

const DashboardSummary = ({
  fedFundsRate,
  pceLevelValue,
  latestGdp,
  latestUnemployment,
  latestNonfarm,
  latestCpi,
  latestTreasury
}: DashboardSummaryProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
      <SummaryCard
        title="Fed Funds Rate"
        trendColor="blue"
        metric={fedFundsRate.lower !== undefined ? `${fedFundsRate.lower}-${fedFundsRate.upper}%` : "N/A"}
        subMetric="Target Range"
      />
      <SummaryCard
        title="Inflation (PCE)"
        trendColor="purple"
        metric={pceLevelValue ? `${pceLevelValue.toFixed(2)}%` : "N/A"}
        subMetric={`Core CPI: ${latestCpi || "N/A"}%`}
      />
      <SummaryCard
        title="Treasury Spread"
        trendColor="red"
        metric={latestTreasury?.spread || "N/A"}
        subMetric={`10Y: ${latestTreasury?.tenYear}% | 2Y: ${latestTreasury?.twoYear}%`}
      />
      <SummaryCard
        title="Real GDP"
        trendColor="green"
        metric={latestGdp?.real !== undefined ? `${latestGdp.real}%` : "N/A"}
        subMetric={`Nominal: ${latestGdp?.nominal}%`}
      />
      <SummaryCard
        title="Unemployment"
        trendColor="yellow"
        metric={latestUnemployment !== undefined ? `${latestUnemployment}%` : "N/A"}
        subMetric={`Nonfarm: ${latestNonfarm}k`}
      />
    </div>
  );
};

export default DashboardSummary;