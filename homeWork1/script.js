const textedBanana = document.getElementById("texted");

function showAnAlert() {
  if ((textedBanana.value = "banana")) {
    alert("papaya");
  }
}

const changeTheText = document.getElementById("change-the-text");
const theText = document.getElementById("the-text");
const h2 = document.querySelector(".h2");

function countLetters() {
  let lettersCounters = {};
  let str = changeTheText.value;
  for (let letter of str) {
    if (lettersCounters[letter]) {
      lettersCounters[letter]++;
    } else {
      lettersCounters[letter] = 1;
    }
  }
  return lettersCounters;
}
function changeTheSentence() {
  let obj = countLetters();
  let tempKey;

  console.log(obj);
  let biggestNumber = 0;
  for (const key in obj) {
    if (Number(obj[key]) > biggestNumber) {
      biggestNumber = obj[key];
      tempKey = key;
    }
  }
  h2.innerHTML = changeTheText.value.replaceAll(tempKey, "😎");
  changeTheText.value = "";
}

//alsdaslhdliashdhlalshdlashdhsalkhdlhsadhlashd

const greetings = [
  "Hello",
  "Good Morning",
  "Good Evening",
  "Good Afternoon",
  "Good Night",
];

function randomGreetings() {
  alert(greetings[Math.floor(Math.random() * greetings.length)]);
}

////////////////////////////////////////////////

const selectFirstDate = document.getElementById("first-date");

const selectSecondDate = document.getElementById("second-date");

const result = document.getElementById("result");
function calculateTheDate() {
  let date1 = new Date(selectFirstDate.value);
  let date2 = new Date(selectSecondDate.value);
  var Difference_In_Time = date1 - date2;
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  result.innerHTML =
    "Total number of days between dates  <br>" +
    date1 +
    "<br> and <br>" +
    date2 +
    " is: <br> " +
    Difference_In_Days;
}
