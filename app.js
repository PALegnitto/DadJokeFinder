"use strict"

async function pullJokes(){
    const jokeData = await axios.get("https://icanhazdadjoke.com/");
    console.log("got", jokeData.data);
}