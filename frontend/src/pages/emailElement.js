import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 730px;
    // position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: var(--dblue);
`

export const FormWrap = styled.div`
    height: 650px;
    display: flex;
    flex-direction: column;
    justify-conttent: center;
    @media screen and (max-width: 480px){
        height: 80%;
    }
`
export const Icon = styled(Link)`
    margin: 15px 0 15px 25px ;
`
export const Logo = styled.img`
    width:14rem;
`
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 480px){
        padding: 10px
    }
`

export const Form = styled.form`
    background: var(--logoblue);
    max-width: 480px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 7px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
    @media screen and (max-width: 480px){
        padding: 32px 32px;
    }
`

export const CodeContainer = styled.div`
    display:flex;
    align-item: center;
    justify-content:center;
    margin:0 0 30px 0;
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color:var(--dblue);
    font-size: 20px;
    font-weight: 800;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color:var(--white);
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 7px;
`

export const FormInputOtp = styled.input`
    caret-color: transperant;
    background-color: rgba(241,250,238,0.9);
    border-radius: 10px;
    border: 1px solid var(--dblue);
    font-size: 30px;
    font-family: "Lato", san-serif;
    width:75px;
    height:80px;
    margin:10px;
    text-align:center;
    font-weight:300;
`


export const FormButton = styled.button`
    background: var(--dblue);
    padding: 16px 0;
    border: none;
    border-radius: 7px;
    color: var(--white);
    font-size: 20px;
    cursor:pointer;
`
export const Text = styled(Link)`
    text-align: center;
    margin-top: 24px;
    color: var(--white);
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
`
