let counter = 0;
 
var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem14101'; // fill in your serial port name here
var inData; // for incoming serial data
var outByte = 0; // for outgoing data

let slider;
let waterVal = 0;

let words = [
  "                                                                                                                                                              TOGGLE USING RIGHT ARROW KEY         USER INPUT MAY BE REQUIRED",
  "IF          DISAPPEARED OFF THE FACE OF THE EARTH, [HUMANS] WOULD ONLY HAVE FOUR YEARS LEFT TO LIVE. - ALBERT EINSTEIN.",
  "iiiHAS EMERGED AS A GLOBAL LEADER IN RENEWABLE ENERGY, INVESTING MORE IN THEM THAN IT IS IN FOSSIL FUELS.",
  "SINCE 1880, sea leHAVE RISEN APPROXIMATELY 9 INCHES. USE THE SLIDER TO VISUALIZE THE (APPROXIMATE) CHANGE SINCE THEN.",
  "THE flint river water THAT WAS TREATED IMPROPERLY CAUSED LEAD FROM AGING PIPES TO LEACH INTO THE WATER SUPPLY, LEADING TO EXTREMELY ELEVATED LEVELS OF THE HEAVY METAL NEUROTOXIN. THE COLOR ON THE VISUAL REPRESENTS THE APPROXIMATE HUE OF THE WATER AT PEAK CRISIS.",
  "CHECK THE airquality (AQI) OF ANY CITY IN THE WORLD.",
  "FOSSIL FUELS AS A SHARE OF FINAL ENERGY CONSUMPTION REMAINS STUBBORNLY AROUND 80% - ROUGHLY THE SAME PERCENTAGE AS AT THE BEGINNING OF THE 1990S.",
  "SINCE HUMANS STARTED CUTTING DOWN FORESTS, 46% OF THE TREES HAVE FALLEN, ACCORING TO A 2015 STUDY IN THE JOURNAL NATURE."
];

let keyWords = [ "THE HOUR GLASS", "THE BEE", "INDIA", "SEA LEVELS", "FLINT RIVER WATER", "AIR QUALITY INDEX", "80%", "46%" ];


var scaleRating = ['GOOD', 'MODERATE', 'UNHEALTHY FOR SENSITIVE GROUPS', 'UNHEALTHY', 'VERY UNHEALTHY', 'HAZARDOUS']

var airQuality;

var api = 'https://api.waqi.info/feed/';
var apiKey = '/?token=89f38a329e46ba8ddc6896d909b9db96e57d81a1';

var input;
var button;

var aqiVal = 0;
var aqiVal2 = 0;

let myFont;

function preload() {
 
  myFont = loadFont('fucxedcaps-webfont (2).otf');
  
}


function setup() {
  createCanvas(displayWidth, displayHeight); // make the canvas
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on();
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.open(portName); // open a serial port


  slider = createSlider(1880, 2019, 1880);
  slider.position(width / 2 - 300, height / 2 + 200);
  slider.style('width', '580px');
  slider.style('display', 'none');


  input = createInput('Brooklyn');
  input.position(width * 0.5 + 20, height * 0.5 + 150);
  button = createButton('submit');
  button.position(width * 0.5 - 85, height * 0.5 + 150);
  button.mousePressed(aqiAsk);
  input.id("myInput");

}

function mousePressed() {
  if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);

  }

}

function aqiAsk() {
  console.log("in aqiAsk");
  var url = api + input.value() + apiKey;
    console.log(url);

  loadJSON(url, gotData, errgotData);

}

function errgotData(response) {
  console.log(response);
  
}

function gotData(data) {
  console.log(data);
  console.log(data.data.aqi);
  airQuality = data;

}

function draw() {
  background(20, 170, 55);
  fill(0);
  textSize(60);
  textFont(myFont);

  checkCounter();


}

