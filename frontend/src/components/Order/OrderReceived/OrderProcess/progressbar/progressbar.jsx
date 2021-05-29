import React from "react";

const ProgressBar = ({ bgcolor, completed, Id }) => {

    const handleOnClick = (index) => {
        Id(index);
    }

    const containerStyles = {
        textAlign: 'center',
        zIndex: '0',
        position: "relative",
        height: '2%',
        width: '70%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 'auto'
    }

    const fillerStyles = {
        zIndex: '1',
        height: 'auto',
        width: `${completed*50}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
    }
    const circles = {
        top: '-10px',
        margin: 'auto',
        display: "flex",
        position: "absolute",
        justifyContent: "space-between",
        width: '100%',
    }
    const circlestyles = {
        width: '30px',
        height: '30px',
        backgroundColor: "#e0e0de",
        border: "3px solid",
        borderColor: '#e0e0de',
        borderRadius: '50%',
        transition: "background-color 1 s"
        
    }
    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }

    return (
        <div>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}></span>
                </div>
                <div style={circles}>
                    <div style={circlestyles} id={0} onClick={() =>
                        handleOnClick(0)}></div>
                    <div style={circlestyles} id={1} onClick={() =>
                        handleOnClick(1)}></div>
                    <div style={circlestyles} id={2} onClick={() =>
                        handleOnClick(2)}></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;