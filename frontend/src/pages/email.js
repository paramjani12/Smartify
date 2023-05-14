import React from "react";
import { useState} from "react";
import img from '../images/logo.svg';
import { Container,FormWrap, FormContent, Form, FormH1,FormLabel,FormInput, CodeContainer,FormButton, Text,Logo, Icon, FormInputOtp} from './emailElement';
import { useHistory } from "react-router-dom";

const Email = () => {
    const [email,setEmail] = useState("");
    const [myCheck, setMyCheck] = useState(false);

    const history = useHistory();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch("http://127.0.0.1:5555/api/v1/users/otp",{
        method:"POST",
        withCredentials: true,
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email
        })
    });
    const data = await res.json();
    if(data.status === "error"){
        window.alert("Wrong Email ID. Please check your details.");
    }
    else{
        setMyCheck(true);

        console.log("Email Successful");
        // history.push('/otp');

    }
}

const [myOtp, setMyOtp] = useState(new Array(4).fill(""));

const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setMyOtp([...myOtp.map((d, idx) => (idx === index ? element.value : d))]);

    //Focus next input
    if (element.nextSibling) {
        element.nextSibling.focus();
    }
};
let ans="";
for(let i=0;i<4;i++) ans=ans+myOtp[i]
let otp=Number(ans)
const handleOtp = async (e) =>{
    e.preventDefault();
    console.log(otp);
    const res = await fetch("http://127.0.0.1:5555/api/v1/users/verifyotp",{
    method:"POST",
    withCredentials: true,
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        otp
    })
});
const data = await res.json();
if(data.status === "error"){
    window.alert("Invalid OTP. Please check your details.");
}
else{
    console.log("OTP Check Successful");
    setMyCheck(false)
    history.push('/password');
}
}


  return (
    <>
        <Container>
            <FormWrap>
                <Icon><Logo src={img} alt="icon"  style={{height:'46px', width:'160px'}}/></Icon>
                <FormContent>
                    <Form method="POST" >
                        <FormH1>{myCheck?"Please Enter the OTP":"Please Enter your Email again"}</FormH1>
                        <FormLabel htmlFor='for'>{myCheck?"OTP":"Email"}</FormLabel>

                        {myCheck?
                            <CodeContainer>
                            {myOtp.map((data, index) => {
                            return (
                                <FormInputOtp
                                    placeholder="0"
                                    autoComplete='off'
                                    type="text"
                                    name="myOtp"
                                    maxLength="1"
                                    key={index}
                                    value={data}
                                    onChange={e => handleChange(e.target, index)}
                                    onFocus={e => e.target.select()}
                                />
                            );
                            })}
                            </CodeContainer>
                        :
                            <FormInput type='email' 
                            value={email} 
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required 
                            />
                        }


                        
                        {myCheck?
                        <FormButton type='submit' onClick={handleOtp}>Confirm OTP</FormButton>
                        :
                        <FormButton type='submit' onClick={handleSubmit}>Generate OTP</FormButton>
                        }
                        <Text to="/userhome">Go Back!!!</Text>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    </>
  )
}

export default Email;