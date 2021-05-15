import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    },
  },
})

const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return {
      ...state,
      counter: state.counter + 1,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'increase') {
    return {
      ...state,
      counter: state.counter + action.payload,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'decrement') {
    return {
      ...state,
      counter: state.counter - 1,
      showCounter: state.showCounter,
    }
  }

  if (action.type === 'toggle') {
    return { ...state, counter: state.counter, showCounter: !state.showCounter }
  }

  return state
}

const store = createStore(counterReducer)

export default store
