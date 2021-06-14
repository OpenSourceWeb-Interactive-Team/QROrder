import produce from 'immer'

const SET_MEANS = 'basket/MEANS'
const SET_STORE = 'basket/STORE'
const PLUS = 'basket/PLUS'
const MINUS = 'basket/MINUS'
const GET_INIT_PRODUCT = 'basket/GET_INIT_PRODUCT'
const DISCOUNT = 'basket/DISCOUNT'

export const setMeans = () => ({
  type: SET_MEANS,
})

export const setStore = store => ({
  type: SET_STORE,
  payload: store,
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

export const discountCash = ({ type, amount }) => ({
  type: DISCOUNT,
  payload: { type, amount },
})

const initialState = {
  store: {},
  means: true,
  product: [],
  discount: { type: 'money', amount: 0 },
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_STORE:
      return {
        ...state,
        store: action.payload,
      }
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
    case DISCOUNT:
      return {
        ...state,
        discount: {
          type: action.payload.type,
          amount: action.payload.amount,
        },
      }
    default:
      return state
  }
}
