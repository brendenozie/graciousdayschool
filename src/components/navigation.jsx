import React from "react";

export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="container-fluid">
				<a class="navbar-brand" href="index.html">
					<img src="images/logo.png" alt="" />
				</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars-host" aria-controls="navbars-rs-food" aria-expanded="false" aria-label="Toggle navigation">
					<span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbars-host">
					<ul class="navbar-nav ml-auto">
						<li class="nav-item active"><a class="nav-link" href="/">Home</a></li>
						<li class="nav-item"><a class="nav-link" href="/about">About Us</a></li>
						{/* <li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="course-grid-4.html">Course </a>
							
						</li> */}
						{/* <li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="blog.html" >Blog </a>
							
						</li> */}
						{/* <li class="nav-item"><a class="nav-link" href="teachers.html">Teachers</a></li> */}
						<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
					</ul>
					
				</div>
			</div>
		</nav>
    // <nav id="menu" className="navbar navbar-default navbar-fixed-top">
    //   <div className="container">
    //     <div className="navbar-header">
    //       <button
    //         type="button"
    //         className="navbar-toggle collapsed"
    //         data-toggle="collapse"
    //         data-target="#bs-example-navbar-collapse-1"
    //       >
    //         {" "}
    //         <span className="sr-only">Toggle navigation</span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //         <span className="icon-bar"></span>{" "}
    //       </button>
    //       <a className="navbar-brand page-scroll" href="#page-top">
    //         React Landing Page
    //       </a>{" "}
    //     </div>

    //     <div
    //       className="collapse navbar-collapse"
    //       id="bs-example-navbar-collapse-1"
    //     >
    //       <ul className="nav navbar-nav navbar-right">
    //         <li>
    //           <a href="#features" className="page-scroll">
    //             Features
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#about" className="page-scroll">
    //             About
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#services" className="page-scroll">
    //             Services
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#portfolio" className="page-scroll">
    //             Gallery
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#testimonials" className="page-scroll">
    //             Testimonials
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#team" className="page-scroll">
    //             Team
    //           </a>
    //         </li>
    //         <li>
    //           <a href="#contact" className="page-scroll">
    //             Contact
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
};
