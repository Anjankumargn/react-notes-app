// import React, { useState } from 'react';
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCol,
//   MDBRow,
//   MDBInput,
//   // MDBCheckbox,
//   // MDBIcon
// }
// from 'mdb-react-ui-kit';
// //  import axios from  "axios";
// import {useNavigate} from "react-router-dom"
// import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";

// // const handleSubmit=async (e,formData)=>{
// // e.preventDefault();
// // try {
// //   const response = await axios.post('/api/signup', formData);
// //   console.log("signup successfull",response.data);
// // }catch (error) {
// //   console.error('Signup failed:', error);
// // }
// // };

// function SignUp() {
// const [firstname,setfirstname]=useState("")
// const [lastname,setlastname]=useState("")
// const [email,setemail]=useState("")
// const [password,setpassword]=useState("")
// const [confirmpassword,setconfirmpassword]=useState("")
// const [error,seterror]=useState('');
// const navigate=useNavigate();

//     const signUp=async()=>{
//       if (password !==confirmpassword){
//         seterror("Passwords dont match");
//         try{
//             await createUserWithEmailAndPassword(getAuth(),email,password)
//             navigate('/')
//         }catch(error){
//             seterror(error.message);
//         }
//       }
//     }

//   return (
//     <MDBContainer fluid>

//       <div className="p-5 bg-image" style={{backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height:'200px' }}></div>

//       <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)'}}>
//         <MDBCardBody className='p-5 text-center'>

//           <h2 className="fw-bold mb-5">Sign up now</h2>
//           {error && <p className="error" >{error}</p>} 

//           {/* <form className="signup_form" onSubmit={(e)=>handleSubmit(e,{firstname,lastname,email,password})}> */}

//           <MDBRow>
//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' onChange={e=>setfirstname(e.target.value)}  value={firstname}label='First name'  type='text'/>
//             </MDBCol>

//             <MDBCol col='6'>
//               <MDBInput wrapperClass='mb-4' onChange={e=>setlastname(e.target.value)} value={lastname}  label='Last name'  type='text'/>
//             </MDBCol>
//           </MDBRow>

//           <MDBInput wrapperClass='mb-4' onChange={e=>setemail(e.target.value)} value={email} label='Email'  type='email'/>
//           <MDBInput wrapperClass='mb-4' onChange={e=>setpassword(e.target.value)} value={password} label='Password'  type='password'/>
//           <MDBInput wrapperClass='mb-4' onChange={e=>setconfirmpassword(e.target.value)} value={confirmpassword} label='Password'  type='password'/>

//           <MDBBtn className='w-100 mb-4' size='md' onClick={signUp}>sign up</MDBBtn>
//           {/* </form> */}
//         </MDBCardBody>
//       </MDBCard>

//     </MDBContainer>
//   );
// }

// export default SignUp;