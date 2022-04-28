// Code your solutions in this file

function writeCards(names)
{
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
    let message = [];
    while (i < names.length) {
      message[i] = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
      i++; // the iteration moves INSIDE the body of the loop!
    }
  
    return message;
}

function countDown(num)
{
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
    while (i < num + 1) {
      console.log(num);
      num--;
    }
}

countDown(10)