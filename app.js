const buttons = document.querySelectorAll(".key");
document.body.addEventListener("keydown", playSound);
buttons.forEach((keys) => keys.addEventListener("click", playSound));
buttons.forEach((keys) =>
    keys.addEventListener("transitionend", removeHiglight)
);

function playSound(event) {
    let code;
    if (!event.code) {
        const keyVal = event.target.innerText.slice(0, 1);
        code = "Key" + keyVal;
    } else code = event.code;

    let soundTrack = document.querySelector(`audio[data-key="${code}"]`);
    let key = document.querySelector(`.key[data-key="${code}"]`);

    if (!soundTrack) return;
    soundTrack.currentTime = 0;
    soundTrack.play();
    key.classList.add("playing");
}

function removeHiglight(events) {
    if (events.propertyName == "transform")
        events.target.classList.remove("playing");
}
