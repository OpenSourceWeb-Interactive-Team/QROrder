import React, { useState, useEffect } from 'react';
import StyledOrderProcess from './style'
import ProgressBar from './progressbar/progressbar'

function OrderProcess() {
    const [completed, setCompleted] = useState(0);
    const [msg1, setmsg1] = useState("주문을 곧 확인하겠습니다.");
    const [msg2, setmsg2] = useState("잠시만 기다려주세요.");
    const [time, settime] = useState(10);
    const [bgcolor, setcolor] = useState('#66FF66');

    const Mesg = () => {
        var m1 = '예상 준비시간: ';
        var tme = time;
        var m2 = "분";
    }
    const updateid = (id) => {
        
        setCompleted(id);
        if (id === 0) {
            setmsg1('주문을 곧 확인하겠습니다.');
            setmsg2('잠시만 기다려주세요.');
            setcolor('#0AC9FF');
            document.getElementById('background').style.background = 'linear-gradient(#0AC9FF 20%, #fff 20%)';
            document.getElementById('table').style.color= '#0AC9FF';
            document.getElementById(id).style.borderColor = '#0AC9FF';
            document.getElementById(id).style.backgroundColor = '#0AC9FF';
            document.getElementById(1).style.backgroundColor = '#e0e0de';
            document.getElementById(2).style.backgroundColor = '#e0e0de';
            document.getElementById(1).style.borderColor = '#e0e0de';
            document.getElementById(2).style.borderColor = '#e0e0de';
        }
        else if (id === 1) {
            setmsg1('주문한 메뉴를 만들고 있습니다.');
            setmsg2('예상 준비시간: ' + time + "분");
            setcolor('#66FF66');
            document.getElementById('background').style.background = 'linear-gradient(#66FF66 20%, #fff 20%)';
            document.getElementById('table').style.color= '#66FF66';
            document.getElementById(id).style.borderColor = '#66FF66';
            document.getElementById(id).style.backgroundColor = '#66FF66';
            document.getElementById(0).style.backgroundColor = '#fff';
            document.getElementById(2).style.backgroundColor = '#e0e0de';
            document.getElementById(0).style.borderColor = '#e0e0de';
            document.getElementById(2).style.borderColor = '#e0e0de';
        }
        else if (id === 2) {
            setmsg1('주문하신 메뉴가 준비되었습니다.');
            setmsg2('메뉴를 가져가시길 바랍니다.');
            setcolor('#F88EF4');
            document.getElementById('background').style.background = 'linear-gradient(#F88EF4 20%, #fff 20%)';
            document.getElementById('table').style.color= '#F88EF4';
            document.getElementById(id).style.borderColor = '#F88EF4';
            document.getElementById(0).style.borderColor = '#e0e0de';
            document.getElementById(1).style.borderColor = '#e0e0de';
            document.getElementById(id).style.backgroundColor = '#F88EF4';
            document.getElementById(0).style.backgroundColor = '#fff';
            document.getElementById(1).style.backgroundColor = '#fff';
        }
        console.log(id);
        console.log(completed);
    }

    return (
        <StyledOrderProcess>
            <p>{msg1}</p>
            <p>{msg2}</p>
            <ProgressBar
                bgcolor={bgcolor}
                completed={completed}
                Id={updateid}/>
        </StyledOrderProcess>
    )
}

export default OrderProcess
