# Microbit-Message-Sequencer
Show a message on microbit by showing one character at a time (doesn't scroll)

# How to install & configure
## Configuration:
  Use the //settings tab on the top of each file to configure, make sure if using wireless to set the channel on both scripts to the same value.
  
  Modes explained. In settings of the send.js file is a 'mode = "LOCAL"' or "MODE = 'WIRELESS"' line. If it's set to wireless then radio functions are activated (send the message sequence to another microbit), if its set to local the message sequence will be shown on that microbit.
  
  Configure your message: change the 'message = "sample"' to whatever you want.


## Installation:
  Copy the code of the send.js file to makecode.microbit.org and configure it to your liking (if using wireless you'll have to do this for the    recive file aswell and make sure the send.js file has mode = set to "WIRELESS" and is on the same channel as configured in the recive file).  Now connect your microbit to your computer and download the file, then drag the file into the microbit folder and wait for it to finish. Then disconnect the microbit. Do this for both files if using wireless.
