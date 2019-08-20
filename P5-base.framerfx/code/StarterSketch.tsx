import * as React from "react"
//@ts-ignore
import { P5Base } from "p5-framer-base"
import { transform, Color } from "framer"

const gridSize = 24
const padding = 40

const sketch = {
    setup: (s, { width, height }) => {
        s.createCanvas(width, height)
        s.noStroke()
        s.pixelDensity(2)
    },
    draw: (s, { width, height }) => {
        s.clear()

        const color1 = Color("rgb(45, 200, 48)")
        const color2 = Color("rgb(15, 255, 219)")
        const blend = Color.interpolate(color1, color2)

        for (let x = 0; x < gridSize; x++) {
            for (let y = 0; y < gridSize; y++) {
                const u = gridSize <= 1 ? 0.5 : x / (gridSize - 1)
                const v = gridSize <= 1 ? 0.5 : y / (gridSize - 1)

                s.fill(Color.toRgbString(blend(v)))

                const tx = transform(u, [0, 1], [padding, width - padding])
                const ty = transform(v, [0, 1], [padding, height - padding])

                s.push()
                s.translate(tx, ty)
                s.rotate(
                    ((u - 0.5) * (v - 0.5) + 0.1) *
                        s.sin((s.frameCount + 400) * 0.03) *
                        10
                )
                s.rect(0, 0, 6, 14)
                s.pop()
            }
        }
    },
}

export const StarterSketch = props => <P5Base {...props} sketch={sketch} />

StarterSketch.defaultProps = {
    width: 500,
    height: 500,
}
