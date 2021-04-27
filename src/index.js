import { createStore } from "redux"

const addButton = document.getElementById("add")
const minusButton = document.getElementById("minus")
const counter = document.querySelector("span")

counter.innerText = 0

const ADD = "ADD"
const MINUS = "MINUS"

// reducer
const countModifier = (state = 0, action) => {
  console.log("current state: ", state, action)
  switch (action.type) {
    case ADD:
      return state + 1
    case MINUS:
      return state - 1
    default:
      return state
  }
}

// store
const countStore = createStore(countModifier)

// send message to the store
const handleAdd = () => countStore.dispatch({type: ADD})
const handleMinus = () => countStore.dispatch({type: MINUS})
const onButtonClick = () => counter.innerText = countStore.getState()

// add listener to buttons
addButton.addEventListener("click", handleAdd)
minusButton.addEventListener("click", handleMinus)

// subscribe any change of state on store
countStore.subscribe(onButtonClick)

