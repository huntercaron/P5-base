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
//
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
