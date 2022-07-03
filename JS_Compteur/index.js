
let countEl = document.getElementById("count-el")
let tabSave = document.getElementById("saveP")
let avgTab = document.getElementById("avg-btn")

let count = 0
let saveTab = []

function increment10() {
    count += 10
    countEl.innerText = count
    if(count > 20){
        count = 0
        countEl.innerText = count
    }
}
function increment1() {
    count += 1
    countEl.innerText = count
    if(count > 20){
        count = 0
        countEl.innerText = count
    }
}
function increment() {
    count += 0.5
    countEl.innerText = count
    if(count > 20){
        count = 0
        countEl.innerText = count
    }
}

function save() {
    saveTab.push(count)
    tabSave.innerText = saveTab
    count = 0
    countEl.innerText = count
    avg1 = saveTab.reduce((r, c) => r + c, 0) / saveTab.length;
    avg2 = avg1.toFixed(2)
    avgTab.innerText = avg2
}

function avg(){
    avg1 = saveTab.reduce((r, c) => r + c, 0) / saveTab.length;
    avg2 = avg1.toFixed(2)
    avgTab.innerText = avg2
}
function correct(){
    saveTab.pop()
    tabSave.innerText = saveTab
    avg1 = saveTab.reduce((r, c) => r + c, 0) / saveTab.length;
    avg2 = avg1.toFixed(2)
    avgTab.innerText = avg2
}



