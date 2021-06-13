import React, { useState, useEffect, useRef } from 'react'
import { AiOutlineCheckSquare } from 'react-icons/ai'
import { FiShoppingBag, FiSmile } from 'react-icons/fi'

const ProgressBar = ({ bgcolor, completed, Id }) => {
  const idRef = useRef(-1)
  useEffect(() => {
    const timer = setInterval(() => {
      Id((idRef.current += 1))
      if (idRef.current === 2) return clearInterval(timer)
    }, 2000)
  }, [])

  const frame = {
    margin: '0.5em auto',
    textAlign: 'center',
    alignItems: 'center',
  }

  const containerStyles = {
    textAlign: 'center',
    zIndex: '0',
    position: 'relative',
    display: 'block',
    height: '2%',
    width: '90%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 'auto',
  }

  const fillerStyles = {
    zIndex: '1',
    height: 'auto',
    width: `${completed * 50}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width 1s ease-in-out',
  }
  const circles = {
    top: '-10px',
    margin: 'auto',
    display: 'flex',
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
  }
  const circlestyles = {
    width: '30px',
    height: '30px',
    backgroundColor: '#e0e0de',
    border: '3px solid',
    borderColor: '#e0e0de',
    borderRadius: '50%',
    transition: 'background-color 1 s',
  }
  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  const icon = {
    color: 'white',
    verticalAlign: 'middle',
  }

  return (
    <div style={frame}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
        <div style={circles}>
          <div style={circlestyles} id={0}>
            <FiShoppingBag size={25} style={icon}></FiShoppingBag>
          </div>
          <div style={circlestyles} id={1}>
            <AiOutlineCheckSquare size={25} style={icon}></AiOutlineCheckSquare>
          </div>
          <div style={circlestyles} id={2}>
            <FiSmile size={25} style={icon}></FiSmile>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
