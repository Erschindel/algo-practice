function generateDocument(characters, document) {
  // Write your code here.
  for (let x of document) {
    if (!characters.includes(x)) {
      console.log("false");
      return false;
    }
    let oldChars = characters.split("");
    oldChars.splice(characters.indexOf(x), 1);
    characters = oldChars.join("");
  }
  console.log(true);
  return true;
}

const char1 = "Bste!hetsi ogEAxpelrt x ";
const doc1 = "AlgoExpert is the Best!";
generateDocument(char1, doc1); // true
