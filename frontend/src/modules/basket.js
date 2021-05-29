import produce from 'immer'

const SET_MEANS = 'basket/MEANS'
const PLUS = 'basket/PLUS'
const MINUS = 'basket/MINUS'
const GET_INIT_PRODUCT = 'basket/GET_INIT_PRODUCT'

export const setMeans = () => ({
  type: SET_MEANS,
})

export const plus = ({ name }) => ({
  type: PLUS,
  payload: { name },
})

export const minus = ({ name }) => ({
  type: MINUS,
  payload: { name },
})

export const getInitProduct = ({ name, quantity, price }) => ({
  type: GET_INIT_PRODUCT,
  payload: { name, quantity, price },
})

const initialState = {
  means: true,
  product: [],
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_MEANS:
      return {
        ...state,
        means: !state.means,
      }
    case PLUS:
      return produce(state, draft => {
        const index = draft.product.findIndex(product => product.name === action.payload.name)
        draft.product[index].quantity++
      })

    case MINUS:
      return produce(state, draft => {
        const index = draft.product.findIndex(product => product.name === action.payload.name)
        draft.product[index].quantity--
      })

    case GET_INIT_PRODUCT:
      return produce(state, draft => {
        draft.product.push({
          name: action.payload.name,
          quantity: action.payload.quantity,
          price: action.payload.price,
        })
      })

    default:
      return state
  }
}
