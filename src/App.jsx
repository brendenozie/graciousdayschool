import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import HomeMainbar from "./pages/Index/Index";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import About from "./pages/About/Index";
import Blog from "./pages/Blog/Index";
import UploadGr from "./pages/UploadGraciousImage/Index";
// import { useSelector } from "react-redux";

export const scroll = new SmoothScroll('a[href*="/"]', {
  speed: 1000,
  speedAsDuration: true,
});

const loadScript = (src) => {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script')
      
      script.src = src
      script.addEventListener('load', function () {
        resolve()
      })
      script.addEventListener('error', function (e) {
        // reject(e)
        // console.log(e);
      })
      document.body.appendChild(script)
    //   document.body.removeChild(script)
    })
  };



const Layout = ({ children }) => {
    const [loading, setLoading] = useState({});
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  
  
   useEffect(() => {
        // loadScript(`${process.env.PUBLIC_URL}/js/plugin.min.js`)
        // loadScript(`js/all.js`)
        // loadScript(`js/custom.js`)
        // loadScript(`js/timeline.min.js`)
      setTimeout(() => {
        setTimeout(() => {
          setLoading(false)
          const elements = document.querySelectorAll('.timeline');
            if (elements.length > 0 && window.timeline) {
                window.timeline(elements, {
                forceVerticalMode: 700,
                mode: 'horizontal',
                verticalStartPosition: 'left',
                visibleItems: 5
                });
            }
        }, 500);       
      }, 200)
    }, [])
  

  return (
    <>
    {/* {/* LOADER */} 
	<div id="preloader">
        <div class="loader-container">
            <div class="progress-br float shadow">
            <div class="progress__item"></div>
            </div>
        </div>
    </div>
{/* {/* END LOADER */}	 
    {/* <div> */}
      {/* <Navigation /> */}
      
      <Header data={landingPageData.Header} />
        {children}
      <Footer/>
    {/* end footer */}
    {/* </div> */}
    </>
  );
};

const App = () => {

    // const {accessToken, loading} = useSelector(state => state.auth)
  
    // const history = useHistory()
  
    // useEffect(() => {
    //   if(!loading && !accessToken){
    //     history.push('/auth')
    //   }
    // }, [accessToken, loading, history])
  
    return (
        <Router>
      <Layout>
        <Routes>
        <Route exact path="/" element={<HomeMainbar/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/UploadGr" element={<UploadGr/>}/>
          {/* <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/recovery-password" element={<RecoveryPassword/>}/> */}
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Layout>
    </Router>
    )
  }

  
export default App;