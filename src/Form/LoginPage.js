import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardImage, MDBRow, MDBCol,  MDBInput, } from 'mdb-react-ui-kit';
import logo from '../assets/240_F_270728627_D6gk2X8Tn8lw2I9yxMpnT0hirBCIHQsL.jpg';
import {Link} from "react-router-dom";
import axios from 'axios';

const handleSubmit=async (e,formData)=>{
  e.preventDefault();
  try {
    const response = await axios.post('/api/login', formData);
    console.log("Login successfull",response.data);
  }catch (error) {
    console.error('Login failed:', error);
  }
  };
  



function Login() {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className='g-0'>
          <MDBCol md='6'>
            <MDBCardImage src={logo} alt="Logo" className='rounded-start w-100' />
          </MDBCol>
          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <div className='d-flex flex-row mt-2'>
                
                <span className="h1 fw-bold mb-0">UPNOTE</span>
              </div>
              <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}>Login into your account</h5>
              <form className="signup_form" onSubmit={(e)=>handleSubmit(e,{email,password})}>

              <MDBInput wrapperClass='mb-4' onChange={e=>setemail(e.target.value)} value={email} label='Email address' id='formControlLg' type='email' size="lg" />
              <MDBInput wrapperClass='mb-4' onChange={e=>setpassword(e.target.value)} value={password} label='Password' id='formControlLg' type='password' size="lg" />
              <MDBBtn className="mb-4 px-5" color='dark' size='lg' >Login</MDBBtn>
              </form>
              <a className="small text-muted" href="#!">Forgot password?</a>
              <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!" style={{ color: '#393f81' }}>
                <Link to ="/signup">SignUp</Link></a></p>   
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
