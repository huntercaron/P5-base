import * as React from "react"
import { P5Base } from "./P5_base"
import { transform, Color } from "framer"

const canvasSize = 1000
const gridSize = 40

const sketch = {
    setup: s => {
        s.createCanvas(canvasSize, canvasSize)

        s.noStroke()
        s.pixelDensity(2)
    },
    draw: s => {
        s.fill(0)
        s.rect(0, 0, canvasSize, canvasSize)
        s.fill(25, 182, 84)

        const color1 = Color("rgb(45, 200, 48)")
        const color2 = Color("rgb(15, 255, 219)")

        const blend = Color.interpolate(color1, color2)

        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                const u = gridSize <= 1 ? 0.5 : x / (gridSize - 1)
                const v = gridSize <= 1 ? 0.5 : y / (gridSize - 1)

                s.fill(Color.toRgbString(blend(v)))

                const tx = u * canvasSize
                const ty = v * canvasSize

                s.push()
                s.translate(tx, ty)
                s.rotate(
                    ((u - 0.5) * (v - 0.5) + 0.1) *
                        s.sin((s.frameCount + 400) * 0.03) *
                        10
                )
                s.rect(0, 0, 8, 14)
                s.pop()
            }
        }
    },
}

export const StarterSketch = props => <P5Base {...props} sketch={sketch} />

StarterSketch.defaultProps = {
    width: canvasSize,
    height: canvasSize,
}
