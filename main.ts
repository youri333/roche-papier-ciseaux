let y = 0
radio.onReceivedNumber(function (receivedNumber) {
    radio.sendNumber(y)
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
