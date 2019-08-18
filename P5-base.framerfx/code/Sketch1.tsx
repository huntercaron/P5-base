import * as React from "react"
import { P5Base } from "./P5_base"

const sketch = s => {
    s.setup = () => {
        console.log(s)
        s.createCanvas(600, 600)
        s.fill(255)
        s.rect(0, 0, 10, 10)
    }
    s.draw = () => {
        s.fill(255)
        s.rect(0, 0, 10, 10)
        s.rect(0, 0, 100, 100)
        s.rect(100, 100, 100, 100)
        s.ellipse(s.mouseX, s.mouseY, 80, 80)
    }
}

// const sketch = {
//     setup(s) {
//         s.createCanvas(600, 600)
//         s.fill(255)
//         s.rect(0, 0, 10, 10)
//     },
//     draw(s) {
//         s.fill(255)
//         s.rect(0, 0, 10, 10)
//         s.rect(0, 0, 100, 100)
//         s.rect(100, 100, 100, 100)
//         s.ellipse(s.mouseX, s.mouseY, 80, 80)
//     },
// }

export const SketchWrapper = () => <P5Base sketch={sketch} />

SketchWrapper.defaultProps = {
    width: 600,
    height: 600,
}
