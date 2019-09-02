window.onload = function() {
  let zero = document.getElementById("zero");
  let one = document.getElementById("one");
  let two = document.getElementById("two");
  let three = document.getElementById("three");
  let four = document.getElementById("four");
  let five = document.getElementById("five");
  let six = document.getElementById("six");
  let seven = document.getElementById("seven");
  let eight = document.getElementById("eight");
  let nine = document.getElementById("nine");
  let equals = document.getElementById("equals");
  let divide = document.getElementById("divide");
  let multiply = document.getElementById("multiply");
  let add = document.getElementById("add");
  let subtract = document.getElementById("subtract");
  let clear = document.getElementById("clear");
  let percent = document.getElementById("percent");
  let input = document.getElementById("display");
  let results = document.querySelector(".results");

  let btnArr = [zero, one, two, three, four, five, six, seven, eight, nine];
  let operatorBtn = [equals, divide, multiply, add, subtract, clear, percent];
  let operatorKey = ["=", "/", "*", "+", "-"];
  let key = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let elementsStore = [];
  let operationArr = [];
  let operationStore = []; // to store values from the input 
  let eventsArr = []; // array to keep track of clicked operators
  let memory = [];
  let operatorCount = [];
  let clickCount = 0;

  for (let i in btnArr) {
    btnArr[i].addEventListener("click", function() {
      btnArr[i] = key[i];
      elementsStore.push(btnArr[i]);
      operationArr = elementsStore.join("");
      input.value = operationArr;
    });
    /*let inputMaxLength = 12;
      if(input.value.length > inputMaxLength){
         alert("Exceeded memory");
         elementsStore = [];
         input.value = "";
      }*/
  }

  add.addEventListener("click", function() {
    operationStore.push(parseInt(input.value));
    input.value = "";
    elementsStore = [];
    eventsArr.push("plus");
    console.log(eventsArr);
    console.log(operationStore);
  });

  subtract.addEventListener("click", function() {
    operationStore.push(parseInt(input.value));
    input.value = "";
    elementsStore = [];
    eventsArr.push("minus");
    console.log(eventsArr);
  });
  equals.addEventListener("click", function() {
    clickCount++;
    operationStore.push(parseInt(input.value));
    if(eventsArr.includes("plus")){
      addNum();
    } else if(eventsArr.includes("minus")){
       subtractNum(base);
    }
    
  });

  clear.addEventListener("click", function() {
    operationStore = [];
    elementsStore = [];
    input.value = "";
    memory = [];
    eventsArr = [];
  });

  function addNum() {
    console.log(operationStore);
    let sum = operationStore.reduce(function(total, current) {
      return total + current;
    });
    elementsStore = [...operationStore];
    operationStore = [];
    input.value = sum;
    elementsStore = [];
    memory.push(sum);
    console.log(memory);
  }

    function subtractNum(base) {
       operationStore.length = arguments.length;
      base = Number(operationStore[0]);
      for (var i = 1; i < arguments.length; i++) {
        base -= Number(arguments[i]);
      }
      return base;
    }
  

  function multiplyNum() {}

  function divideNum() {}

  function percentOf(a) {}

  /* let btnArr = [zero, one, two, three, four ]
 let numArr =[0,1,2,3,4,5,6,7,8,9,0,"/","-","=", "+","%"] */
};
