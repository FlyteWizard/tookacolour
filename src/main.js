let id = "";
let title = "";
let name = "";
let color1 = '';
let color2 = '';
let color3 = '';

export function putID(userID) {
  id = userID;
  callAPI(id);
}

export function getUserID() {
  return id;
}

function callAPI(id) {
  const API = 'https://api.tookapic.com/photos/';
  const ID = id;
  const DEFAULT_QUERY = '?include=colors';

  fetch(API + ID + DEFAULT_QUERY, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/vnd.tookapic.v2+json'
      })
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson);
      title = myJson.data.title;
      name = myJson.data.username;
      console.log(title);
    });
}

export function getTitle() {
  return title;
}

export function getUserName() {
  return name;
}

export function getFirstColor() {
  let color1 = '#444444';
  return color1;
}

export function getSecondColor() {
  let color2 = '#800000';
  return color2;
}

export function getThirdColor() {
  let color3 = '#123abc';
  return color3;
}

export function chartData() {
  const data = {
    labels: [getFirstColor(), getSecondColor(), getThirdColor()],
    datasets: [{
        data: [1, 1, 1],
        backgroundColor: [
            getFirstColor(),
            getSecondColor(),
            getThirdColor()
        ]
    }]
  }
  return data;
}




// backend -> cool to be able to go back to a url
// with the photo id
// ex. /colours?ID
// sql -> id : color : title : name
