#include <Adafruit_NeoPixel.h>

#define PIN 6 // the pin that the LED is attached to
#define n 141

bool playingHourglass = false;
int index = 0;

int incomingByte; // a variable to read incoming serial data into

Adafruit_NeoPixel strip(n, 6, NEO_GRB + NEO_KHZ800);


void setup() {
  Serial.begin(9600);  // initialize serial communication
  strip.begin(); // initialize pixels
  strip.clear();  // Initialize all pixels to 'off'
  // strip.show();  // Initialize all pixels to 'off'
  pinMode(6, OUTPUT);  // initialize the LED pin as an output
}

void loop() {



  if (Serial.available() > 0) {   // see if there's incoming serial data
    incomingByte = Serial.read(); // read it

    // Serial.write(incomingByte);

    // Intro - Hour Glass //

    if (incomingByte == 0) {

      playingHourglass = true;
    }



    // Bees //

    else if (incomingByte == 1) {    // if it's a capital H (ASCII 72),

      playingHourglass = false;

      strip.clear();

      for (int i = 0; i < 5; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }


      for (int i = 10; i < 15; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 20; i < 25; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }


      for (int i = 30; i < 35; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 40; i < 45; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 50; i < 55; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 60; i < 65; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 75; i < 80; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 85; i < 90; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 95; i < 100; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }


      for (int i = 105; i < 110; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 115; i < 120; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 125; i < 130; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }



      for (int i = 135; i < 140; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // set pixel colors

      }

    }

    // India //

    else if (incomingByte == 2) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 23; i ++) {
        strip.setPixelColor(i, strip.Color(75, 30, 0)); // turn off the LED

      }

      for (int i = 23; i < 46; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 75)); // turn off the LED

      }

      for (int i = 46; i < 70; i ++) {
        strip.setPixelColor(i, strip.Color(0, 75, 0)); // turn off the LED

      }

      for (int i = 70; i < 94; i ++) {
        strip.setPixelColor(i, strip.Color(0, 75, 0)); // turn off the LED

      }

      for (int i = 94; i < 117; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 75)); // turn off the LED

      }

      for (int i = 117; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(75, 30, 0)); // turn off the LED

      }
    }

    // Sea Level //

    else if (incomingByte >= 3 && incomingByte <= 73) {   // if it's an L (ASCII 76)

      strip.clear();

      int sliderVal = incomingByte - 3;

      for (int i = 70 - sliderVal; i < 70 + sliderVal; i ++) {
        strip.setPixelColor(i, strip.Color(0, 0, 75)); // turn off the LED

      }

    }

    // Flint //

    else if (incomingByte == 74) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(75, 30, 10)); // turn off the LED

      }
    }

    // Air Quality

    else if (incomingByte == 75) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(0, 75, 0)); // turn off the LED

      }
    }

    else if (incomingByte == 76) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(75, 75, 0)); // turn off the LED

      }
    }

    else if (incomingByte == 77) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(75, 55, 0)); // turn off the LED

      }
    }

    else if (incomingByte == 78) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(70, 0, 0)); // turn off the LED

      }
    }


    else if (incomingByte == 79) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(90, 0, 0)); // turn off the LED

      }
    }


    else if (incomingByte == 80) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 0; i < 141; i ++) {
        strip.setPixelColor(i, strip.Color(100, 0, 0)); // turn off the LED

      }
    }

    // Fossil Fuels //

    else if (incomingByte == 81) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 20; i < 121; i ++) {
        strip.setPixelColor(i, strip.Color(20, 20, 20)); // turn off the LED

      }

    }

    // Forest //

    else if (incomingByte == 82) {    // if it's an L (ASCII 76)

      strip.clear();

      for (int i = 43; i < 98; i ++) {
        strip.setPixelColor(i, strip.Color(20, 20, 20)); // turn off the LED

      }



    }



   
  } // end serial.available()

  int currentSecond = millis() / 1000;
  
  if (playingHourglass) {
    // if currentSecond != previousSecond
      // you are in a new second
      
    

    // update index every second 
    // if a second has elapsed
      // index = index + 1
      // index = index % 141 (starts the index over)
     

    for (int i = 0; i < 141; i ++) {
      // set all pixels white
    }

    for (int i=index; i < 3; i++) {
      // set 3 pixels blue starting at index
    }
  }

 // warming stripes
  strip.show();
  //  strip.clear();

}
