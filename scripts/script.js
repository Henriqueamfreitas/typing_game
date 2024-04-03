const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const timeList = document.querySelector(".timeList");
const inputName = document.querySelector(".inputName");
let arr = []

let timer = [0, 0, 0, 0]

inputName.addEventListener("input", () => {
    testArea.readOnly = true

    if (inputName.value !== "") {
        testArea.readOnly = false
    }
})

const runTimer = () => {
    timer[3] += 1

    timer[0] = Math.floor(timer[3] / 100 / 60)

    timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60)

    timer[2] = Math.floor(timer[3] - 100 * timer[1] - 6000 * timer[0])

    if (timer[0] >= 0 && timer[0] <= 9) {
        timer[0] = `0${timer[0]}`
    }

    if (timer[1] >= 0 && timer[1] <= 9) {
        timer[1] = `0${timer[1]}`
    }

    if (timer[2] >= 0 && timer[2] <= 9) {
        timer[2] = 0
        timer[2] = `0${timer[2]}`
    }
    let currentTime = `${timer[0]}:${timer[1]}:${timer[2]}`
    theTimer.innerHTML = currentTime
}


let interval

testArea.addEventListener("keyup", () => {
    if (!interval && testArea.value.length > 0) {
        interval = setInterval(runTimer, 10)
    }

    let partialText = originText.substring(0, testArea.value.length)

    let obj
    console.log(testArea.value)
    console.log(originText)
    if (testArea.value === originText) {
        testWrapper.style.borderColor = "#429890"
        obj = {
            name: inputName.value,
            timer: theTimer.innerHTML
        }
        clearInterval(interval)
        arr.push(obj)
        timeList.innerHTML = ""
        for (let i = 0; i < arr.length; i += 1) {
            const div = document.createElement("div")
            const h2 = document.createElement("h2")
            const p = document.createElement("p")
            h2.innerHTML = arr[i].name
            p.innerHTML = arr[i].timer
            div.append(h2, p)
            timeList.append(div)
        }
    }
    else if (testArea.value === partialText) {
        testWrapper.style.borderColor = "#65CCF3"
    } else {
        testWrapper.style.borderColor = "#E95D0F"
    }
})

resetButton.addEventListener("click", () => {
    testArea.value = ""
    clearInterval(interval)
    interval = null
    timer[0] = 0
    timer[1] = 0
    timer[2] = 0
    timer[3] = 0
    runTimer()
    testWrapper.style.borderColor = "grey"
})


