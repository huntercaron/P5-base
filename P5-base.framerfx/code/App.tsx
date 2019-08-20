import { Override } from "framer"
import { P5Base } from "p5-framer-base"

// export function Sketch() {
//     return P5Base(s => {
//         s.setup = () => {
//             console.log(s)
//             s.createCanvas(600, 600)
//             s.fill(255)
//             s.rect(0, 0, 10, 10)
//         }
//         s.draw = () => {
//             s.fill(255)
//             s.rect(0, 0, 10, 10)
//             s.ellipse(s.mouseX, s.mouseY, 80, 80)
//         }
//     })
// }

export function Scale(): Override {
    return {
        whileTap: {
            scale: 0.6,
        },
        onTap() {
            console.log(P5Base)
        },
    }
}

// export const Sketch1: Override = () => ({
//     sketch(s) {
//         s.setup = () => {
//             console.log(s)
//             s.createCanvas(600, 600)
//             s.fill(255)
//             s.rect(0, 0, 10, 10)
//         }
//         s.draw = () => {
//             s.fill(255)
//             s.rect(0, 0, 10, 10)
//             s.ellipse(s.mouseX, s.mouseY, 80, 80)
//         }
//     },
//     whileTap: {
//         rotate: 360,
//     },
// })
