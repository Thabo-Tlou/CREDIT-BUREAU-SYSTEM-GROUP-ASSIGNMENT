import React, { useState } from "react";
import "../styles/sign_up.css";
import logo from "../assets/images/logo.jpg";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    return ( <
        div >
        <
        div className = "container" >
        <
        div className = "Sign_up_container" >
        <
        h1 className = "sing_up_text" > Hello Again! < /h1> <
        p className = "welcome" >
        Enter your details to access your credit < br / > profile and insights <
        /p> <
        button type = "submit"
        className = "sign_in_button"
        onClick = {
            () => navigate("/") } >
        SIGN UP <
        /button> <
        /div>

        <
        div className = "sign_up_form_container" >
        <
        img src = { logo }
        alt = "logo"
        className = "logo2" / >
        <
        p className = "logo_title" > Bokamoso Credit Bureau < /p> <
        form className = "sign_up_form" >
        <
        h1 className = "create-sign" > Sign In to Your Account < /h1> <
        div className = "Icons"
        style = {
            { fontSize: "1.5rem", display: "flex", gap: "1rem" } } >
        <
        FaWhatsapp / >
        <
        FaFacebook / >
        <
        FaInstagram / >
        <
        /div>

        <
        input type = "text"
        placeholder = "Email"
        required className = "email" / >
        <
        br / >

        { /* Password with toggle */ } <
        div className = "password-wrapper" >
        <
        input type = { showPassword ? "text" : "password" }
        placeholder = "Password"
        className = "password"
        required /
        >
        <
        span className = "toggle-eye"
        onClick = {
            () => setShowPassword(!showPassword) } >
        { showPassword ? < FaEyeSlash / > : < FaEye / > } <
        /span> <
        /div>

        <
        br / >
        <
        input type = "checkbox"
        id = "remember"
        name = "remember_me"
        className = "terms_box" /
        >
        <
        label htmlFor = "remember"
        className = "terms" >
        Remember Me <
        /label> <
        button type = "submit"
        className = "sign_up_button" >
        Sign In <
        /button> <
        br / >
        <
        /form> <
        /div> <
        /div> <
        /div>
    );
};

export default SignIn;