// Settings:
let channel = 0  //Channel can be anything above 0, make sure to set channel on the sending microbit to the same value

//Main
radio.setGroup(channel)
radio.onDataPacketReceived((packet) => {
    basic.clearScreen()
    basic.showString(packet.receivedString)
})
