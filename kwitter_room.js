var firebaseConfig = {
    apiKey: "AIzaSyC5kfZXEAtWuaFuV8hAdiS8kZnQ_Z6i6KU",
    authDomain: "project-94-dbfe0.firebaseapp.com",
    databaseURL: "https://project-94-dbfe0-default-rtdb.firebaseio.com",
    projectId: "project-94-dbfe0",
    storageBucket: "project-94-dbfe0.appspot.com",
    messagingSenderId: "1062279150770",
    appId: "1:1062279150770:web:883b802f38acba7e479dab",
    measurementId: "G-BG7YZSBD6Y"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}