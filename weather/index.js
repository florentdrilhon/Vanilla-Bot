'use strict';
const axios=require("axios");
const apikey= 'd4727039ccc62dc33322512598a97c51';
//note : the API I am using only compute the current weather, so the weather displayed for the other days are the same
// but the bot recognize the date the user asks.

const getWeather = function(location,rl) {
    return new Promise(async (resolve, reject) => {
        try {
            const weatherConditions=await axios.get("http://api.openweathermap.org/data/2.5/weather",
            {
                params : {
                    APPID : apikey,
                    q: location,
                    units : 'metric',
                    days: 3
                }
            });
            console.log("Global weather : "+weatherConditions.data.weather[0].description);
            console.log("Average temperature : "+weatherConditions.data.main.temp+" °C");
            rl.prompt();

        }
        catch(error){
            console.log("Sorry, I could not find the weather for "+location+", maybe the name of city is mistakenly written");
            rl.prompt();
        }
    })
}
module.exports=getWeather;
