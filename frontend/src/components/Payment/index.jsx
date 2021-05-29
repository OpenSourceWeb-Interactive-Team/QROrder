import StyledPayment from './style'

function Payment() {
  return (
    <StyledPayment>
      <div className="box">
        <div className="">주문 정보</div>
        <div className="type">포장</div>
        <div className="store">초밥천국</div>
        <div className="menu">우동 1개</div>
        <div className="menu">초밥 2개</div>
      </div>
      <div className="box">
        <div className="">주문자 정보</div>
        <div className="phone">01056861069</div>
        <div className="">요청사항</div>
        <input type="text" placeholder="예) 브로콜리 빼주세요"></input>
      </div>
      <div className="box">
        <div>결제수단</div>
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">신용카드</label>
        </div>
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">현금</label>
        </div>
        <div>
          <input type="radio" id="dewey" name="drone" value="dewey" />
          <label for="dewey">포인트</label>
        </div>
        <div className="bottom">
          <div className="pay">16,200원 결제하기</div>
        </div>
      </div>
    </StyledPayment>
  )
}

export default Payment
