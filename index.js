/*
 BocaJS / MiamiJS and PalmBeachJS International NodeBotDay Sample Johnny-Five.io Code
 What is uncommented is EXACTLY the code you'll find at the top of the http://johnny-five.io/examples/ page
 Once you have this working, it's time to COPY it and make your own.

 Remember to run "npm i" in this directory BEFORE to try to run this code (with "node johnnyFiveSample.js")
 */

// For the Boards given to you at the event use #1, in other words don't touch anything.

// 1) USB (nothing special) - How the ESP8266 for the BocaJS / Palm Beach JS events are setup.
 // let johnny-five figure out which USB Com port to use

// 2) Want to define which com port to use? I had to do this on ONE Windows Computer:
// var board = new five.Board({ port: "COM7" }); // or /dev/cu-usbserial for mac or /Dev/ttyUSB1 for Linux etc.


// 3) Did you flash the ESP8266 board with the Standard FirmataWifi.ino and want to match the ip address defined in wifiConfig.h? uncomment these lines and comment the "board" lines above
/*
var EtherPortClient = require("etherport-client").EtherPortClient; // New dependency needed for Wifi
var board = new five.Board({
    port: new EtherPortClient({
        host: "192.168.29.50", // this is the same Ip YOU defined in the wifiConfig.h file you use when flashing the StandardFirmataWifi.ino file
        port: 3030
    }),
    timeout: 1e5,
    repl: false
});
*/

// CHAD WEIRD BLINKY STUFF

// var five = require("johnny-five");
// var board = new five.Board();
// var led;

// // Do we want the sequence to loop?
// var loop = true;

// // Create a simple demo sequece that calls various
// // five.Led methods with specified arguments and
// // let it run for the given duration (defaults to 3 seconds).

