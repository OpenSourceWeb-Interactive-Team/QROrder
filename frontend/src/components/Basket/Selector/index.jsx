import { useSelector, useDispatch } from 'react-redux'
import { IoBagHandleOutline } from 'react-icons/io5'
import { GiForkKnifeSpoon } from 'react-icons/gi'
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'

import { setMeans } from '../../../modules/basket'

function Selector() {
  const means = useSelector(state => state.basket.means)
  const dispatch = useDispatch()
  const toggle = () => {
    dispatch(setMeans(means))
  }
  return (
    <div className="means">
      <div className="visit">
        {means ? (
          <MdCheckBox className="check-icon" />
        ) : (
          <MdCheckBoxOutlineBlank className="uncheck-icon" onClick={toggle} />
        )}
        <div>
          <div className="title">
            <p>먹고갈게요</p>
            <GiForkKnifeSpoon className="fork-icon" />
          </div>
          <p className="description">매장에서 드실 수 있게 준비됩니다.</p>
        </div>
      </div>
      <div className="takeaway">
        {!means ? (
          <MdCheckBox className="check-icon" />
        ) : (
          <MdCheckBoxOutlineBlank className="uncheck-icon" onClick={toggle} />
        )}
        <div>
          <div className="title">
            <p>포장할게요</p>
            <IoBagHandleOutline className="bag-icon" />
          </div>
          <p className="description">가지고 가실 수 있게 준비됩니다.</p>
        </div>
      </div>
    </div>
  )
}

export default Selector
