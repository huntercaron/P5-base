import * as React from "react"
import { Frame, addPropertyControls, ControlType, Color } from "framer"
import P5Wrapper from "react-p5-wrapper"
import * as Overrides from "./App"

/*
 ** Do I make it 'canvas' or do I make it p5/canvas
 */

const defaultSketch = s => {
    s.draw = () => {}
}

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

function P5(props) {
    const { sketch = defaultSketch } = props
    const downloadRef = React.useRef(null)
    const downloadFile = () => {
        downloadRef.current.click()
        console.log("mom")
    }

    console.log(Overrides)
    const [download, setDownload] = React.useState("hahahahahah.txt")

    return (
        <Frame {...props} onTap={downloadFile}>
            <a
                href={"data:text/plain;charset=utf-8," + download}
                download="test.txt"
                style={{ display: "none" }}
                ref={downloadRef}
            />
            <P5Wrapper sketch={sketch} {...props} />
        </Frame>
    )
}

P5.defaultProps = {
    width: 600,
    height: 600,
    backgroundColor: "rgba(0,0,0,.025)",
}

addPropertyControls(P5, {
    backgroundColor: {
        type: ControlType.Color,
        title: "Background",
        defaultValue: "none",
    },
})
