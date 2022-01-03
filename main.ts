let MapValue = 0
let item = 0
pins.servoWritePin(AnalogPin.P0, 90)
pins.servoWritePin(AnalogPin.P1, 90)
basic.forever(function () {
    item = input.acceleration(Dimension.X)
    MapValue = pins.map(
    item,
    -1025,
    1025,
    165,
    15
    )
    pins.servoWritePin(AnalogPin.P0, MapValue)
})
basic.forever(function () {
    item = input.acceleration(Dimension.Y)
    MapValue = pins.map(
    item,
    -1025,
    1025,
    5,
    190
    )
    pins.servoWritePin(AnalogPin.P1, MapValue)
})
