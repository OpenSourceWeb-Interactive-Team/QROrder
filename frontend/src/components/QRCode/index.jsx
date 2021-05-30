import { useState } from 'react'
import ReactQRCode from 'qrcode.react'
import { IoIosCall } from 'react-icons/io'

import StyledQRCode from './style'

function QRCode() {
  return (
    <StyledQRCode>
      <div className="box">
        <div className="name">우리집 밥상</div>
        <div className="number">
          <IoIosCall className="phone-icon" />
          02-452-1424
        </div>
        <div className="qrcode">
          <ReactQRCode value="http://localhost:3000"></ReactQRCode>
        </div>
        <div className="desc">
          <p className="info">{`< QROrder 사용방법 >`}</p>
          <p>1. 핸드폰을 켜서 QRCode를 인식한다.</p>
          <p>2. 메뉴 페이지에 접속해서 장바구니에 메뉴를 담는다.</p>
          <p>3. 결제 후 주문이 완료될때까지 기다린다 </p>
          <p>4. 음식이 나오면 접수번호를 말하고 맛있게 먹는다 </p>
        </div>
      </div>
      <div className="print">해당 페이지를 인쇄하여 테이블에 붙여주세요</div>
    </StyledQRCode>
  )
}

export default QRCode
