//ADD YOUR FIREBASE LINKS
//Ya ya we will do it
var firebaseConfig = {
    apiKey: "AIzaSyA9ecwk7msiDnev5RkPTenJB-eD3DW4N9A",
    authDomain: "kwitter-the-twitter.firebaseapp.com",
    projectId: "kwitter-the-twitter",
    storageBucket: "kwitter-the-twitter.appspot.com",
    messagingSenderId: "325967618134",
    appId: "1:325967618134:web:77f187db7b8b47439bdbf7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); 
function addUser()
  {
 user_name = document.getElementById("user_name").value;  
 firebase.database().ref("/").child(user_name).update({
 purpose : "adding user"    
 });   
  }
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

  function addRoom() 
  {
    room_name = document.getElementById("room_name").value;  
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding rooms"    
    });   
     }

     function getData() {firebase.database().ref("/").on('value',
     function(snapshot) {document.getElementById("output").innerHTML =
     "";snapshot.forEach(function(childSnapshot) {childKey =
     childSnapshot.key;
      Room_names = childKey;
      //Start code
      row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div>'hr'"; 
      document.getElementById("output").innerHTML = row;    
      //End code
      });});}
     getData();
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";    
    } 
         
  