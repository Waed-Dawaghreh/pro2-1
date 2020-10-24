dis = (val) => (document.getElementById("result").value += val);

//function that evaluates the digit and return result
solve = () => {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
};

//function that clear the display
clr = () => (document.getElementById("result").value = "");

calculate = () => {
  var val = document.getElementById("result").value;
  if (val.length > 0) {
    val = val.substring(0, val.length - 1);
    document.getElementById("result").value = val;
  }
};
function squer() {
  var val = document.getElementById("result").value;

  var result = Math.pow(val, 2);
  document.getElementById("result").value = result;
}
doMath = () => {
  var inputNum = document.getElementById("result").value;
  var result = Math.abs(inputNum);
  document.getElementById("result").value = result;
};

//factorial number
function factorial() {
  var inputNum = document.getElementById("result").value;
  let answer = 1;
  if (inputNum == 0 || inputNum == 1) {
    document.getElementById("result").value = answer;
  } else {
    for (var i = inputNum; i >= 1; i--) {
      answer = answer * i;
    }
    document.getElementById("result").value = answer;
  }
}
var x = document.getElementById("myAudio");

function playAudio() {
  x.play();
}

const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
