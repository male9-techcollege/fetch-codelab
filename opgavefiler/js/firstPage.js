/* To test this code, I have to be online (e.g. with LiveServer). Fetch() doesn't work with files stored on a PC. It is sending a HTTP request to a server. */

/* The following relative path doesn't work on GitHub.
TO DO: make it work on GitHub with an absolute path. Platforms like GitHub can require that. */
// const myDataFileUrl = "../../opgavefiler/data/story.json";
const myDataFileUrl = "https://male9-techcollege.github.io/fetch-codelab/opgavefiler/data/story.json";
/* theStory is an article in file assets/pages/firstPage.html */
const myStoryElement = document.getElementById("theStory");

/* Opgave 1*/
/* Opgave beskrivelse
Hent den danske version af historien om kode katten Felix, og vis den i DOM-elementet med id "theStory". 
Du skal indsætte et af billederne i opgavefiler/img. 
*/

// din kode her

let myStorydata = null;

fetch(myDataFileUrl)
    .then((response) => {
        /* MAYBE TO DO: add stuff in case the response is not OK (not a requirement in this assignment) */
        return response.json();

    })
    .then((data) => {
        myStorydata = data;
        /* DK is a case in a switch statement */
        setUpStory('DK');
    })
    .catch((error) => {
        console.error(error);
        /* MAYBE TO DO:  Fail gracefully by adding code here to tell the user about the error (not a requirement in this assignment). */
    });

function setUpStory(myLanguage) {
    let myStory = null;

    switch (myLanguage) {
        case 'DK':
            myStory = myStorydata.DK;
            break;

        case 'SE':
            myStory = myStorydata.SE;
            break;

        case 'FI':
            myStory = myStorydata.FI;
            break;

        case 'UK':
            myStory = myStorydata.UK;
            break;

        default:
            myStory = myStorydata.DK;
            break;
    }

    createStory(myStory);
};

function createStory(myStory) {
    myStoryElement.innerHTML = '';
    createButtons();

    let myHeadline = document.createElement('h4');
    myHeadline.innerText = myStory.headline;
    let myImage = document.createElement('img');
    // myImage.src = '../../opgavefiler/img/felix.jpg';
    myImage.src = 'https://male9-techcollege.github.io/fetch-codelab/opgavefiler/img/felix.jpg';
    let myParagraf = document.createElement('p');
    myParagraf.innerText = myStory.text;


    myStoryElement.appendChild(myHeadline);
    myStoryElement.appendChild(myImage);
    myStoryElement.appendChild(myParagraf);
};

/* These buttons allow the user to switch to diff. languages. */
function createButtons() {
    let myDkbutton = document.createElement('button');
    myDkbutton.innerText = 'Dansk';
    myDkbutton.addEventListener('click', (e) => {
        setUpStory("DK");
    });

    let mySebutton = document.createElement('button');
    mySebutton.innerText = 'Svenska';
    mySebutton.addEventListener('click', (e) => {
        setUpStory("SE");
    });

    let myFibutton = document.createElement('button');
    myFibutton.innerText = 'Finsk';
    myFibutton.addEventListener('click', (e) => {
        setUpStory("FI");
    });

    let myUkbutton = document.createElement('button');
    myUkbutton.innerText = 'English';
    myUkbutton.addEventListener('click', (e) => {
        setUpStory("UK");
    });

    myStoryElement.appendChild(myDkbutton);
    myStoryElement.appendChild(mySebutton);
    myStoryElement.appendChild(myFibutton);
    myStoryElement.appendChild(myUkbutton);
};


/* Opgave 2 - skriv videre på koden her: */
/* Reuse the 2 constants at the top of the script: 
myDataFileUrl
myStoryElement
*/




/* Opgave 3*/
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");


/* Opgave 4*/
// din kode her
