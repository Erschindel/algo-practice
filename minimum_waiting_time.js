function minimumWaitingTime(queries) {
  // Write your code here.
  if (queries.length === 1) return 0;
  const sortedQueries = queries.sort((a, b) => b - a);

  return sortedQueries.reduce((acc, x, i) => {
    console.log(acc + x * i);
    return acc + x * i;
  }, 0);
}
// Do not edit the line below.
//   exports.minimumWaitingTime = minimumWaitingTime;

// const arr1 = [3, 2, 1, 2, 6];
// minimumWaitingTime(arr1);
// 17 (0) + (1) + (2 + 1) + (2 + 2 + 1) + (3 + 2 + 2 + 1)

const arr2 = [5, 5, 5];
minimumWaitingTime(arr2);
// 15 (0) + (5) + (5 + 5)
