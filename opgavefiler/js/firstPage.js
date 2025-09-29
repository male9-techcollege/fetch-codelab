/* To test this code, I have to be online (e.g. with LiveServer). Fetch() doesn't work with files stored on a PC. It is sending a HTTP request to a server. */

/* The following relative path doesn't work on GitHub.
I had to replace it by an absolute path. Platforms like GitHub can require that. */
// const myDataFileUrl = "../../opgavefiler/data/story.json";
const myDataFileUrl = "https://male9-techcollege.github.io/fetch-codelab/opgavefiler/data/story.json";
let myStorydata = null;


/* Opgave 1*/
/* Opgave beskrivelse
Hent den danske version af historien om kode katten Felix, og vis den i DOM-elementet med id "theStory". 
Du skal indsætte et af billederne i opgavefiler/img. 
*/

// din kode her
/* theStory1 is an article in file assets/pages/firstPage.html */
const myStoryOneElement = document.getElementById("theStory1");

fetch(myDataFileUrl)
    .then((response) => {
        /* MAYBE TO DO: add stuff in case the response is not OK (not a requirement in this assignment) */
        return response.json();

    })
    .then((data) => {
        myStorydata = data;
        /* DK is a case in a switch statement */
        setUpStoryOne('DK');
        setUpStoryTwo('DK');
    })
    .catch((error) => {
        console.error(error);
        /* MAYBE TO DO:  Fail gracefully by adding code here to tell the user about the error (not a requirement in this assignment). */
    });

function setUpStoryOne(myLanguage) {
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

    createStoryOne(myStory);
};

function createStoryOne(myStory) {
    myStoryOneElement.innerHTML = '';

    let myHeadline = document.createElement('h4');
    myHeadline.innerText = myStory.headline;
    let myImage = document.createElement('img');
    // myImage.src = '../../opgavefiler/img/felix.jpg';
    myImage.src = 'https://male9-techcollege.github.io/fetch-codelab/opgavefiler/img/felix.jpg';
    let myParagraf = document.createElement('p');
    myParagraf.innerText = myStory.text;


    myStoryOneElement.appendChild(myHeadline);
    myStoryOneElement.appendChild(myImage);
    myStoryOneElement.appendChild(myParagraf);
};


/* Opgave 2 - skriv videre på koden her: */
/* Opgave beskrivelse
Lave en sprog versionerings option af opgave 1, udfra de elementer du kan finde i json objektet, med enten en dropdown meny eller knapper i interface. */
/* Reuse the 2 constants at the top of the script: 
myDataFileUrl
myStoryElement
*/

/* theStory2 is an article in file assets/pages/firstPage.html */
const myStoryTwoElement = document.getElementById("theStory2");

function setUpStoryTwo(myLanguage) {
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

    createStoryTwo(myStory);
};

function createStoryTwo(myStory) {
    myStoryTwoElement.innerHTML = '';
    createButtons();

    let myHeadline = document.createElement('h4');
    myHeadline.innerText = myStory.headline;
    let myImage = document.createElement('img');
    // myImage.src = '../../opgavefiler/img/felix.jpg';
    myImage.src = 'https://male9-techcollege.github.io/fetch-codelab/opgavefiler/img/felix.jpg';
    let myParagraf = document.createElement('p');
    myParagraf.innerText = myStory.text;


    myStoryTwoElement.appendChild(myHeadline);
    myStoryTwoElement.appendChild(myImage);
    myStoryTwoElement.appendChild(myParagraf);
};

/* These buttons allow the user to switch to diff. languages. The first story displayed is the one in Danish. */
function createButtons() {
    let myDkbutton = document.createElement('button');
    myDkbutton.innerText = 'Dansk';
    myDkbutton.addEventListener('click', (e) => {
        setUpStoryTwo("DK");
    });

    let mySebutton = document.createElement('button');
    mySebutton.innerText = 'Svenska';
    mySebutton.addEventListener('click', (e) => {
        setUpStoryTwo("SE");
    });

    let myFibutton = document.createElement('button');
    myFibutton.innerText = 'Finsk';
    myFibutton.addEventListener('click', (e) => {
        setUpStoryTwo("FI");
    });

    let myUkbutton = document.createElement('button');
    myUkbutton.innerText = 'English';
    myUkbutton.addEventListener('click', (e) => {
        setUpStoryTwo("UK");
    });

    myStoryTwoElement.appendChild(myDkbutton);
    myStoryTwoElement.appendChild(mySebutton);
    myStoryTwoElement.appendChild(myFibutton);
    myStoryTwoElement.appendChild(myUkbutton);
};


/* Opgave 3*/
/* Du skal hente data fra denne URI "https://jsonplaceholder.typicode.com/users"
og vise navn og adresse for alle brugere, i elementet med id="userList" i dette format */
// din kode her
const userURI = "https://jsonplaceholder.typicode.com/users";
const myUserlistElement = document.getElementById("userList");



/* Opgave 4*/
// din kode her
