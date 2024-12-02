// Bismillahirahmanirahim

"use client"

import { MdWhatsapp } from "react-icons/md";

import { Alert, Button } from "react-bootstrap";
import { FaPhone } from "react-icons/fa";
import { WhatsAppWidget } from 'react-whatsapp-widget';
export function Tegihistin() {
  return (<div>
    <Alert style={{margin:7 ,background:"white"}} >
     <Button  href="tel:+905549765692"><FaPhone  /></Button> Call


  <WhatsAppWidget message=" Send your message" inputPlaceHolder="Type here" replyTimeText="Your messages wiil be answered inşaALLAH" sendButtonText="Send" companyName="Yekazad SC" phoneNumber="+905549765692" ></WhatsAppWidget>

  </Alert>
    </div>
  );
}