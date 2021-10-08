

function something () {
  console.log(`hi from something!`);
}

const anonsomething = function () {
  console.log(`hi from hjere something`);
}



const arrowfunction = () => {
  console.log(`hi again`);
}

const shortarrowhand = () => console.log('hiiiiiii');


const obj = {
  value: 10,
  func: () => {
    // 'this' does not get binded to obj
    console.log(this);
  }
}

obj.func();