import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";


export default function ContactMe(){
    return (
        <div className="contactContainer section" id="contact">
            <h3>Contacto</h3>
            <div className="contact">
                <div>
                    <TfiEmail className="mail"/>
                    <h4>Email</h4>
                    <h5>agustintern@gmail.com</h5>
                </div>
                <div>
                    <BsWhatsapp className="wp"/>
                    <h4>Número / Whatsapp</h4>
                    <h5>381-5307732</h5>
                </div>
            </div>
        </div>
    )
}