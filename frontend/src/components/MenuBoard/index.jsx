import Menu from './Menu'
import Store from './Store'
import StyledMenuBoard from './style'
import BasketButton from './BasketButton'

function MenuBoard() {
  return (
    <StyledMenuBoard>
      <Store />
      {/* <div>메뉴판</div> */}
      <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu>
      <BasketButton />
    </StyledMenuBoard>
  )
}

export default MenuBoard
