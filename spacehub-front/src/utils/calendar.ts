export function hasBlockedDateBetween(
  start: number,
  end: number,
  blockedDays: number[],
) {
  for (let day = start; day <= end; day++) {
    if (blockedDays.includes(day)) {
      return true;
    }
  }

  return false;
}
