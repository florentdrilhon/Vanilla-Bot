'use strict';

const readline = require('readline');
const matcher=require('./matcher'); //loading the matcher module
const weather = require ("./weather");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

// function to call when the user asks for the weather
function show_weather(rl,cb){
  if(cb.entities){
  if(cb.entities.date=='tomorrow'){
  console.log('\nHere is the weather in '+`${cb.entities.city}`+' for tomorrow : \n');
  weather(cb.entities.city,rl);
  }
  else if (cb.entities.date=="the day after tomorrow") {
    console.log('\nHere is the weather in '+`${cb.entities.city}`+' the day after tomorrow : \n');
    weather(cb.entities.city,rl);
  }
  else {
    console.log('\nHere is the weather in '+`${cb.entities.city}`+' today : \n');
    weather(cb.entities.city,rl);
  }
}
}


rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
  matcher(reply, cb => {

    if (cb.intent=='Exit'){ // exit function
      console.log('Bye, see you soon');
      rl.close();
    }

    else if (cb.intent=='Hello ') { //hello function
      console.log(`${cb.entities.greeting}` +' there, what can I do for you ?');
      rl.prompt();
    }
    else if (cb.intent=='Current weather'){ // get the weather
      show_weather(rl,cb);
    }
    else if (cb.intent=='Thanks'){ // get the weather
      console.log("You're welcome ;)");
      rl.prompt();
    }

    else{ //default
      console.log("I didn't understand, can you repeat the question please ?");
      rl.prompt();
    }
  });
});
