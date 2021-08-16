
var firebaseConfig = {
apiKey: "AIzaSyDkTYSVGn_1UI80Neh71UPOrZVM1VFNrLw",
authDomain: "nevil-skwitterapp.firebaseapp.com",
databaseURL: "https://nevil-skwitterapp-default-rtdb.firebaseio.com",
projectId: "nevil-skwitterapp",
storageBucket: "nevil-skwitterapp.appspot.com",
messagingSenderId: "450376692103",
appId: "1:450376692103:web:4a1547c073ab0c53dde322" };

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
