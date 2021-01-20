//declare array of random sentence parts
const first = ["Since my baby left me, ", "To be or not to be, ", "I shot them down" , "When you're on your own ", "With my shiny new star ", "I gave you two of them", "Hospital food ", "We drove past the school"];
const second = ["The wheelchair crashed down ", "She cut me, all the same, ", "all together now, ", "in this life " ,"Footprints in puddles ", "I choked on it ", "and I'll write your name ", "Upstairs, we creaked"];
const third = ["I find myself on lonely street", "You promised me destiny", "in no man's land.", "and the days and nights are long.", "The light gets in", "We've only had one", "Will you come with me?", "There will be consequences"];
const fourth = ["I guess I'll heal myself", "Now there's nothing to see", "How the mighty fall", "The dreams don't wake me.", "I'm afraid of everyone", "But I'm in the dark", "I'll do it myself", "Your sister looks just like you."];

const chorus_first = ["Down the end of lonely street", "Can't burn nothing", "You gave me the moon, the sea, the stars", "I don't know who you are", "I still wear the scars"]
const chorus_last = ["You'll find me in the dark", "You've got no flame", "Everything you know is only on the radio", "It feels like yesterday", "I'll serve my time for you"]
//function to select string from array
const section = arr => arr[Math.floor(Math.random()* arr.length)];

//call function to create sections
const createVerse = () => section(first) + "\r\n" + section(second) + "\r\n" + section(third) + "\r\n" + section(fourth);
const createChorus = () => (section(chorus_first) + "\r\n") + (section(chorus_first) + "\r\n") +(section(chorus_first) + "\r\n") +section(chorus_last)

const createSong = () => {
    const firstVerse = createVerse();
    const chorus = createChorus();
    const secondVerse = createVerse();   
    const thirdVerse = createVerse();

    const songLyrics = firstVerse + "\r\n\r\nChorus:\r\n" + chorus + "\r\n\r\n" + secondVerse + "\r\n\r\nChorus:\r\n" + chorus + "\r\n\r\n" + thirdVerse + "\r\n\r\n" + chorus;
    return songLyrics;
};
//event listener and call event for button
const msgBtn = document.getElementById('get_message');
msgBtn.addEventListener('click', displayMessage);

//display quote when button clicked
function displayMessage () {
    msgBtn.innerHTML = 'Gimme more blues!'
    const quoteDisplay = document.getElementById('song');
    const bgImage = document.getElementById('contentHolder');
    bgImage.style.backgroundImage="url('./images/white_rect.jpg')";
    quoteDisplay.style.display = "block";
    quoteDisplay.style.marginTop = "600px";
    quoteDisplay.innerHTML = createSong();
    document.getElementById('instructions').style.display = 'none';
};