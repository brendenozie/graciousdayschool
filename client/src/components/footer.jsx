import React from "react";

export const Footer = (props) => {
  return (
    <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-xs-12">
                        <div class="widget clearfix">
                            <div class="widget-title">
                                <h3>About US</h3>
                            </div>
                            <p> The learning  centre in komarocks sector one, Embakasi East in Nairobi Kenya which offers quality 
    and affordable education  from Early Childhood  to primary level to the  low class and vulnerable children 
    in the community.</p>   
                            <div class="footer-right">
                                <ul class="footer-links-soi">
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                </ul>{/* end links */}
                            </div>						
                        </div>{/* end clearfix */}
                    </div>{/* end col */}

                    <div class="col-lg-4 col-md-4 col-xs-12">
                        <div class="widget clearfix">
                            <div class="widget-title">
                                <h3>Information Link</h3>
                            </div>
                            <ul class="footer-links">
                                <li><a href="/">Home</a></li>
                                <li><a href="/blog">Blog</a></li>
                                <li><a href="/about">About</a></li>
                                <li><a href="/contact">Contact</a></li>
                            </ul>{/* end links */}
                        </div>{/* end clearfix */}
                    </div>
                    {/*  end col  */}
                    
                    <div class="col-lg-4 col-md-4 col-xs-12">
                        <div class="widget clearfix">
                            <div class="widget-title">
                                <h3>Contact Details</h3>
                            </div>

                            <ul class="footer-links">
                                <li><a href="mailto:graciousdayschool@gmail.com">graciousdayschool@gmail.com</a></li>
                                <li><a href="/">www.graciousdayschool.com</a></li>
                                <li>Nairobi, Kenya</li>
                                <li>+254 712 976 263</li>
                                <li>+254 721 657 723</li>
                            </ul>{/* end links */}
                        </div>{/* end clearfix */}
                    </div>{/* end col */}
                    
                </div>{/* end row */}
            </div>{/* end container */}
        </footer>
  );
};
