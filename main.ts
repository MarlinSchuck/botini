input.onButtonPressed(Button.A, function () {
    if (Home != 0) {
        Home += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (Home != 6) {
        Home += 1
    } else {
        Home = 5
    }
})
let Home = 0
Home = 0
basic.showIcon(IconNames.House)
loops.everyInterval(1, function () {
    if (Home == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (Home == 2) {
        basic.showIcon(IconNames.TShirt)
    } else if (Home == 3) {
        basic.showIcon(IconNames.Duck)
    } else if (Home == 4) {
        basic.showIcon(IconNames.Ghost)
    } else if (Home == 5) {
        basic.showIcon(IconNames.Skull)
    }
})
