// serial.writeValue("UV", sensoren.getHalfWordUV())
// serial.writeValue("Poti", Math.round(sensoren.potentiometerGibProzent(AnalogPin.P2, AnalogPin.P16)))
// basic.pause(100)
// serial.writeValue("XXX", sensoren.getHalfWordXXX())
// serial.writeValue("Visible", sensoren.getHalfWord_Visible())
// basic.pause(250)
// serial.writeValue("Poti", Math.round(sensoren.potentiometerGibProzent(AnalogPin.P2, AnalogPin.P16)))
serial.writeLine(sensoren.initSunlight())
// basic.pause(250)
// serial.writeLine(sensoren.initSunlight())
basic.forever(function () {
    // basic.pause(250)
    // serial.writeValue("XXX", sensoren.getHalfWordXXX())
    // basic.pause(250)
    // serial.writeValue("UV", sensoren.getHalfWordUV())
    basic.pause(250)
    serial.writeValue("IR", sensoren.getHalfWordXXX())
    serial.writeValue("Visible", sensoren.getHalfWord_Visible())
    serial.writeValue("UV", sensoren.getHalfWordUV())
})
