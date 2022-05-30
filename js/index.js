import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import Sound from "./sounds.js"
import {
    buttonPause,
    buttonPlay,
    buttonSet,
    buttonSoundOff,
    buttonSoundOn,
    buttonStop,
    minutesDisplay,
    secondsDisplay
} from "./config.js";

import  events  from "./events.js";

const sound = Sound()

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
})
const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
})

events({controls, timer, sound})


