import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  // MDBCheckbox,
  // MDBIcon
}
from 'mdb-react-ui-kit';
import axios from  "axios";

const handleSubmit=async (e,formData)=>{
e.preventDefault();
try {
  const response = await axios.post('/api/signup', formData);
  console.log("signup successfull",response.data);
}catch (error) {
  console.error('Signup failed:', error);
}
};

function SignUp() {
const [firstname,setfirstname]=useState("")
const [lastname,setlastname]=useState("")
const [email,setemail]=useState("")
const [password,setpassword]=useState("")


  return (
    <MDBContainer fluid>

      <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height:'200px' }}></div>

      <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
        <MDBCardBody className='p-5 text-center'>

          <h2 className="fw-bold mb-5">Sign up now</h2>
          <form className="signup_form" onSubmit={(e)=>handleSubmit(e,{firstname,lastname,email,password})}>

          <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' onChange={e=>setfirstname(e.target.value)}  value={firstname}label='First name' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' onChange={e=>setlastname(e.target.value)} value={lastname}  label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow>

          <MDBInput wrapperClass='mb-4' onChange={e=>setemail(e.target.value)} value={email} label='Email' id='form1' type='email'/>
          <MDBInput wrapperClass='mb-4' onChange={e=>setpassword(e.target.value)} value={password} label='Password' id='form1' type='password'/>


          <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default SignUp;