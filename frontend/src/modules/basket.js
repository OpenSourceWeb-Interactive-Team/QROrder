const SET_MEANS = 'basket/MEANS'
const PLUS = 'basket/PLUS'
const MINUS = 'basket/MINUS'
const GET_INIT_PRICE = 'basket/GET_INIT_PRICE'

export const setMeans = () => ({
  type: SET_MEANS,
})

export const plus = ({ price }) => ({
  type: PLUS,
  payload: { price },
})

export const minus = ({ price }) => ({
  type: MINUS,
  payload: { price },
})

export const getInitPrice = ({ price }) => ({
  type: GET_INIT_PRICE,
  payload: { price },
})

const initialState = {
  means: true,
  price: 0,
  
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MEANS:
      return {
        ...state,
        means: !state.means,
      }
    case PLUS:
      return {
        ...state,
        price: state.price + action.payload.price,
      }

    case MINUS:
      return {
        ...state,
        price: state.price - action.payload.price,
      }

    case GET_INIT_PRICE:
      return {
        ...state,
        price: state.price + action.payload.price,
      }

    default:
      return state
  }
}
