input.onButtonPressed(Button.A, function () {
    music.playTone(659, music.beat(BeatFraction.Double))
    basic.showString("START")
    basic.pause(COUNT * 60000)
    music.playTone(659, music.beat(BeatFraction.Double))
    music.playTone(659, music.beat(BeatFraction.Double))
})
input.onButtonPressed(Button.AB, function () {
    COUNT = 0
    basic.showString("RESET")
})
input.onButtonPressed(Button.B, function () {
    COUNT += 1
    music.playTone(392, music.beat(BeatFraction.Whole))
    basic.showNumber(COUNT)
    basic.showString("MIN")
})
let COUNT = 0
basic.showString("Hello!")
COUNT = 0
for (let index = 0; index < 2; index++) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
}
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
