let y = 0
input.onButtonPressed(Button.A, function () {
    y = 0
})
input.onButtonPressed(Button.B, function () {
    y = 1
})
input.onGesture(Gesture.Shake, function () {
    if (true) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (y) {
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
