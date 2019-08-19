import * as React from "react"
import { P5Base } from "./P5_base"
import { transform, Color } from "framer"

const sketch = {
    setup: s => {
        s.createCanvas(600, 600)
    },
    draw: s => {
        s.noStroke()
        s.ellipse(600 / 2, 600 / 2, 100, 100)
    },
}

export const BaseSketch = props => <P5Base {...props} sketch={sketch} />

BaseSketch.defaultProps = {
    width: 600,
    height: 600,
}
