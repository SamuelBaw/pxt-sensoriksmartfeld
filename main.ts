for (let index = 0; index < 3; index++) {
    // serial.writeValue("Poti", Math.round(sensoren.potentiometerGibProzent(AnalogPin.P2, AnalogPin.P16)))
    basic.pause(500)
    serial.writeLine("" + (0))
}
basic.forever(function () {
    // serial.writeValue("Poti", Math.round(sensoren.potentiometerGibProzent(AnalogPin.P2, AnalogPin.P16)))
    basic.pause(200)
    serial.writeValue("tVOC", sensoren.measReadtVOC())
    // serial.writeValue("Poti", Math.round(sensoren.potentiometerGibProzent(AnalogPin.P2, AnalogPin.P16)))
    basic.pause(200)
    serial.writeValue("CO2eq", sensoren.measReadCO2eq())
})
