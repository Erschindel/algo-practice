function minimumAreaRectangle(points) {
  // Write your code here.
  let ans = 0;
  while (points.length) {
    let point = points[0];

    for (let i = 1; i < points.length; i++) {
      let first = [],
        height = 0;

      if (points[i][0] === point[0]) {
        first = points[i];
        height = Math.abs(point[1] - points[i][1]);
        for (let j = 1; j < points.length; j++) {
          let second = [],
            width = 0;

          if (points[j][1] === point[1]) {
            second = points[j];
            width = Math.abs(point[0] - points[j][0]);
            const strPoints = JSON.stringify(points);

            if (
              strPoints.split(JSON.stringify([second[0], first[1]])).length > 1
            ) {
              if (width * height < ans || ans === 0) {
                ans = width * height;
              }
            }
          }
        }
      }
    }

    points.shift();
  }
  console.log(ans);
  return ans;
}

const arr1 = [
  [1, 5],
  [5, 1],
  [4, 2],
  [2, 4],
  [2, 2],
  [1, 2],
  [4, 5],
  [2, 5],
  [-1, -2],
];

minimumAreaRectangle(arr1); // 3 --- [1,5], [2,5], [1,2], [2,2]

// can I assume that the points array always has at least 4 points inside?
// first idea:
// for each point, check to see if the x-coord is in some other point
// if so, store point 1 and difference between the y-coordinates (height), then check
//      y-coord in a second loop
// if y matches, store point 2 and difference between the x-coordinates (width),
//      then see if points includes [x-coord of point 2, y-coord of point 1]
// if so, we have a rectangle
// if width * height < ans || ans === 0, ans = width * height
// return ans
