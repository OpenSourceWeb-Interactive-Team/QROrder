import StyledMenuInfo from './style'
import {FiCornerDownRight} from 'react-icons/fi'

export default function MenuInfo() {
    return (
        <StyledMenuInfo>
            <div className="menu_frame">
                <div className="menu">
                    <p className="menu_name">지지고 반반</p>
                    <p className="menu_price">8,000</p>
                    <div className="menu_detail">
                        <p className="detail"><FiCornerDownRight/>순한 맛</p>
                        <p className="price_detail">0</p>
                    </div>
                </div>
                <div className="price">
                    <p className="sub_price">8,000</p>
                    <p className="menu_num">x1</p>
                </div>
                <div className="total_price">8,000원</div>
            </div>
        </StyledMenuInfo>
    );
}