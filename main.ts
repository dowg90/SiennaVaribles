input.onButtonPressed(Button.A, function () {
    Jimmy_John += 1
    basic.showNumber(Jimmy_John)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    tie += 1
    basic.showNumber(tie)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    subway += 1
    basic.showNumber(subway)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Jimmy_John)
    basic.showNumber(subway)
    basic.showNumber(tie)
    basic.clearScreen()
})
let subway = 0
let Jimmy_John = 0
let tie = 0
tie = 0
Jimmy_John = 0
subway = 0
