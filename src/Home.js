import React from 'react'
import {signInWithPopup, FacebookAuthProvider} from 'firebase/auth'
import { authentication } from './FireBaseConfig'
import "./styles.css";
import { Button } from '@mui/material';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';

export default function Home() {

    const signInFacebook = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(authentication, provider)
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }
  return (
    <div>
        <h1 style={{marginLeft: 600, color: 'white'}}>Facebook Help Desk</h1>
        <form className="form">
            <div>
                <FacebookTwoToneIcon/>
            </div>
            <div className='inputarea'>
                <input type="text" placeholder="Enter Name"/>
                <input type="text" placeholder="Enter Email"/>
                <input type="password" placeholder="Enter Password"/>
            </div>
           <Button type="button" variant="contained" className="form__custom-button" onClick={signInFacebook}>Sign In With FaceBook</Button>
        </form>
    </div>
  )
}
