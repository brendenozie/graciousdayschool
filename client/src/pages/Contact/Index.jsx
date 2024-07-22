import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import "./Index.css";
import { Carousel } from "../../components/courousel";
import { Contact } from "../../components/contact";

const Contact = () => {
    const [loading, setLoading] = useState({});
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);



  return (
    <>
   
        <Contact />
    
    </>
  );
};

export default Contact;
