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

function P5Wrapper(props) {
    const { sketch = defaultSketch } = props
    const wrapperEl = useRef()

    const addSketch = () => {
        const sketchInstance = new p5(sketch, wrapperEl.current)
    }

    const removeChildren = () => {
        //@ts-ignore
        while (wrapperEl.current.firstChild) {
            //@ts-ignore
            wrapperEl.current.removeChild(wrapperEl.current.firstChild)
        }
    }

    useEffect(() => {
        addSketch()
        return () => removeChildren()
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
