function ambiguousMeasurements(measuringCups, low, high) {
  let maxRange = high - low;
  let ordered = measuringCups.sort((a, b) => {
    return (
      (a[1] - a[0]) / ((a[1] + a[0]) / 2) - (b[1] - b[0]) / ((b[1] + b[0]) / 2)
    );
  });
  let totalRange = 0;
  let currentMin = 0;
  let currentMax = 0;
  let cupIndex = 0;
  while (totalRange <= maxRange) {
    if (!ordered[cupIndex]) {
      break;
    }
    if (currentMax + ordered[cupIndex][1] > high) {
      cupIndex++;
      continue;
    }
    currentMax += ordered[cupIndex][1];
    currentMin += ordered[cupIndex][0];
    if (currentMin >= low && currentMax <= high) {
      return true;
    }
    totalRange += ordered[cupIndex][1] - ordered[cupIndex][0];
  }
  return false;
}

const vals1 = [
  [
    [200, 210],
    [450, 465],
    [800, 850],
  ],
  2100,
  2300,
];
ambiguousMeasurements(...vals1);
