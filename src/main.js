// Declare Global Variables
let id, title, url, colour1, colour2, colour3, colour4, colour5, colour6, colour7, colour8 = " ";

// Private function
// Assigns the userID to ID
export function putID(userID) {
  id = userID;
  callAPI(id);
}
// Public function
// Returns the current ID
export function getUserID() {
  return id;
}

// Public function
// Calls API and assigns the appropriate variables
export function callAPI(id) {

  const API = 'https://api.tookapic.com/photos/';
  const ID = id;
  const DEFAULT_QUERY = '?include=colors';

  fetch(API + ID + DEFAULT_QUERY, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/vnd.tookapic.v2+json'
    }
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
    //putTitle(myJson.data.title);
    //putURL(myJson.data.url);
    //colour1 = myJson.data.colors.data[1];
  });
}

// Public function
// Assigns userTitle to title
export function putTitle(userTitle) {
  title = userTitle;
}
// Public function
// Returns the title to users
export function getTitle() {
  title = "Bonjour Monsieur";
  return title;
}

// Public function
// Assigns userURL to URL
export function putURL(userURL) {
    url = userURL;
}
// Public function
// Returns the URL to users
export function getURL() {
  url = "https://tookapic.com/photos/623708";
  return url;
}

// Private functions
// Returns the colours
function getFirstColour() {
  colour1 = '#223947';
  return colour1;
}
function getSecondColour() {
  colour2 = '#b3c8d2';
  return colour2;
}
function getThirdColour() {
  colour3 = '#d1b641';
  return colour3;
}
function getFourthColour() {
  colour4 = '#7d2624';
  return colour4;
}
function getFifthColour() {
  colour5 = '#64aede';
  return colour5;
}
function getSixthColour() {
  colour6 = '#8a8096';
  return colour6;
}
function getSeventhColour() {
  colour7 = '#aca590';
  return colour7;
}
function getEighthColour() {
  colour8 = '#40a1d4';
  return colour8;
}

// Public function
// Returns the data for the charts
export function chartData() {
  const data = {
    labels: [getFirstColour(), getSecondColour(), getThirdColour(), getFourthColour(), getFifthColour(), getSixthColour(), getSeventhColour(), getEighthColour()],
    datasets: [{
        data: [1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: [
            getFirstColour(),
            getSecondColour(),
            getThirdColour(),
            getFourthColour(),
            getFifthColour(),
            getSixthColour(),
            getSeventhColour(),
            getEighthColour()
        ]
    }]
  };
  return data;
}

// Thinking
// backend -> cool to be able to go back to a url
// with the photo id
// ex. /colours?ID
// sql -> id : color : title
// for each color, add to label array
