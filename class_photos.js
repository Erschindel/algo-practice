function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  const blueSorted = blueShirtHeights.sort((a, b) => b - a);
  const redSorted = redShirtHeights.sort((a, b) => b - a);
  const redTallest = redSorted[0] > blueSorted[0];
  console.log("blue", blueSorted, "red", redSorted);

  for (let i = 0; i < redSorted.length; i++) {
    if (redTallest) {
      if (redSorted[i] <= blueSorted[i]) console.log(false);
    } else if (redSorted[i] >= blueSorted[i]) console.log(false);
  }
  console.log(true);
  return true;
}

const red1 = [5, 8, 1, 3, 4];
const blue1 = [6, 9, 2, 4, 5];
const red2 = [5, 8, 1, 3, 2];
const blue2 = [6, 9, 2, 2, 5];
const blue3 = [5, 8, 1, 3, 4];
const red3 = [6, 9, 2, 4, 5];

classPhotos(red3, blue3);
