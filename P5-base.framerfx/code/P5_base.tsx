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

// export interface P5WrapperProps {
//     sketch: (p: p5) => void
// }
// export interface P5WrapperState {
//     sketch: (p: p5) => void
//     canvas: p5
//     wrapper: HTMLElement
// }

// export default class P5Wrapperr extends React.Component<
//     P5WrapperProps,
//     P5WrapperState
// > {
//     constructor(props: any) {
//         super(props)
//         this.state = {
//             sketch: props.sketch,
//             canvas: null,
//             wrapper: null,
//         }
//     }
//     3
//     wrapper: HTMLElement

//     componentDidMount() {
//         const canvas = new p5(this.state.sketch, this.wrapper)
//         if (canvas.myCustomRedrawAccordingToNewPropsHandler) {
//             canvas.myCustomRedrawAccordingToNewPropsHandler(this.props)
//         }
//         this.setState({
//             canvas: canvas,
//             wrapper: this.wrapper,
//         })
//     }

//     static getDerivedStateFromProps(
//         props: P5WrapperProps,
//         state: P5WrapperState
//     ) {
//         let canvas = state.canvas
//         if (state.sketch !== props.sketch) {
//             state.wrapper.removeChild(state.wrapper.childNodes[0])
//             canvas.remove()
//             canvas = new p5(props.sketch, state.wrapper)
//             return {
//                 ...state,
//                 sketch: props.sketch,
//                 canvas: canvas,
//             }
//         }
//         if (canvas && canvas.myCustomRedrawAccordingToNewPropsHandler) {
//             canvas.myCustomRedrawAccordingToNewPropsHandler(props)
//         }
//         return state
//     }

//     componentWillUnmount() {
//         this.state.canvas.remove()
//     }

//     render() {
//         return <div ref={wrapper => (this.wrapper = wrapper)}></div>
//     }
// }

// /*
//  ** Do I make it 'canvas' or do I make it p5/canvas
//  */

/*

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

*/

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

    useEffect(() => {
        addSketch()
        // const canvas = new p5(props.sketch)
    }, [sketch])

    return <div ref={wrapperEl} />
}

export function P5Base(props) {
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

addPropertyControls(P5Base, {
    backgroundColor: {
        type: ControlType.Color,
        title: "Background",
        defaultValue: "none",
    },
})

P5Base.defaultProps = {
    width: 600,
    height: 600,
    backgroundColor: "rgba(0,0,0,.025)",
}
