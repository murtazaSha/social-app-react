import React,{useState,useEffect,useRef} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import logo from './logoPng.png';
import welcomeimg from './welcomeback.svg';
import { ApiCall } from '../ApiCall/ApiCall';
import {useSelector,useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Login() {
const state = useSelector(state => state.UserReducer);
const dispatch = useDispatch();
const initialValue = useRef(true);

let history=useHistory();

useEffect(() => {


    if(!initialValue.current){
        console.log(state);
        
    }else{
        initialValue.current=false;
    }

    return()=>{
        history.push('/');
    }
}, [state,history])




    const [emailval,setemailval]= useState("");
    const [passval,setpassval]= useState("");

    const handlesubmit= (event)=>{
        event.preventDefault();
      if(emailval!=="" || passval!==""){
         ApiCall({"email":emailval,"password":passval},dispatch);
         setemailval("");
         setpassval("");
        }
  
       
    }

    return (
        <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                         <div className="img-class">
                              <img src={logo} id="img-id" alt="" />
                          </div>
                 
                        <form onSubmit={handlesubmit}>
                        <label htmlFor="emil1">Email</label>
                            <input placeholder="Enter your email..." type="email" value={emailval} 
                            onChange={(e)=>{setemailval(e.target.value)}} id="emil1"/>
                        <label htmlFor="pwd1">Password</label>
                            <input placeholder="Enter password" type="password" autoComplete="false"
                            value={passval} onChange={(e)=>{setpassval(e.target.value)}}
                             id="pwd1"/>
                            <button type="submit" id="sub_butt">Login</button>
                         </form>

                         <div className="footer">
                             <h4>Don't have an Account ? <Link className='link' to='/Register'>Register Now</Link></h4>
                         </div>

                 </div>
                  <div className="right-side">
                    <div className="welcomeNote">
                        <h3>Welcome Back!</h3>
                    </div>
                    <div className="welcomeImg">
                        <img src={welcomeimg} id='wel-img-id' alt=""  />
                    </div>
                  </div>

                </div>
        </div>
    )
}

export default Login;
