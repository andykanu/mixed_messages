//declare array of random sentence parts
const first = ["In sooth, ", "To be or not to be, ", "All together now, " , "When you're on your own ", "With my shiny new star ", "We can turn blank white ", "Hospital food "];
const second = ["I know not why ", "that is the question, ", "all together now, ", "in this life " ,"tennis shoes on ", "in a blank white house ", "and I'll write your name "];
const third = ["I am so sad.", "fabulous destiny", "in no man's land.", "and the days and nights are long.", "I'm afraid of everyone", "popular culture wars.", "are you trying to seduce me?"];
//function to select string from array
const section = arr => arr[Math.floor(Math.random()* arr.length)];

//call function to create sections

const createSentence = () => {
    const firstSection = section(first);
    const secondSection = section(second);
    const thirdSection = section(third);
    return `${firstSection}${secondSection}${thirdSection}`
};
//event listener and call event for button
const msgBtn = document.getElementById('get_message');
msgBtn.addEventListener('click', displayMessage);

//display quote when button clicked
function displayMessage () {
    msgBtn.innerHTML = 'Try again'
    const quoteDisplay = document.getElementById('quote');
    quoteDisplay.style.display = "block";
    quoteDisplay.innerHTML = createSentence();
    document.getElementById('instructions').style.display = 'none';
};