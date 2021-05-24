import StyledReceipt from './style'
import MenuInfo from './menu_info/index'

export default function Receipt() {
    var num = 0;
    return (
        <StyledReceipt>
            <div>
                <div className="ordertitle">
                    <p className="title">주문 내역</p>
                    <p className="num">No.{20210501 + (num++)}</p>
                </div>

                <div className="receipt">
                    <MenuInfo></MenuInfo>
                    <MenuInfo></MenuInfo>
                    <MenuInfo></MenuInfo>
                </div>

            </div>
        </StyledReceipt>
    );
}