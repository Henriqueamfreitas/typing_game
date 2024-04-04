const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originTextTag = document.querySelector("#origin-text p");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const timeList = document.querySelector(".timeList");
const inputName = document.querySelector(".inputName");
const reloadData = document.querySelector(".reloadData");
const cleanData = document.querySelector(".cleanData");

let arr = []

let timer = [0, 0, 0, 0]

cleanData.addEventListener("click", () => {
    localStorage.removeItem("@data");
    timeList.innerHTML = ""
    testArea.value = ""
    inputName.value = ""
    clearInterval(interval)
    interval = null
    timer[0] = 0
    timer[1] = 0
    timer[2] = 0
    timer[3] = 0
    runTimer()
    testWrapper.style.borderColor = "grey"
    testArea.readOnly = true
    inputName.readOnly = false
})

reloadData.addEventListener("click", () => {
    const storedData = JSON.parse(localStorage.getItem("@data"));
    arr = []
    arr = storedData
    if (storedData) {
        timeList.innerHTML = ""
        originTextTag.innerHTML = ""
        originTextTag.innerHTML = storedData[0].phrase
        for (let i = 0; i < storedData.length; i += 1) {
            const li = document.createElement("li")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            const phrase = document.createElement("p")
            h3.innerHTML = `${storedData[i].name} - ${storedData[i].timer}`
            phrase.innerHTML = `Frase: ${storedData[i].phrase}`

            li.append(h3, p, phrase)
            timeList.append(li)
        }
    }
})

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
testArea.addEventListener("paste", function (event) {
    event.preventDefault();
    alert("Não é permitido o uso do ctrl v")
});

if(arr.length===0){
    const emptyMessage = document.createElement("span")
    emptyMessage.innerHTML="Não há nenhum histórico salvo ainda"
    timeList.append(emptyMessage)
}

testArea.addEventListener("keyup", () => {
    if (!interval && testArea.value.length > 0) {
        interval = setInterval(runTimer, 10)
    }

    let partialText = originTextTag.innerHTML.substring(0, testArea.value.length)

    let obj
    if (testArea.value === originTextTag.innerHTML) {
        testWrapper.style.borderColor = "#429890"
        obj = {
            name: inputName.value,
            timer: theTimer.innerHTML,
            phrase: originTextTag.innerHTML,
        }
        clearInterval(interval)

        arr.push(obj)

        arr.sort((a, b) => a.timer.localeCompare(b.timer))
        localStorage.setItem("@data", JSON.stringify(arr))
        timeList.innerHTML = ""
        for (let i = 0; i < arr.length; i += 1) {
            const li = document.createElement("li")
            const h3 = document.createElement("h3")
            const p = document.createElement("p")
            const phrase = document.createElement("p")
            h3.innerHTML = `${arr[i].name} - ${arr[i].timer}`
            phrase.innerHTML = `Frase: ${arr[i].phrase}`
            li.append(h3, p, phrase)
            timeList.append(li)
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
    inputName.value = ""
    clearInterval(interval)
    interval = null
    timer[0] = 0
    timer[1] = 0
    timer[2] = 0
    timer[3] = 0
    runTimer()
    testWrapper.style.borderColor = "grey"
    testArea.readOnly = true
    inputName.readOnly = false
})


