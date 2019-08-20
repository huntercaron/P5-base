import * as React from "react"
import { useRef, useEffect } from "react"
import { Frame, addPropertyControls, ControlType, RenderTarget } from "framer"
import * as Overrides from "./App"
import * as p5 from "p5"

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

    const helpers = {
        height: props.height,
        width: props.width,
    }

    const composedSketch = s => {
        s.setup = () => {
            sketch.setup(s, helpers)
        }
        s.draw = () => {
            sketch.draw(s, helpers)
            if (RenderTarget.current() === RenderTarget.canvas) s.noLoop()
        }
    }

    const removeEvents = () => {
        //@ts-ignore
        for (let ev in sketchInstance.current._events) {
            //@ts-ignore
            window.removeEventListener(ev, sketchInstance.current._events[ev])
        }
    }

    const addSketch = () => {
        sketchInstance.current = new p5(composedSketch, wrapperEl.current)
        //@to-do look into events & related performance
        // removeEvents()
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

    return (
        <Frame {...props}>
            <div ref={wrapperEl} />
        </Frame>
    )
}

export const P5Base = React.memo(P5Wrapper)

P5Wrapper.defaultProps = {
    width: 600,
    height: 600,
    backgroundColor: "transparent",
}
