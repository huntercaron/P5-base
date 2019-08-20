import * as React from "react"
//@ts-ignore
import { P5Base } from "p5-framer-base"

const sketch = {
    setup: s => {
        s.createCanvas(500, 500)
        s.noStroke()
    },
    draw: s => {
        s.clear()
        const firstSize = s.sin((s.frameCount + 100) * 0.015) * 100
        const secondSize = s.sin((s.frameCount + 140) * 0.015) * 100

        s.fill("black")
        s.ellipse(s.width / 2, s.height / 2, firstSize, firstSize)
        s.fill("white")
        s.ellipse(s.width / 2, s.height / 2, secondSize, secondSize)
    },
}

export const BaseSketch = props => <P5Base {...props} sketch={sketch} />

BaseSketch.defaultProps = {
    width: 500,
    height: 500,
}
