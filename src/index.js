import { createStore } from "redux"

const addButton = document.getElementById("add")
const minusButton = document.getElementById("minus")
const counter = document.querySelector("span")

// reducer
const countModifier = (state = 0, action) => {
  console.log("current state: ", state, action)
  if (action.type === "ADD") {
    return state + 1
  }
  if (action.type === 'MINUS') {
    return state - 1
  }
  return state
}

// store
const countStore = createStore(countModifier)

// send message to the store
const handleAdd = () => countStore.dispatch({type: "ADD"})
const handleMinus = () => countStore.dispatch({type: "MINUS"})
const onButtonClick = () => counter.innerText = countStore.getState()

addButton.addEventListener("click", handleAdd)
minusButton.addEventListener("click", handleMinus)
countStore.subscribe(onButtonClick)

