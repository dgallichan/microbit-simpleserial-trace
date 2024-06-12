basic.showIcon(IconNames.Heart)
let comment = "This demonstrates the ability of Makecode to nicely show traces for acceleration and magnetometer readings."
comment = "However, it requires sending the variables one at a time, which limits the overall data rate - and isn't what we "
comment = "are likely to want to use in a more general case - from any microcontroller."
basic.forever(function () {
    comment = "When variables are grouped with the '.', they are plotted on the same axes"
    serial.writeValue("a.x", input.acceleration(Dimension.X))
    serial.writeValue("a.y", input.acceleration(Dimension.Y))
    serial.writeValue("a.z", input.acceleration(Dimension.Z))
    serial.writeValue("m.x", input.magneticForce(Dimension.X))
    serial.writeValue("m.y", input.magneticForce(Dimension.Y))
    serial.writeValue("m.z", input.magneticForce(Dimension.Z))
})
