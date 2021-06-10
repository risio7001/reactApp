import React, { useEffect, useState } from 'react';
import '../Header/headerStyle.css'

function Header(){

    const [headerHeight, setHeaderHeight] = useState("52px");
    const [scroll, setScroll]= useState("");
    const [test, setTest]=useState(0);
    const [testHeight, setTestHeight] = useState("0px");
    const [testWidth, setTestWidth] = useState("0px");
    const [size, setSize]= useState("");

    function reSize(){
        if(window.innerWidth <=1000){
            setSize(true);
        }
        else{
            setSize(false);
        }
    }
    useEffect(()=>{
        window.addEventListener('resize', reSize)
        return ()=>{window.removeEventListener('resize', reSize);}
    }, [reSize]);

    function scrollHandler(){
        setScroll(window.scrollY);
        if (scroll !== 0) { setHeaderHeight("0px"); }
        else { setHeaderHeight("52px"); }
    }

    useEffect(()=>{
    window.addEventListener('scroll', scrollHandler);
    return ()=>{window.removeEventListener('scroll', scrollHandler);}
    },[scrollHandler]);

    function Test() {
        setTestHeight("100px");
        setTestWidth("100px");
    }

    return <>
        {size ?
            <div> 모바일 화면입니다.</div>
            : 
            <div className="headerStyle" >
                <div onMouseOver={Test} style={{ float: "left", width: "100px", height: "52px", backgroundColor: "blue" }}>
                </div>
                <p>dffffffffffffffffffffffffff</p>
            </div>
        }
    </>
}

export default Header