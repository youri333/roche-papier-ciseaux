y = 0

def on_gesture_shake():
    global y
    radio.send_string("1")
    y = randint(0, 2)
    if y == 0:
        basic.show_leds("""
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            """)
    elif y == 1:
        basic.show_leds("""
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            """)
    else:
        basic.show_leds("""
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