function keyPressed() {
  // dummy element
var dummyEl = document.getElementById('myButton');

// check for focus
var isFocused = (document.activeElement === dummyEl);
  console.log('focused? ' + isFocused);

  if (keyCode === 39) {
    counter++
  }
}

function checkCounter() {

  // HourGlass - Intro //
  
  push();
  textAlign(CENTER);
  if (counter % 9 == 1) {
    serial.write(0);
    text(words[0], 40, 215.7, 1400, 626); // canvas size 1438 x 939
    push();
    fill(255);
    text(keyWords[0], 290, 200, 900, 450);
    pop();
    print("A");
    
  }
  pop();

  // Bees //
  if (counter % 9 == 2) {
    serial.write(1);
    text(words[1], 300, 240, 900, 450);
    push();
    fill(247,238,106);
    text(keyWords[1], 375, 240, 900, 450);
    pop();
    print("B");
  }

  // India //
  if (counter % 9 == 3) {
    serial.write(2);
    text(words[2], 300, 240, 900, 450);
    push();
    fill(229,70,0);
    text(keyWords[2], 300, 240, 900, 450);
    pop();
    print("C");
  }

  // Sea Level //
  if (counter % 9 == 4) {
    // serial.print('D, mappedVal');
    text(words[3], 70, 100, 1350, 450);
    push();
    fill(56,96,170);
    text(keyWords[3], 400, 100, 1350, 450);
    pop();
    //print("D");

    slider.show();
    waterVal = slider.value();

    let mappedVal = int(map(waterVal, 1880, 2019, 20, 73));
    print(mappedVal);
    serial.write(mappedVal);
    text(waterVal, width / 2 - 70, height / 2 + 100);
  } else {

    slider.style('display', 'none');

  }

  // Flint //
  if (counter % 9 == 5) {
    serial.write(74);
    text(words[4], 130, 130, 1200, 950);
    push();
    fill(255,193,30);
    text(keyWords[4], 300, 130, 1350, 450);
    pop();
    print("E");

  }

  // Air Quality //

  if (counter % 9 == 6) {
    text(words[5], 230, 130, 1050, 950);
    push();
    fill(152,98,151);
    text(keyWords[5], 550, 130, 1200, 950);
    pop();
    
    // print("F");

    input.show();
    button.show();

    aqiVal = input.value();
    aqiVal2 = button.value();

    if (airQuality) {
      var index = airQuality.data.aqi;
      if (index < 50) {
        
        
        text(scaleRating[0], width / 2 - 70, height / 2);
        serial.write(75);
      } else if (index > 50 && index <= 100) {
        text(scaleRating[1], width / 2 - 130, height / 2);
        serial.write(76);

      } else if (index > 100 && index <= 150) {
        text(scaleRating[2], width /2 - 420, height / 2);
        serial.write(77);

      } else if (index > 150 && index <= 200) {
        text(scaleRating[3], width / 2 - 120, height / 2);
        serial.write(78);

      } else if (index > 200 && index <= 300) {
        text(scaleRating[4], width / 2 - 120, height / 2);
        serial.write(79);

      } else {
        text(scaleRating[5], width / 2 - 50, height / 2);
        serial.write(80);

      }
      push();
      textSize(34);
      fill(0);
      stroke(0);
      text(index, width / 2 - 10, height / 2 + 60);
      pop();
    }

  } else {

    button.style('display', 'none');
    input.style('display', 'none');

  }

  // Fossil Fuels //

  if (counter % 9 == 7) {
    serial.write(81);
    text(words[6], 300, 240, 900, 450);
    push();
    fill(117,208,241);
    text(keyWords[6], 300, 465, 900, 450);
    pop();

    
  }

  // Forests //

  if (counter % 9 == 8) {
    serial.write(82);
    text(words[7], 300, 240, 900, 450);
    push();
    fill(200, 0, 130);
    text(keyWords[7], 751, 315, 900, 450);
    pop();
    
  }
}

function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}

function serialEvent(dat) {
  print(dat);
}
