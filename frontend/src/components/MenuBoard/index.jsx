import Menu from './Menu'
import Store from './Store'
import StyledMenuBoard from './style'
import BasketButton from './BasketButton'
import { menuDetails } from '../../__mock__/menu'

function MenuBoard() {
  return (
    <StyledMenuBoard>
      <Store />
      {menuDetails.map(menuDetail => (
        <Menu menuDetail={menuDetail}></Menu>
      ))}
      <BasketButton />
    </StyledMenuBoard>
  )
}

export default MenuBoard
