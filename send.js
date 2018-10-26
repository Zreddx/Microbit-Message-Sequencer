// Settings
let message = "Sample" //Type your message here
let speed = 400 // Higher = slower
let channel = 0 // Radio channel, set to 0 for default (only works when mode is set to WIRELESS)
let mode = "LOCAL" // LOCAL = Displays on this microbit | WIRELESS = Diplays on other microbits using radio function.

// Main
input.onButtonPressed(Button.A, () => {
    if (mode == "LOCAL") {
        let messageLength = message.length
        for (let i = 0; i < messageLength; i++) {
            basic.showString(message.charAt(i))
            basic.pause(speed)
            basic.clearScreen()
            basic.pause(50)
        }
    }

    if (mode == "WIRELESS") {
        radio.setGroup(channel)
        let messageLength = message.length
        for (let i = 0; i < messageLength; i++) {
            basic.clearScreen()
            radio.sendString(message.charAt(i))
            basic.pause(speed)
            basic.clearScreen()
        }
    }
})

////////////////////////////////
// Made by IAO Software       //
// IAO.IS                     //
// Version: 2.0.1             //
////////////////////////////////
