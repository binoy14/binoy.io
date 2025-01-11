export function calendarFormatter(value: number) {
  const monthValue = value * 12;
  if (monthValue < 12) {
    return `${monthValue} Months`;
  }
  return `${value} Year${value > 1 ? 's' : ''}`;
}
