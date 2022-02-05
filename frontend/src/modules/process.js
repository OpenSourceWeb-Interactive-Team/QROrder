const SET_ORDER_STATE = 'process/ORDER_STATE'

export const setProcess = (completed) => ({
  type: SET_ORDER_STATE,
  payload: completed === 1 ? '#66FF66' : !completed ? '#0ac9ff' : '#F88EF4',
})

const initialState = {
  color: '#0ac9ff',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER_STATE:
      return {
        ...state,
        color: action.payload,
      }
    default:
      return state
  }
}