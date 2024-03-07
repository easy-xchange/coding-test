const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class VehicleRegistrationSystem {
  constructor() {
    this.registrations = new Map();
  }

  register(registerTextArray) {
    //slice and rejoin, we arent bothered by how many names the user has
    const plateArray = registerTextArray.slice(0, 3);
    const nameArray = registerTextArray.slice(3);
    const plate = plateArray.join(' ');
    const name = nameArray.join(' ');
    this.registrations.set(name, plate);
    console.log(`Registered ${name} with plate ${plate}`);
  }

  issue(plateTextArray) {
    const plateArray = plateTextArray.slice(0, 3);
    let [number, letters] = [parseInt(plateArray[1]), plateArray[2]];
    number++;
    if (number > 999) {
      number = 1;
      letters = this.incrementLetters(letters);
    }
    if (letters === 'error') {
      return 'error'; //numbers cant produce an error
    }
    return `B ${this.addZeros(number)} ${letters}`;
  }

  incrementLetters(letters) {
    const chars = 'ABCDEFGHIJKLMNOPRSTUVWXYZ'.split(''); // Donno how else to exclude Q
    let [first, second, third] = letters.split('').map(c => chars.indexOf(c));//get the index of the character that matches

    //increment the letters one by one by picking the letter from chars based on index
    third++;
    if (third >= chars.length) {
      third = 0;
      second++;
    }
    if (second >= chars.length) {
      second = 0;
      first++;
    }
    if (first >= chars.length) {
      return 'error'; //Error only needs to hit if the first letter goes beyond Z, no need for other errors
    }

    return `${chars[first]}${chars[second]}${chars[third]}`;
  }

  //add 000s to the number if it needs any
  addZeros(number) {
    return number.toString().padStart(3, '0');//had to google this part
  }

  //sorting and printing
  printRegistrations() {
    const sortedNames = Array.from(this.registrations.keys()).sort();
    sortedNames.forEach(name => {
      console.log(`${name}: ${this.registrations.get(name)}`);
    });
  }
}

const system = new VehicleRegistrationSystem();

function promptCommand() {
  rl.question('Enter command (Register/Issue) or "exit" to quit: ', (input) => {
    if (input.toLowerCase() === 'exit') {
      system.printRegistrations();
      rl.close();
    } else {
      //Probably wouldv processed this else where so each function gets only what it needs
      //instead of all of them getting inputArray
      const inputArray = input.split(' ');
      const command = inputArray.shift();

      if (command === 'Register') {
        system.register(inputArray);//I could return here but there is only 1 result so might aswell just log in the function
      } else if (command === 'Issue') {
        const newPlate = system.issue(inputArray);
        console.log(newPlate === 'error' ? 'error' : `${newPlate}`);
      } else {
        console.log('You can only use "Register", "Issue" or "exit"!');
      }

      promptCommand();
    }
  });
}

promptCommand();
module.exports = { VehicleRegistrationSystem };