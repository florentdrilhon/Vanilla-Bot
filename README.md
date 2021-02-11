# vanilla_bot
Weather bot 

This is a very basic rule-based weather bot based on the API developped by "openweathermap". Using a node.js local server.

More information on the API here : https://openweathermap.org/current

The project is divided in several parts:

- The *patterns* part gathers regex patterns for the bot to recognize
- The *matcher* functions allow the bot to identify the intent and the entities defined in the pattern part.
- The *weather* part deals with the connection with the openweather API.

Then the app.js gathers all the functions and set the terminal interface to interact with the bot.

Note: As the free version of the API only includes the forecast for the current day, the results displayed when asking for another day are the same but it can be assumed that the bot understands the notion of date.
