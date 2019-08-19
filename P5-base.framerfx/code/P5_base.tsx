import * as React from "react"
import { useRef, useEffect } from "react"
import {
    Frame,
    addPropertyControls,
    ControlType,
    Color,
    RenderTarget,
} from "framer"
import * as Overrides from "./App"
import p5 = require("p5")

const defaultSketch = {
    setup: s => {
        s.createCanvas(600, 600)
    },
    draw: s => {
        s.noStroke()
        s.ellipse(600 / 2, 600 / 2, 100, 100)
    },
}

function P5Wrapper(props) {
    const { sketch = defaultSketch } = props
    const wrapperEl = useRef()
    const sketchInstance = useRef()

    const addSketch = () => {
        sketchInstance.current = new p5(sketch, wrapperEl.current)
    }

    const removeSketch = () => {
        //@ts-ignore
        if (sketchInstance.current) sketchInstance.current.remove()
    }

    useEffect(() => {
        removeSketch()
        addSketch()
        return () => removeSketch()
    })

    return <div ref={wrapperEl} />
}

function P5BaseCore(props) {
    const { sketch = defaultSketch } = props
    const composedSketch = s => {
        s.setup = () => {
            sketch.setup(s)
        }
        s.draw = () => {
            sketch.draw(s)
            if (RenderTarget.current() === RenderTarget.canvas) s.noLoop()
        }
    }
    return (
        <Frame {...props}>
            <P5Wrapper sketch={composedSketch} />
        </Frame>
    )
}

export const P5Base = React.memo(P5BaseCore)

P5BaseCore.defaultProps = {
    width: 600,
    height: 600,
    backgroundColor: "transparent",
}
