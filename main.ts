let COUNT = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    }
})
input.onGesture(Gesture.EightG, function () {
    for (let index = 0; index < 4; index++) {
        music.playTone(988, music.beat(BeatFraction.Breve))
    }
    basic.showString("Fast!")
})
input.onButtonPressed(Button.AB, function () {
    COUNT = 0
    basic.showString("RESET")
})
