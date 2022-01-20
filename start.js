// class Lucia {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   yourName() {
//     console.log(`welcome ${firstName} ${lastName}`);
//   }
// }

// const newCharacter = new Lucia("Peter", "Oti");

// newCharacter.yourName();

// This is the day that the Lord has made

const model = (n) => {
  const xx = [];
  const x = n.split(" ");
  console.log(x);
  for (let s of x) {
    xx.push(s.length);
  }
  console.log("This is: ", xx);
  console.log(Math.min(...xx));
};
// model("This is super coll");

const models = (n) => {
  const e = n.replace(/[aeiou]/gi, "");
  console.log(e);
};

const model3 = (n) => {
  const x = n.toString();

  //   console.log(n);

  const xx = x.split("").reverse().join("");
  const xxx = parseInt(xx);

  console.log(xxx);
};

const model4 = (n) => {
  const conn = "abcdefghijklmnopqrstuvwxyz";
  let conn2 = conn.split("");
  let newWord = [];
  for (word in conn2) {
    newWord.push(parseInt(word) + 1);
  }
  // console.log(newWord);
};

model4("The sun sets at twelve o' clock.");

const letterSearch = (word) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let newWord = alphabet.indexOf(word) + 1;
  return word.replace(/[a-z]/gi, function (el) {
    return console.log(newWord);
  });
};
// letterSearch("kii");

const textModel = (word) => {
  const letter = "abcdefghijklmnopqrstuvwxyz".toLowerCase();
  const newLetter = [];

  for (let i; i < word.length; i++) {
    let idx = letter.indexOf(word[i]);
    newLetter.push(idx + 1);
  }
  console.log(newLetter.join(" "));
};

// textModel("try");

const alphabetPosition2 = (text) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetNumb = [];
  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let idx = alphabet.indexOf(text[i]);

    if (idx === -1) {
      continue;
    } else {
      alphabetNumb.push(idx + 1);
    }

    return alphabetNumb.join(" ");
  }
};

// for (newWord in letter) {
//   newLetter.push(parseInt(newWord) + 1);
// }

// newLetter.join(" ");
// console.log(newLetter);

function alphabetPosition(text) {
  var bytes = text.split("");
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  for (var i = 0, len = text.length; i < len; i++) {
    bytes[i] = alphabet.indexOf(bytes[i].toLowerCase()) + 1;
  }
  return bytes.join(" ");
}
console.log(alphabetPosition("Hello World"));

const remake = (text) => {
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // let game = [];
  for (let i = 0, len = text.length; i < len; i++) {
    game[i] = alphabet.indexOf(game[i] + 1);
  }
  game.join(" ");
};
console.log(remake("good"));
