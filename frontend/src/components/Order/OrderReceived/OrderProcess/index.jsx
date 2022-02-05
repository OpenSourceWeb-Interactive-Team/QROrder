import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import StyledOrderProcess from './style'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { FiShoppingBag, FiSmile } from 'react-icons/fi'
import { setProcess } from '../../../../modules/process'

function OrderProcess() {
  const idRef = useRef(0)
  const dispatch = useDispatch();
  const [completed, setCompleted] = useState(0)
  const [msg, setMsg] = useState(['주문을 곧 확인하겠습니다.', '잠시만 기다려주세요.'])
  const [time, settime] = useState(10)
  const [bg, setBg] = useState('#66FF66')

  useEffect(() => {
    const timer = setInterval(() => {
      setCompleted((idRef.current += 1))
      if (idRef.current === 2) return clearInterval(timer)
    }, 2000)
  }, [])

  useEffect(() => {
    if(!completed) {
      setMsg(['주문을 곧 확인하겠습니다.', '잠시만 기다려주세요.'])
      setBg('#0AC9FF')
      dispatch(setProcess(0))
      return;
    }
    if(completed === 1) {
      setMsg(['주문한 메뉴를 만들고 있습니다.', `예상 준비시간: ${time}분`])
      setBg('#66FF66')
      dispatch(setProcess(1))
      return;
    }
    setMsg(['주문하신 메뉴가 준비되었습니다.', '메뉴를 가져가시길 바랍니다.'])
    setBg('#F88EF4')
    dispatch(setProcess(2))
    return;
  }, [completed])

  return (
    <StyledOrderProcess id={completed} bg={bg}>
      <p>{msg[0]}</p>
      <p>{msg[1]}</p>
      <div className="box">
        <div className="containerStyles">
          <div className="fillerStyles">
            <span className="labelStyles" />
          </div>
          <div className="circles">
            <div className="circleStyles one">
              <FiShoppingBag className="icon" />
            </div>
            <div className="circleStyles two">
              <AiOutlineCheckSquare className="icon" />
            </div>
            <div className="circleStyles three">
              <FiSmile className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="processtext">
        <p>접수 중</p>
        <p>준비 중</p>
        <p>준비 끝</p>
      </div>
    </StyledOrderProcess>
  )
}

export default OrderProcess