// var demoSequence = [{
//   method: "pulse",
//   args: [1000],
//   duration: 5000
// }, {
//   method: "strobe",
//   args: [500],
//   duration: 3000
// }, {
//   method: "fadeIn",
//   args: [
//     2000,
//     function() {
//       console.log("fadeIn complete!");
//     }
//   ],
//   duration: 2500
// }, {
//   method: "fadeOut",
//   args: [
//     5000,
//     function() {
//       console.log("fadeOut complete!");
//     }
//   ],
//   duration: 5500
// }, {
//   method: "brightness",
//   args: [10],
//   duration: 3000
// }, {
//   method: "off"
// }]
var chadSong = 
    [
        ["F#5",1/2],
        ["G#5",1/2],
  
        ["D#5",1/4],
        ["D#5",1/4],
        [null,1/4],
        ["B4",1/4],
  
        ["D5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
        [null,1/4],
  
        ["B4",1/2],
        ["C#5",1/2],
        ["D5",1/2],
  
        ["D5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["F#5",1/4],
  
        ["G#5",1/4],
        ["D#5",1/4],
        ["F#5",1/4],
        ["C#5",1/4],
  
        ["D#5",1/4],
        ["B4",1/4],
        ["C#5",1/4],
        ["B4",1/4],
  
        ["D#5",1/2],
        ["F#5",1/2],
  
        ["G#5",1/4],
        ["D#5",1/4],
  
        ["F#5",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["B4",1/4],
  
        ["D5",1/4],
        ["D#5",1/4],
        ["D5",1/4],
        ["C#5",1/4],
  
        ["B4",1/4],
        ["C#5",1/4],
  
        ["D5",1/2],
  
        ["B4",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["F#5",1/4],
  
        ["C#5",1/4],
        ["D#5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
  
        ["C#5",1/2],
        ["B4",1/2],
        ["C#5",1/2],
        ["F#5",1/2],
        ["G#5",1/2],
  
        ["D#5",1/4],
        ["D#5",1/4],
        [null,1/4],
  
        ["B4",1/4],
  
        ["D5",1/4], 
        ["C#5",1/4],
        ["B4",1/4],
        [null,1/4],
  
        ["B4",1/2],
        ["C#5",1/2],
        ["D5",1/2],
  
        ["D5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
        ["C#5",1/4],
  
        ["D#5",1/4],
        ["F#5",1/4],
        ["G#5",1/4],
        ["D#5",1/4],
  
        ["F#5",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["B4",1/4],
  
        ["C#5",1/4],
        ["B4",1/4],
  
        ["D#5",1/2],
        ["F#5",1/2],
  
        ["G#5",1/4],
        ["D#5",1/4],
        ["F#5",1/4],
        ["C#5",1/4],
  
        ["D#5",1/4],
        ["B4",1/4],
        ["D5",1/4],
        ["D#5",1/4],
  
        ["D5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
        ["C#5",1/4],
  
        ["D5",1/2],
  
        ["B4",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["F#5",1/4],
        ["C#5",1/4],
  
        ["D#5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
        ["C#5",1/2],
        ["B4",1/2],
        ["C#5",1/2],
        //end of loop
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["B4",1/4],
        ["E5",1/4],
        ["D#5",1/4],
        ["E5",1/4],
        ["F#5",1/4],
        ["B4",1/2],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["E5",1/4],
        ["D#5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["D#4",1/4],
        ["E4",1/4],
        ["F#4",1/4],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/4],
        ["B4",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["G#4",1/4],
        ["F#4",1/4],
        //
        ["B4",1/2],
        ["B4",1/4],
        ["A#4",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["G#4",1/4],
        ["E4",1/4],
        ["E5",1/4],
        ["D#5",1/4],
        ["E5",1/4],
        ["F#5",1/4],
        ["B4",1/2],
        ["A#4",1/2],
        //
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["B4",1/4],
        ["E5",1/4],
        ["D#5",1/4],
        ["E5",1/4],
        ["F#5",1/4],
        ["B4",1/2],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["E5",1/4],
        ["D#5",1/4],
        ["C#5",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["D#4",1/4],
        ["E4",1/4],
        ["F#4",1/4],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/2],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/4],
        ["B4",1/4],
        ["C#5",1/4],
        ["D#5",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["G#4",1/4],
        ["F#4",1/4],
        ["B4",1/2],
        ["B4",1/4],
        ["A#4",1/4],
        ["B4",1/4],
        ["F#4",1/4],
        ["G#4",1/4],
        ["B4",1/4],
        ["E5",1/4],
        ["D#5",1/4],
        ["E5",1/4],
        ["F#5",1/4],
        ["B4",1/2],
        ["C#5",1/2]
      ];


var starWars =     [        
["A", 500],
[null, 50],
["A", 500],
[null, 50],
["A", 500],
[null, 50],
["F", 350],
[null, 50],
["C5", 150],
[null, 50],
["A", 500],
[null, 50],
["F", 350],
[null, 50],
["C5", 150],
[null, 50],
["A", 650],
[null, 50],
[null, 500],
["E5", 500],
[null, 50],
["E5", 500],
[null, 50],
["E5", 500],
[null, 50],
["F5", 350],
[null, 50],
["C5", 150],
[null, 50],
["G4", 500],
[null, 50],
["F", 350],
[null, 50],
["C5", 150],
[null, 50],
["A", 650],
[null, 50],
[null, 500],

["A5", 500],
[null, 50],
["A", 300],
[null, 50],
["A", 150],
[null, 50],
["A5", 500],
[null, 50],
["G#5", 325],
[null, 50],
["G5", 175],
[null, 50],
["F#5", 125],
[null, 50],
["F5", 125],
[null, 50],
["F#5", 250],
[null, 50],
[null, 325],
["A4", 250],
[null, 50],
["D#5", 500],
[null, 50],
["D5", 325],
[null, 50],
["C#5", 175],
[null, 50],
["C5", 125],
[null, 50],
["B", 125],
[null, 50],
["C5", 250],
[null, 50],
[null, 350],

["F", 250],
[null, 50],
["G4", 500],
[null, 50],
["F", 350],
[null, 50],
["A", 125],
[null, 50],
["C5", 500],
[null, 50],
["A", 375],
[null, 50],
["C5", 125],
[null, 50],
["E5", 650],
[null, 50],
[null, 500],

["A5", 500],
[null, 50],
["A", 300],
[null, 50],
["A", 150],
[null, 50],
["A5", 500],
[null, 50],
["G#5", 325],
[null, 50],
["G5", 175],
[null, 50],
["F#5", 125],
[null, 50],
["F5", 125],
[null, 50],
["F#5", 250],
[null, 50],
[null, 325],
["A4", 250],
[null, 50],
["D#5", 500],
[null, 50],
["D5", 325],
[null, 50],
["C#5", 175],
[null, 50],
["C5", 125],
[null, 50],
["B", 125],
[null, 50],
["C5", 250],
[null, 50],
[null, 350],

["F", 250],
[null, 50],
["G4", 500],
[null, 50],
["F", 375],
[null, 50],
["C5", 125],
[null, 50],
["A", 500],
[null, 50],
["F", 375],
[null, 50],
["C5", 125],
[null, 50],
["A", 650],
[null, 50],
[null, 650]
];

var five = require("johnny-five"); // Magic 
var pins = require("./esp8266Pins");
var board = new five.Board();
var songs = require('j5-songs');


// Starndard Johnny-Five Blink Example
board.on("ready", function() {
    console.log("READY!");
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(5);
    let buttonStarWars = new five.Button(16);
    let buttonChadSong = new five.Button(14);
    let lightStarWars = new five.Led(4);
    let lightChadSong = new five.Led(0);

    // let bunchofsongs = [buttonStarWars,buttonChadSong]
    // Math.floor(Math.random() * 3); 

    
    buttonChadSong.on('press', ()=>{
        lightChadSong.on();
        piezo.play({
            song: chadSong,
            tempo: 120
        });
    });

    buttonStarWars.on("press", ()=>{
        lightStarWars.on();
        piezo.play({
            song: starWars,
            tempo: 100000
          });
    });
  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  });

//   Plays the same song with a string representation
//   piezo.play({
//     // song is composed by a string of notes
//     // a default beat is set, and the default octave is used
//     // any invalid note is read as "no note"
//     song: "",
//     beats: 1 / 4,
//     tempo: 100
//   });


// var theButton = new five.Button(5);
//     theButton.on("press",() => console.log('IT WAS PRESSED'));
// var pin = new five.Pin(5);
// pin.low();

// pin.read(function(error, value) {
// console.log(value);

// console.log("IT'S BLINKING!!!");
// });
        // led.fade({
            // easing: "outSine",
            // duration: 1000,
            // cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
            // keyFrames: [0, 250, 25, 150, 100, 125],
            // onstop: function() {
            //   console.log("Animation stopped");
            // }


// THIS WAS THE STARTER CODE GIVEN TO US ON THE PARTICLE-IO NPM DOCUMENTATION PAGE
// (https://www.npmjs.com/package/particle-io)
// THAT MAKES THE LED BLINK TO LET YOU KNOW EVERYTHING IS HOOKED UP

// var Particle = require("particle-io");
// var five = require("johnny-five");
// var board = new five.Board();
 
// board.on("ready", function() {
//   console.log("Device Ready..");
//   this.pinMode("D7", this.MODES.OUTPUT);
 
//   var byte = 0;
 
//   // This will "blink" the on board led
//   setInterval(function() {
//     this.digitalWrite("D7", (byte ^= 1));
//   }.bind(this), 500);
// });