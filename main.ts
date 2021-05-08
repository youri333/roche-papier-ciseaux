let y = 0
radio.onReceivedNumber(function (receivedNumber) {
    y = randint(0, 2)
    if (y == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (y == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
    y = randint(0, 2)
    basic.pause(2000)
    if (receivedNumber == 2 && y == 0) {
        basic.showString("V")
    } else if (receivedNumber == 1 && y == 2) {
        basic.showString("V")
    } else if (receivedNumber == 0 && y == 1) {
        basic.showString("V")
    } else if (receivedNumber == y) {
        basic.showString("E")
    } else {
        basic.showString("D")
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(y)
    y = randint(0, 2)
    if (y == 0) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (y == 1) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
})
