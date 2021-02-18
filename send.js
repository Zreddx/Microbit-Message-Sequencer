// Settings
let message = "Sample" // The message to be sequenced
let delay = 4 // Multiple of 100ms - higher is slower
let channel = 0 // Radio channel for wireless mode
let mode = "LOCAL" // LOCAL = Sequences locally - WIRELESS = Sequences wirelessly via the radio function

// Main logic
input.onButtonPressed(Button.A, () => {
    if (mode == "LOCAL") {
        let messageLength = message.length
        for (let i = 0; i < messageLength; i++) {
            basic.showString(message.charAt(i))
            basic.pause(delay * 100)
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
            basic.pause(delay * 100)
            basic.clearScreen()
        }
    }
})
