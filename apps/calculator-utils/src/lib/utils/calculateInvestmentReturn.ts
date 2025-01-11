export function calculateInvestmentReturn({
  principal,
  annualYieldPercent,
  years,
}: {
  principal: number;
  annualYieldPercent: number;
  years: number;
}) {
  const annualYieldDecimal = annualYieldPercent / 100;
  const returnAmount = principal * Math.pow(1 + annualYieldDecimal, years);
  const dividendAmount = returnAmount - principal;

  return {
    returnAmount,
    dividendAmount,
  };
}
