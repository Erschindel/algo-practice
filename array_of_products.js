// don't usse division
function arrayOfProducts(arr) {
  // Write your code here.
  const ans = [];
  arr.forEach((x, i) => {
    ans.push(
      arr.reduce((acc, y, j) => {
        i !== j && (acc = acc * y);
        return acc;
      }, 1)
    );
  });
  console.log(ans);
  return ans;
}

const arr1 = [5, 1, 4, 2];
arrayOfProducts(arr1); // [8, 40, 10, 20]
