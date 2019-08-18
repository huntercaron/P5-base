import * as React from "react"
import { P5Base } from "./P5_base"

const sketch = {
    setup: s => {
        s.createCanvas(600, 600)
        s.fill(255)
        s.rect(0, 0, 10, 10)
    },
    draw: s => {
        s.fill(255)
        s.rect(0, 0, 10, 10)
        s.rect(0, 0, 100, 100)
        s.rect(100, 100, 100, 100)
        s.ellipse(s.mouseX, s.mouseY, 80, 80)
    },
}

export const P5Sketch = props => <P5Base {...props} sketch={sketch} />

P5Sketch.defaultProps = {
    width: 600,
    height: 600,
}