input.onButtonPressed(Button.A, function () {
    health += 10
    chubbyness += -10
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(health)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        # # # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . # .
        . . # # #
        . # . # .
        `)
})
let health = 0
health = 50
let sleep = 100
let chubbyness = 3
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . # # # .
        # . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . # # # .
        . . # . #
        . . . . .
        `)
    if (health == 0) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
        basic.pause(2000)
        basic.showString("game over")
    }
})
basic.forever(function () {
    health += -10
    sleep += -10
    chubbyness += 5
    basic.pause(1000)
})
