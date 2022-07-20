function longestPeak(arr) {
  // Write your code here.
  if (arr.length < 3) return 0;
  let longestLength = 0;

  arr.forEach((x, i, a) => {
    if (x > a[i - 1] && x > a[i + 1]) {
      console.log("peak tip:", x);
      let length = 3,
        last = i - 1,
        next = i + 1;
      while (a[last] > a[last - 1]) {
        console.log("left", length, a[last]);
        length++;
        last--;
      }
      while (a[next] > a[next + 1]) {
        console.log("right", length, a[next]);
        length++;
        next++;
      }
      if (length > longestLength) longestLength = length;
      console.log(length);
    }
  });
  console.log(longestLength);
  return longestLength;
}

const arr1 = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
longestPeak(arr1); // 6 (0, 10, 6, 5, -1, -3)
