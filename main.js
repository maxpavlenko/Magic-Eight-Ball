let userName = '';
if (userName) {
  console.log(`Hello, ${userName}`);
}else {
 	console.log(`Hello!`);
};


let userQuestion = 'Ask the question,';
console.log(`${userQuestion} ${userName}`);


let randomNumber = Math.floor(Math.random() * 8);
console.log(`Random number is: ${randomNumber}`);

let eightBall = '';
if (randomNumber === 1) {
  eightBall = 'It is certain';
}else if (randomNumber === 2) {
   eightBall = 'It is decidedly so';
}else if (randomNumber === 3) {
   eightBall = 'Reply hazy try again';
}
else if (randomNumber === 4) {
   eightBall = 'Cannot predict now';
}
else if (randomNumber === 5) {
   eightBall = 'Do not count on it';
}
else if (randomNumber === 6) {
   eightBall = 'My sources say no';
}
else if (randomNumber === 7) {
   eightBall = 'Outlook not so good';
}
else if (randomNumber === 0) {
   eightBall = 'Signs point to yes';
}

console.log(`Answer is: ${eightBall}`);

  
