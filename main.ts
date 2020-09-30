let light2 = 0
basic.forever(function () {
    light2 = input.lightLevel()
    if (input.lightLevel() >= 0 && input.lightLevel() <= 85) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (input.lightLevel() >= 86 && input.lightLevel() <= 170) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (input.lightLevel() >= 171 && input.lightLevel() <= 255) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
