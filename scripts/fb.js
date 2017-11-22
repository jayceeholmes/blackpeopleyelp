
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyB47ehSUG0iyv5BNtI7ETN7Ng4yvDN6tZ0",
      authDomain: "itpr-8e3cf.firebaseapp.com",
      databaseURL: "https://itpr-8e3cf.firebaseio.com",
      projectId: "itpr-8e3cf",
      storageBucket: "itpr-8e3cf.appspot.com",
      messagingSenderId: "73440465000"
    }; // End Config

    firebase.initializeApp(config);
    console.log("firebase");

  // Initialize Database
    var database = firebase.database();

  // Push Locations to Database

    function pushData(px, py, time){
      var ref = database.ref('pings/racism');       // Go to Proper Root
      var data = {                                  // Get Data Points
        gpsx: px,
        gpsy: py,
        time: time
      };
      ref.push(data);                               // Push Data
    } // End Functionn


    // // Firebase Tutorial: Parts I, II
    //
    // // Get Elements
    // const preObject = document.getElementById('object');
    // const uList = document.getElementById('list');
    //
    // // Create References
    // const dbRefObject = firebase.database().ref().child('object');
    // const dbRefList = dbRefObject.child('hobbies');
    //
    //  // Sync Object Changes
    // dbRefObject.on('value', snap => {
    //     preObject.innerText = JSON.stringify(snap.val(), null, 3);
    // });
    //
    //
    // dbRefList.on('child_added', snap => {
    //   const li = document.createElement('li');
    //   li.innerText = snap.val();
    //   li.id = snap.key;
    //   uList.appendChild(li);
    // });
    //
    //
    // dbRefList.on('child_changed', snap => {
    //   const liChanged = document.getElementById(snap.key);
    //   liChanged.innerText = snap.val();
    // });
    //
    // dbRefList.on('child_removed', snap => {
    //   const liToRemove = document.getElementById(snap.key);
    //   liToRemove.remove();
    // });


    // // Firebase Tutorial: Quick Start
    // var bigOne = document.getElementById('bigOne');
    // var dbRef = firebase.database().ref().child('text');
    // dbRef.on('value', snap => bigOne.innerText = snap.val());
