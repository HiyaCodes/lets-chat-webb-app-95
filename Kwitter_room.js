var firebaseConfig = {
    apiKey: "AIzaSyB63J03vwg-g1BR2gEse3gW3OwV58bZgsk",
    authDomain: "kwitter-app-cddce.firebaseapp.com",
    databaseURL: "https://kwitter-app-cddce-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-cddce",
    storageBucket: "kwitter-app-cddce.appspot.com",
    messagingSenderId: "150343884580",
    appId: "1:150343884580:web:f288886bf836592b9f9db1"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

var user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML ="welcome  "+ user_name

function addRoom(){

    room_name=document.getElementById("room_name.value")
    localStorage.setItem("room_name",room_name)

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name" 
    })
    window

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
console.log("room_name="+Room_names)
row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
   //End code
   });});}
getData();

function logout(){
   localStorage.removeItem("user_name")
   //localStorage.removeItem("room_name")
window.location="index.html"

}