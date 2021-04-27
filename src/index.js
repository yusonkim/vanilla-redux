const addButton = document.getElementById("add")
const minusButton = document.getElementById("minus")
const counter = document.querySelector("span")

let count = 0

counter.innerText = count

const updateText = () => {
  counter.innerText = count
}

const handleAdd = () => {
  count++
  updateText()
}

const handleMinus = () => {
  count--
  updateText()
}

addButton.addEventListener("click", handleAdd)
minusButton.addEventListener("click", handleMinus)