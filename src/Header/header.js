import React, { useEffect, useState } from 'react';
import '../Header/headerStyle.css'
import {text} from '../TextContents/totalText'

function Header(){
    const [num, setNum] = useState();
    const [headerHeight, setHeaderHeight] = useState("52px");
    const [scroll, setScroll]= useState("");
    const [test, setTest]=useState(0);
    const [testHeight, setTestHeight] = useState("0px");
    const [testWidth, setTestWidth] = useState("0px");
    let textContent = [];
    text.forEach(item=>{
        textContent.push({
            title:item.title,
            content:item.content
        });
    })
    const [headerText, setHeaderText] = useState(textContent);

    // const [size, setSize]= useState("");

    // function reSize(){
    //     if(window.innerWidth <=1000){
    //         setSize(true);
    //     }
    //     else{
    //         setSize(false);
    //     }
    // }
    // useEffect(()=>{
    //     window.addEventListener('resize', reSize)
    //     return ()=>{window.removeEventListener('resize', reSize);}
    // }, [reSize]);

    function scrollHandler(){
        setScroll(window.scrollY);
        if (scroll !== 0) { setHeaderHeight("0px"); }
        else { setHeaderHeight("52px"); }
    }

    useEffect(()=>{
    window.addEventListener('scroll', scrollHandler);
    return ()=>{window.removeEventListener('scroll', scrollHandler);}
    },[scrollHandler]);

    // function Test(idx) {
    //     console.log("선택된 항목의 번호 : " + idx);
    //     setTestHeight("100px");
    //     setTestWidth("100px");
    // }
    const [on, setOn]= useState(false);
    const [contentText, setContentText] = useState();
    // useEffect(()=>{
    //     setContentText()
    // }, [on]);


    return <>
            <div className="headerStyle" >
            {/* onMouseOver={() => setContentText(text)} */}
            <div className="moreView0" onMouseLeave={()=>setContentText("")}>
                {headerText.map((text, idx)=>(
                    <div className="moreView" onMouseEnter={()=>setContentText(text.content)} >
                        <p>{text.title}</p>
                    </div>
                ))}

                <div className="moreView2">
                    <p className="text">{contentText}</p>
                </div>
            </div>
            <div className="rightHeader">
                    <p>로그인</p>
            </div>
        </div>
    </>
}

export default Header