import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Calculator(){
    const [prix, setPrix]=useState(250);

    const [torF, setTorF]=useState(true);
    const [torF2, setTorF2]=useState(true);
    const [torF3, setTorF3]=useState(true);
    const [torF4, setTorF4]=useState(true);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*const checker = document.getElementById('btncheck1');
    const sendbtn = document.getElementById('btncheck4');

    checker.onchange = function(){
        if(this.checked){
            sendbtn.disabled = false;
        } else {
            sendbtn.disabled = true;
        }
        
        };*/

    const [xat,setXat]=useState(false);
    const [xat2,setXat2]=useState(false);
    const [xat3,setXat3]=useState(false);
    const [xat4,setXat4]=useState(false);
    const [xat5,setXat5]=useState(false);
    const [xat6,setXat6]=useState(false);
    const [xat7,setXat7]=useState(false);
    const [xat8,setXat8]=useState(false);
    const [xat9,setXat9]=useState(false);
    const [xat10,setXat10]=useState(false);
    const [xat11,setXat11]=useState(false);
    const [xat12,setXat12]=useState(false);
    const [xat13,setXat13]=useState(false);
    const [xat14,setXat14]=useState(false);
    const [xat15,setXat15]=useState(false);
    const [xat16,setXat16]=useState(false);
    const [xat17,setXat17]=useState(false);
    const [xat18,setXat18]=useState(false);
    const [xat19,setXat19]=useState(false);
    const [xat20,setXat20]=useState(false);
    const [xat21,setXat21]=useState(false);
    const [xat22,setXat22]=useState(false);
    const [xat23,setXat23]=useState(false);
    const [xat24,setXat24]=useState(false);
    const [xat25,setXat25]=useState(false);
    const [xat26,setXat26]=useState(false);
    const [xat27,setXat27]=useState(false);
    const [xat28,setXat28]=useState(false);
    const [xat29,setXat29]=useState(false);
    const [xat30,setXat30]=useState(false);
    const [xat31,setXat31]=useState(false);
    const [xat32,setXat32]=useState(false);
    const [xat33,setXat33]=useState(false);
    const [xat34,setXat34]=useState(false);
    const [xat35,setXat35]=useState(false);
    const [xat36,setXat36]=useState(false);

    /*const [b1,setB1] = useState();
    const [b2,setB2] = useState(0);
    const [b3,setB3] = useState(0);
    const [b4,setB4] = useState(0);
    const [b5,setB5] = useState(0);
    const [b6,setB6] = useState(0);
    const [b7,setB7] = useState(0);
    const [b8,setB8] = useState(0);
    const [b9,setB9] = useState(0);
    const [b10,setB10] = useState(0);
    const [b11,setB11] = useState(0);
    const [b12,setB12] = useState(0);
    const [b13,setB13] = useState(0);
    const [b14,setB14] = useState(0);
    const [b15,setB15] = useState(0);
    const [b16,setB16] = useState(0);
    const [b17,setB17] = useState(0);
    const [b18,setB18] = useState(0);
    const [b19,setB19] = useState(0);
    const [b20,setB20] = useState(0);
    const [b21,setB21] = useState(0);
    const [b22,setB22] = useState(0);
    const [b23,setB23] = useState(0);
    const [b24,setB24] = useState(0);
    const [b25,setB25] = useState(0);
    const [b26,setB26] = useState(0);
    const [b27,setB27] = useState(0);
    const [b28,setB28] = useState(0);
    const [b29,setB29] = useState(0);
    const [b30,setB30] = useState(0);
    const [b31,setB31] = useState(0);
    const [b32,setB32] = useState(0);
    const [b33,setB33] = useState(0);
    const [b34,setB34] = useState(0);
    const [b35,setB35] = useState(0);
    const [b36,setB36] = useState(0);

    const [empObj, setEmpObj] = useState([])
    const [obj, setObj] = useState(empObj)

    function onCh (e){
        let _obj = 
    }*/

    //checked: 
    const xev=(event)=>{
        setXat(event.target.checked);
    }
    const xev2=(event)=>{
        setXat2(event.target.checked);
    }
    const xev3=(event)=>{
        setXat3(event.target.checked);
    }
    const xev4=(event)=>{
        setXat4(event.target.checked);
    }
    const xev5=(event)=>{
        setXat5(event.target.checked);
    }
    const xev6=(event)=>{
        setXat6(event.target.checked);
    }
    const xev7=(event)=>{
        setXat7(event.target.checked);
    }
    const xev8=(event)=>{
        setXat8(event.target.checked);
    }
    const xev9=(event)=>{
        setXat9(event.target.checked);
    }
    const xev10=(event)=>{
        setXat10(event.target.checked);
    }
    const xev11=(event)=>{
        setXat11(event.target.checked);
    }
    const xev12=(event)=>{
        setXat12(event.target.checked);
    }
    const xev13=(event)=>{
        setXat13(event.target.checked);
    }
    const xev14=(event)=>{
        setXat14(event.target.checked);
    }
    const xev15=(event)=>{
        setXat15(event.target.checked);
    }
    const xev16=(event)=>{
        setXat16(event.target.checked);
    }
    const xev17=(event)=>{
        setXat17(event.target.checked);
    }
    const xev18=(event)=>{
        setXat18(event.target.checked);
    }
    const xev19=(event)=>{
        setXat19(event.target.checked);
    }
    const xev20=(event)=>{
        setXat20(event.target.checked);
    }
    const xev21=(event)=>{
        setXat21(event.target.checked);
    }
    const xev22=(event)=>{
        setXat22(event.target.checked);
    }
    const xev23=(event)=>{
        setXat23(event.target.checked);
    }
    const xev24=(event)=>{
        setXat24(event.target.checked);
    }
    const xev25=(event)=>{
        setXat25(event.target.checked);
    }
    const xev26=(event)=>{
        setXat26(event.target.checked);
    }
    const xev27=(event)=>{
        setXat27(event.target.checked);
    }
    const xev28=(event)=>{
        setXat28(event.target.checked);
    }
    const xev29=(event)=>{
        setXat29(event.target.checked);
    }
    const xev30=(event)=>{
        setXat30(event.target.checked);
    }
    const xev31=(event)=>{
        setXat31(event.target.checked);
    }
    const xev32=(event)=>{
        setXat32(event.target.checked);
    }
    const xev33=(event)=>{
        setXat33(event.target.checked);
    }
    const xev34=(event)=>{
        setXat34(event.target.checked);
    }
    const xev35=(event)=>{
        setXat35(event.target.checked);
    }
    const xev36=(event)=>{
        setXat36(event.target.checked);
    }

    //disabled:
    useEffect(()=>{
        if (xat==true || xat2==true || xat3==true){
            setTorF(false)
            setD(false)
        }
        else{
            setTorF(true)
            setD(true)
        };
    },[xat,xat2,xat3]);
    useEffect(()=>{
        if (xat35==true || xat4==true || xat36==true){
            setTorF2(false)
        }
        else{
            setTorF2(true)
        };
    },[xat35,xat4,xat36]);
    useEffect(()=>{
        if (xat5==true || xat6==true || xat7==true){
            setTorF3(false)
        }
        else{
            setTorF3(true)
        };
    },[xat5,xat6,xat7]);
    useEffect(()=>{
        if (xat8==true || xat9==true || xat10==true){
            setTorF4(false)
        }
        else{
            setTorF4(true)
        };
    },[xat8,xat9,xat10]);

    //values img:
    //const logo = require('./logo.jpeg');
    //const [i1, setI1]= useState(require('./imgTest/JavaScript.png'))

    //setPrix:
    useEffect(()=>{
        if (xat===true){
            setPrix(prix+625)
            //setI1(require('./imgTest/JavaScript.png'))

        }
        else{
            setPrix(prix-625)
            //setI1(require('./imgTest/JavaScript.png'))
        };
    },[xat]);
    useEffect(()=>{
        if (xat2==true){
            setPrix(prix+625)
        }
        else{
            setPrix(prix-625)
        };
    },[xat2]);
    useEffect(()=>{
        if (xat3==true){
            setPrix(prix+375)
        }
        else{
            setPrix(prix-375)
        };
    },[xat3]);
    useEffect(()=>{
        if (xat4==true){
            setPrix(prix+125)
        }
        else{
            setPrix(prix-125)
        };
    },[xat4]);
    useEffect(()=>{
        if (xat5==true){
            setPrix(prix+313)
        }
        else{
            setPrix(prix-313)
        };
    },[xat5]);
    useEffect(()=>{
        if (xat6==true){
            setPrix(prix+375)
        }
        else{
            setPrix(prix-375)
        };
    },[xat6]);
    useEffect(()=>{
        if (xat7==true){
            setPrix(prix+750)
        }
        else{
            setPrix(prix-750)
        };
    },[xat7]);
    useEffect(()=>{
        if (xat8==true){
            setPrix(prix+0)
        }
        else{
            setPrix(prix-0)
        };
    },[xat8]);
    useEffect(()=>{
        if (xat9==true){
            setPrix(prix+375)
        }
        else{
            setPrix(prix-375)
        };
    },[xat9]);
    useEffect(()=>{
        if (xat10==true){
            setPrix(prix+750)
        }
        else{
            setPrix(prix-750)
        };
    },[xat10]);
    useEffect(()=>{
        if (xat11==true){
            setPrix(prix+125)
        }
        else{
            setPrix(prix-125)
        };
    },[xat11]);
    useEffect(()=>{
        if (xat12==true){
            setPrix(prix+163)
        }
        else{
            setPrix(prix-163)
        };
    },[xat12]);
    useEffect(()=>{
        if (xat13==true){
            setPrix(prix+163)
        }
        else{
            setPrix(prix-163)
        };
    },[xat13]);
    useEffect(()=>{
        if (xat14==true){
            setPrix(prix+288)
        }
        else{
            setPrix(prix-288)
        };
    },[xat14]);
    useEffect(()=>{
        if (xat15==true){
            setPrix(prix+313)
        }
        else{
            setPrix(prix-313)
        };
    },[xat15]);
    useEffect(()=>{
        if (xat16==true){
            setPrix(prix+288)
        }
        else{
            setPrix(prix-288)
        };
    },[xat16]);
    useEffect(()=>{
        if (xat17==true){
            setPrix(prix+1563)
        }
        else{
            setPrix(prix-1563)
        };
    },[xat17]);
    useEffect(()=>{
        if (xat18==true){
            setPrix(prix+7813)
        }
        else{
            setPrix(prix-7813)
        };
    },[xat18]);
    useEffect(()=>{
        if (xat19==true){
            setPrix(prix+88)
        }
        else{
            setPrix(prix-88)
        };
    },[xat19]);
    useEffect(()=>{
        if (xat20==true){
            setPrix(prix+338)
        }
        else{
            setPrix(prix-338)
        };
    },[xat20]);
    useEffect(()=>{
        if (xat21==true){
            setPrix(prix+388)
        }
        else{
            setPrix(prix-388)
        };
    },[xat21]);
    useEffect(()=>{
        if (xat22==true){
            setPrix(prix+400)
        }
        else{
            setPrix(prix-400)
        };
    },[xat22]);
    useEffect(()=>{
        if (xat23==true){
            setPrix(prix+1063)
        }
        else{
            setPrix(prix-1063)
        };
    },[xat23]);
    useEffect(()=>{
        if (xat24==true){
            setPrix(prix+2813)
        }
        else{
            setPrix(prix-2813)
        };
    },[xat24]);
    useEffect(()=>{
        if (xat25==true){
            setPrix(prix+438)
        }
        else{
            setPrix(prix-438)
        };
    },[xat25]);
    useEffect(()=>{
        if (xat26==true){
            setPrix(prix+2813)
        }
        else{
            setPrix(prix-2813)
        };
    },[xat26]);
    useEffect(()=>{
        if (xat27==true){
            setPrix(prix+938)
        }
        else{
            setPrix(prix-938)
        };
    },[xat27]);
    useEffect(()=>{
        if (xat28==true){
            setPrix(prix+5313)
        }
        else{
            setPrix(prix-5313)
        };
    },[xat28]);
    useEffect(()=>{
        if (xat29==true){
            setPrix(prix+150)
        }
        else{
            setPrix(prix-150)
        };
    },[xat29]);
    useEffect(()=>{
        if (xat30==true){
            setPrix(prix+263)
        }
        else{
            setPrix(prix-263)
        };
    },[xat30]);
    useEffect(()=>{
        if (xat31==true){
            setPrix(prix+300)
        }
        else{
            setPrix(prix-300)
        };
    },[xat31]);
    useEffect(()=>{
        if (xat32==true){
            setPrix(prix+238)
        }
        else{
            setPrix(prix-238)
        };
    },[xat32]);
    useEffect(()=>{
        if (xat33==true){
            setPrix(prix+250)
        }
        else{
            setPrix(prix-250)
        };
    },[xat33]);
    useEffect(()=>{
        if (xat34==true){
            setPrix(prix+325)
        }
        else{
            setPrix(prix-325)
        };
    },[xat34]);
    useEffect(()=>{
        if (xat35==true){
            setPrix(prix+63)
        }
        else{
            setPrix(prix-63)
        };
    },[xat35]);
    useEffect(()=>{
        if (xat36==true){
            setPrix(prix+250)
        }
        else{
            setPrix(prix-250)
        };
    },[xat36]);
    
    /*function onCh (e){
        let name= e.target.name
        let val = e.target.value
        let _obj = {...obj}
        _obj[name]=val
        setObj(_obj)
    }*/
    
    /*useEffect((event)=>{
        if(xat==true || xat2 == true || xat3 == true){
            return(
                document.getElementById('btncheck4').disabled=false
            )
    }
    else{
            return(
                document.getElementById('btncheck4').disabled=true
            )
    }
    },[xat,xat2,xat3]);*/

    const [d, setD] = useState(true);

    /*const style1 = (xat == false ? "border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'" :
    "border:'1',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)', backgroundColor:'yellow'")*/

    return(
        <div>
            <div style={{margin:'0 auto',padding:'15px'}} className="container text-center justify-content-center">
                <div style={{width:'60%'}} className="container text-center justify-content-center">
                    <h2 style={{marginTop:'10px'}}>Calculate the cost of developing your application*</h2>
                    <div style={{marginTop:'80px'}}>
                        <h5 style={{margin:'40px'}}>What platforms do you want to develop a product for?</h5>
                        <div className="" >
                            <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}}>
                            <input type="checkbox" className="btn-check" id="btncheck1" onChange={xev} />
                            <label className="btn btn-outline-primary" for="btncheck1" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            
                            <img src="calculator_logo\Apple.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Apple</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}}>
                            <input type="checkbox" className="btn-check" id="btncheck2" onChange={xev2}/>
                            <label className="btn btn-outline-primary" for="btncheck2" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\Android.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Android</strong>
                            </label>
                            </button>
                            <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}}>
                            <input type="checkbox" className="btn-check" id="btncheck3" onChange={xev3}/>
                            <label className="btn btn-outline-primary" for="btncheck3" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\Web.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Web</strong>
                            </label>
                            </button>
                        </div>
                    </div>

                    <div style={{marginTop:'80px'}} className="">
                        <h5 style={{margin:'40px'}}>What do you want to get?</h5>
                        <div>
                            <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF}>
                            <input type="checkbox" disabled={torF} className="btn-check" id="btncheck4" onChange={xev35}/>
                            <label className="btn btn-outline-primary" for="btncheck4" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\newProject.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>An application from scratch</strong>
                            </label>
                            </button>
                            <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF}>
                            <input type="checkbox" disabled={torF} className="btn-check" id="btncheck5" onChange={xev4}/>
                            <label className="btn btn-outline-primary" for="btncheck5" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\update.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Update</strong>
                            </label>
                            </button>
                            <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF}>
                                <input type="checkbox" disabled={torF} className="btn-check" id="btncheck6" onChange={xev36}/>
                                <label className="btn btn-outline-primary" for="btncheck6"  style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                                <img src="calculator_logo\revision.svg"></img>
                                <br/>
                                <strong style={{fontSize:'13px', color:'#828282'}}>Revision of the
                                    project</strong>
                                </label>
                            </button>
                        </div>
                    </div>

                    <div style={{marginTop:'80px'}}>
                        <h5 style={{margin:'40px'}}>How many unique screens will there be in the app?</h5>
                        <div>
                            <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF2}>
                            <input type="checkbox" disabled={torF2} className="btn-check" id="btncheck7" onChange={xev5}/>
                            <label className="btn btn-outline-primary" for="btncheck7" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\less10.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Less than 10</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF2}>
                            <input type="checkbox" disabled={torF2} className="btn-check" id="btncheck8" onChange={xev6}/>
                            <label className="btn btn-outline-primary" for="btncheck8" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\more10.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>From 10 to 25</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF2}>
                            <input type="checkbox" disabled={torF2} className="btn-check" id="btncheck9" onChange={xev7}/>
                            <label className="btn btn-outline-primary" for="btncheck9" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\more25.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>More than 25</strong>
                            
                            </label>
                            </button>
                        </div>
                    </div>

                    <div style={{marginTop:'80px'}}>
                        <h5 style={{margin:'40px'}}>What is the degree of development of the application interface?</h5>
                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF3}>
                            <input type="checkbox" disabled={torF3} className="btn-check" id="btncheck10" onChange={xev8}/>
                            <label className="btn btn-outline-primary" for="btncheck10" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\simple.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Simple</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF3}>
                            <input type="checkbox" disabled={torF3} className="btn-check" id="btncheck11" onChange={xev9}/>
                            <label className="btn btn-outline-primary" for="btncheck11" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\unique.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Unique</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF3}>
                            <input type="checkbox" disabled={torF3} className="btn-check" id="btncheck12" onChange={xev10}/>
                            <label className="btn btn-outline-primary" for="btncheck12" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\animation.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Unique with animation</strong>
                            </label>
                            </button>
                        </div>
                    </div>

                    <div style={{marginTop:'80px'}}>
                        <h5 style={{margin:'40px'}}>What features do you want to include in the app?</h5>
                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck13" onChange={xev11}/>
                            <label className="btn btn-outline-primary" for="btncheck13" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\search.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Search</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck14" onChange={xev12}/>
                            <label className="btn btn-outline-primary" for="btncheck14" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\map.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Map</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck15" onChange={xev13}/>
                            <label className="btn btn-outline-primary" for="btncheck15" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\catalog.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Catalog</strong>
                            </label>
                            </button>
                        </div>

                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck16" onChange={xev14}/>
                            <label className="btn btn-outline-primary" for="btncheck16" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\calendar.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Calendar</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck17" onChange={xev15}/>
                            <label className="btn btn-outline-primary" for="btncheck17" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\card.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Payments</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck18" onChange={xev16}/>
                            <label className="btn btn-outline-primary" for="btncheck18" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\booking.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Booking</strong>
                            </label>
                            </button>
                        </div>

                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck19" onChange={xev17}/>
                            <label className="btn btn-outline-primary" for="btncheck19" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\login.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Registration and authorization</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck20" onChange={xev18}/>
                            <label className="btn btn-outline-primary" for="btncheck20" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\chat.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Chats</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck21" onChange={xev19}/>
                            <label className="btn btn-outline-primary" for="btncheck21" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\unique.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Favourites</strong>
                            </label>
                            </button>
                        </div>

                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck22" onChange={xev20}/>
                            <label className="btn btn-outline-primary" for="btncheck22" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\rating.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Reviews and ratings</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck23" onChange={xev21}/>
                            <label className="btn btn-outline-primary" for="btncheck23" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\notification.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Notifications</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck24" onChange={xev22}/>
                            <label className="btn btn-outline-primary" for="btncheck24" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\files.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Working with files</strong>
                            </label>
                            </button>
                        </div>

                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck25" onChange={xev23}/>
                            <label className="btn btn-outline-primary" for="btncheck25" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\ar.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>AR</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck26" onChange={xev24}/>
                            <label className="btn btn-outline-primary" for="btncheck26" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\datacollection.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Collecting data from sensors</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck27" onChange={xev25}/>
                            <label className="btn btn-outline-primary" for="btncheck27" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\usertesting.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>User testing</strong>
                            </label>
                            </button>
                        </div>

                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck28" onChange={xev26}/>
                            <label className="btn btn-outline-primary" for="btncheck28" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\support.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Technical support</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck29" onChange={xev27}/>
                            <label className="btn btn-outline-primary" for="btncheck29" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\qr.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>QR</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck30" onChange={xev28}/>
                            <label className="btn btn-outline-primary" for="btncheck30" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\3d.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>3D</strong>
                            </label>
                            </button>
                        </div>
                    </div>

                    <div style={{marginTop:'80px'}}>
                        <h5 style={{margin:'40px'}}>Which third-party services do you need to interact with?</h5>
                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck31" onChange={xev29}/>
                            <label className="btn btn-outline-primary" for="btncheck31" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\sms.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>SMS Mailing</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck32" onChange={xev30}/>
                            <label className="btn btn-outline-primary" for="btncheck32" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\api.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>API</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck33" onChange={xev31}/>
                            <label className="btn btn-outline-primary" for="btncheck33" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\crm.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>CRM</strong>
                            </label>
                            </button>
                        </div>

                        <div>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck34" onChange={xev32}/>
                            <label className="btn btn-outline-primary" for="btncheck34" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\cms.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>CMS</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck35" onChange={xev33}/>
                            <label className="btn btn-outline-primary" for="btncheck35" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\billing.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Billing systems</strong>
                            </label>
                            </button>
                             <button style={{margin:'20px', marginTop:'0px', border:'0',width:'155px', height:'95px', borderRadius:'15px', backgroundColor:'#DCDCDC'}} disabled={torF4}>
                            <input type="checkbox" disabled={torF4} className="btn-check" id="btncheck36" onChange={xev34}/>
                            <label className="btn btn-outline-primary" for="btncheck36" style={{border:'0',width:'155px', height:'95px', borderRadius:'15px', transform:'translate(-5.15%,-3%)'}}>
                            <img src="calculator_logo\cashmachine.svg"></img>
                            <br/>
                            <strong style={{fontSize:'13px', color:'#828282'}}>Cash register equipment</strong>
                            </label>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        <small style={{marginLeft:'100px', color:'#828282'}}>*The final cost of application development may differ from the cost indicated in the calculator.</small>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
            <div style={{backgroundColor:'#FAFAFA'}} className="fixed-bottom">
                <hr style={{marginTop:'0px'}}/>
                <div style={{margin:'10px', marginLeft:'200px',marginRight:'200px'}} className="row" >
                    <div className="col-6">
                        <h6 style={{color:'#828282'}}>The cost of developing your application</h6>
                        <h3><strong>{prix} $</strong></h3>
                    </div>
                    <div className="col-3">
                        <Button disabled={d} variant="primary" onClick={handleShow}>
                            Get the cost calculation
                        </Button>

                        <Modal show={show} onHide={handleClose} centered>
                        <Container>
                            <Modal.Header closeButton>
                                <img style={{width:'80px', marginLeft:'180px'}} src="logo.svg"/>
                            </Modal.Header>
                            <Modal.Body>
                            
                            <p style={{fontSize:'13px', textAlign:'center'}}>Please enter your email address. We will send you a calculation of the cost of the application.</p>
                            <Form>
                                <Form.Group className="mb-4 mt-4" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="text"
                                    placeholder="Name*"
                                    autoFocus
                                />
                                </Form.Group>
                                <Form.Group className="mb-4 mt-4" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    type="email"
                                    placeholder="Email*"
                                />
                                </Form.Group>
                                <Form.Group className="mb-4 mt-4" controlId="exampleForm.ControlInput1">
                                <Form.Control
                                    placeholder="Phone Number (optional)*"
                                />
                                </Form.Group>
                            </Form>
                            </Modal.Body>
                            </Container>
                            <Modal.Footer className="justify-content-center">
                            <Button style={{width:'150px'}} variant="primary" onClick={handleClose}>
                                Send
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    <div className="col-3 text-decoration-none">
                        <button style={{border:'0'}} disabled={d} onClick={()=>{
                            
                            setXat(false);
                            setXat2(false);
                            setXat3(false);
                            setXat4(false);
                            setXat5(false);
                            setXat6(false);
                            setXat7(false);
                            setXat8(false);
                            setXat9(false);
                            setXat10(false);
                            setXat11(false);
                            setXat12(false);
                            setXat13(false);
                            setXat14(false);
                            setXat15(false);
                            setXat16(false);
                            setXat17(false);
                            setXat18(false);
                            setXat19(false);
                            setXat20(false);
                            setXat21(false);
                            setXat22(false);
                            setXat23(false);
                            setXat24(false);
                            setXat25(false);
                            setXat26(false);
                            setXat27(false);
                            setXat28(false);
                            setXat29(false);
                            setXat30(false);
                            setXat31(false);
                            setXat32(false);
                            setXat33(false);
                            setXat34(false);
                            setXat35(false);
                            setXat36(false);
                    }}>Clear</button>
                    </div>
                </div>
            </div>
        </div>
    )
}