import React, { useState, useEffect } from "react";
import JsonData from "../../data/data.json";
import "./Index.css";
import { Carousel } from "../../components/courousel";

const HomeMainbar = () => {
    const [loading, setLoading] = useState({});
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);



  return (
    <>
   
        <Carousel data={landingPageData.About}/>
        
        <div id="overviews" class="section wb">
            <div class="container">
                <div class="section-title row text-center">
                    <div class="col-md-8 offset-md-2">
                        <h3>WHAT WE OFFER</h3>
                        <p class="lead">At Gracious Imabet School, we provide a nurturing and stimulating learning environment with a focus on academic excellence and personal growth. Our dedicated educators and comprehensive curriculum ensure students receive a well-rounded education, preparing them for future success. We also offer a variety of extracurricular activities to foster creativity, teamwork, and leadership skills.</p>
                    </div>
                </div>{/* end title */}
            
                <div class="hmv-box">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="inner-hmv">
                                    <div class="icon-box-hmv"><i class="flaticon-study"></i></div>
                                    <h3>CBC Curriculum</h3>
                                    <div class="tr-pa">C</div>
                                    <p>The CBC (Competency-Based Curriculum) emphasizes practical skills and knowledge application, fostering critical thinking, creativity, and problem-solving abilities in students.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="inner-hmv">
                                    <div class="icon-box-hmv"><i class="flaticon-online"></i></div>
                                    <h3>Coding Classes</h3>
                                    <div class="tr-pa">C</div>
                                    <p>Our coding classes offer hands-on learning in various programming languages and technologies, empowering students to develop problem-solving skills and build real-world applications.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="inner-hmv">
                                    <div class="icon-box-hmv"><i class="flaticon-achievement"></i></div>
                                    <h3>Expert Teachers</h3>
                                    <div class="tr-pa">E</div>
                                    <p>Our expert teachers bring a wealth of knowledge and experience to the classroom, providing personalized instruction and mentorship.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                {/* <div class="services hmv-box section" id="services">
                    <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="icon icon-box-hmv">
                            <img src="../images/service-01.png" alt="online degrees"/>
                            </div>
                            <div class="main-content">
                            <h4>CBC Curriculum</h4>
                            <p>The CBC (Competency-Based Curriculum) emphasizes practical skills and knowledge application, fostering critical thinking, creativity, and problem-solving abilities in students.</p>
                            <div class="main-button">
                                <a href="#"></a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="icon icon-box-hmv">
                            <img src="../images/service-02.png" alt="short courses"/>
                            </div>
                            <div class="main-content">
                            <h4>Coding Classes</h4>
                            <p>Our coding classes offer hands-on learning in various programming languages and technologies, empowering students to develop problem-solving skills and build real-world applications</p>
                            <div class="main-button">
                                <a href="#"></a>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-4 col-md-6 col-12">
                        <div class="service-item">
                            <div class="icon icon-box-hmv">
                            <img src="../images/service-03.png" alt="web experts"/>
                            </div>
                            <div class="main-content">
                            <h4>Expert Teachers</h4>
                            <p>Our expert teachers bring a wealth of knowledge and experience to the classroom, providing personalized instruction and mentorship. </p>
                            <div class="main-button">
                                <a href="#"></a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div> */}


            </div>{/* end container */}
        </div>
        {/* end section */}

        <div id="overviews" class="section wb">
            <div class="container">
                <div class="section-title row text-center">
                    <div class="col-md-8 offset-md-2">
                        <h3>About</h3>
                        <p class="lead">A learning  centre in komarocks sector one and in kayole, Embakasi East in Nairobi Kenya which offers quality 
    and affordable education  from Early Childhood  to primary level to the  low class and vulnerable children 
    in the community.</p>
                    </div>
                </div>{/* end title */}
            
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="message-box">
                            <h4>Started in 2004</h4>
                            <h2>Welcome to Gracious Imabet Day education centre</h2>
                            <p>A learning  centre in komarocks sector one, Embakasi East in Nairobi Kenya which offers quality 
    and affordable education  from Early Childhood  to primary level to the  low class and vulnerable children 
    in the community.</p>

                            <p> To impact sound knowledge and firm foundation to learners which will enable them to acquire good personality and
    give back to the community positively. </p>

                            <a href="/" class="hover-btn-new orange"><span>Learn More</span></a>
                        </div>{/* end messagebox */}
                    </div>{/* end col */}
                    
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="post-media wow fadeIn">
                            <img src="images/about_02.jpg" alt="" class="img-fluid img-rounded"/>
                        </div>{/* end media */}
                    </div>{/* end col */}
                </div>
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="post-media wow fadeIn">
                            <img src="images/about_03.jpg" alt="" class="img-fluid img-rounded"/>
                        </div>{/* end media */}
                    </div>{/* end col */}
                    
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                        <div class="message-box">
                            <h2>Gracious Imabet Day School was started  in May, 2004 with 7pupils.</h2>
                            <p>Our performance has always shown an upward trend over the years since 2012.
    We offer free1 feeding programme for  playgroup pupils ,free french and computer  lessons from grade 1 to 8.
    </p>

                            <p> We have very 
    qualified staff which is well conversant with the new CBC.</p>

                            <a href="/" class="hover-btn-new orange"><span>Learn More</span></a>
                        </div>{/* end messagebox */}
                    </div>{/* end col */}
                    
                </div>{/* end row */}
            </div>{/* end container */}
        </div>
        {/* end section */}

        <section class="section lb page-section">
            <div class="container">
                <div class="section-title row text-center">
                    <div class="col-md-8 offset-md-2">
                        <h3>Our history</h3>
                        <p class="lead">Gracious Imabet Day School was started  in May, 2004 with 7pupils.</p>
                    </div>
                </div>{/* end title */}
                <div class="timeline">
                    <div class="timeline__wrap">
                        <div class="timeline__items">
            
                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2004</h2>
                                    <p>Gracious Imabet Day School was established in May with 7 pupils.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2005</h2>
                                    <p>First cohort of pupils completed their first year at Gracious Imabet  Day School.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2007</h2>
                                    <p>Introduction of additional extracurricular activities such as sports and music.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2009</h2>
                                    <p>Expansion of the school premises to accommodate more pupils. Enrollment increased to 50 pupils.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2010</h2>
                                    <p>Launch of the school’s first library and computer lab.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2012</h2>
                                    <p>Notable improvement in academic performance; upward trend in school performance begins.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2013</h2>
                                    <p>Introduction of free French lessons for Grade 1 to 8 pupils.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2014</h2>
                                    <p>Celebrated 10th anniversary with a special event involving the local community. Initiation of the free feeding program for playgroup pupils.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2015</h2>
                                    <p>Increased enrollment to 200 pupils. Recognition for excellence in local academic competitions.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2016</h2>
                                    <p>Integration of the new Competency-Based Curriculum (CBC). Staff training and workshops to align with the CBC.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2017</h2>
                                    <p>Launch of a free computer literacy program for Grade 1 to 8 pupils. Significant improvements in infrastructure, including new classrooms and playground facilities.</p>
                                </div>
                            </div>

                            <div class="timeline__item">
                                <div class="timeline__content img-bg-03">
                                    <h2>2018</h2>
                                    <p>Partnership with local organizations for community service and outreach programs. Record high in pupil performance in national examinations.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div class="section cl">
            <div class="container">
                <div class="row text-left stat-wrap">
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-study"></i></span>
                        <p class="stat_count">12000</p>
                        <h3>Students</h3>
                    </div>{/* end col */}

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-online"></i></span>
                        <p class="stat_count">240</p>
                        <h3>Courses</h3>
                    </div>{/* end col */}

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <span data-scroll class="global-radius icon_wrap effect-1 alignleft"><i class="flaticon-years"></i></span>
                        <p class="stat_count">17</p>
                        <h3>Years Completed</h3>
                    </div>{/* end col */}
                </div>{/* end row */}
            </div>{/* end container */}
        </div>{/* end section */}

        <div id="testimonials" class="parallax section db parallax-off" style={{backgroundImage:"url('images/parallax_04.jpg')"}}>
            <div class="container">
                <div class="section-title text-center">
                    <h3>Testimonials</h3>
                    <p>I am incredibly grateful for the education and support I received at Gracious Imabet Day. The teachers here are dedicated and passionate about their subjects, making learning both engaging and effective. The school's commitment to fostering a nurturing and inclusive environment allowed me to thrive academically and personally.</p>
                </div>{/* end title */}

                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="testi-carousel owl-carousel owl-theme">
                            <div class="testimonial clearfix">
                                <div class="testi-meta">
                                    <img src="images/testi_01.png" alt="" class="img-fluid"/>
                                    <h4>James Fernando </h4>
                                </div>
                                <div class="desc">
                                    <h3><i class="fa fa-quote-left"></i> Wonderful Support!</h3>
                                    <p class="lead">I am incredibly grateful for the education and support I received at Gracious Imabet  Day. The teachers' dedication and passion made learning both engaging and effective.</p>
                                </div>
                                {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}

                            <div class="testimonial clearfix">
                                <div class="testi-meta">
                                    <img src="images/testi_02.png" alt="" class="img-fluid"/>
                                    <h4>Jacques Philips </h4>
                                </div>
                                <div class="desc">
                                    <h3><i class="fa fa-quote-left"></i> Awesome Services!</h3>
                                    <p class="lead">The school's nurturing and inclusive environment allowed me to thrive academically and personally. Diverse extracurricular activities helped me discover my interests and develop new skills.</p>
                                </div>
                                {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}

                            <div class="testimonial clearfix">
                                <div class="testi-meta">
                                    <img src="images/testi_03.png" alt="" class="img-fluid "/>
                                    <h4>Venanda Mercy </h4>
                                </div>
                                <div class="desc">
                                    <h3><i class="fa fa-quote-left"></i> Great & Talented Team!</h3>
                                    <p class="lead">The friendships I formed and the experiences I gained have left a lasting positive impact on my life. I wholeheartedly recommend Gracious Imabet Day to any student looking for a well-rounded and enriching educational experience. </p>
                                </div>
                                {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}
                            <div class="testimonial clearfix">
                                <div class="testi-meta">
                                    <img src="images/testi_01.png" alt="" class="img-fluid"/>
                                    <h4>James Fernando </h4>
                                </div>
                                <div class="desc">
                                    <h3><i class="fa fa-quote-left"></i> Wonderful Support!</h3>
                                    <p class="lead">They have got my project on time with the competition with a sed highly skilled, and experienced & professional team.</p>
                                </div>
                                {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}

                            <div class="testimonial clearfix">
                                <div class="testi-meta">
                                    <img src="images/testi_02.png" alt="" class="img-fluid"/>
                                    <h4>Jacques Philips </h4>
                                </div>
                                <div class="desc">
                                    <h3><i class="fa fa-quote-left"></i> Awesome Services!</h3>
                                    <p class="lead">Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you completed.</p>
                                </div>
                                {/* end testi-meta */}
                            </div>
                            {/* end testimonial */}

                            <div class="testimonial clearfix">
                                <div class="testi-meta">
                                    <img src="images/testi_03.png" alt="" class="img-fluid"/>
                                    <h4>Venanda Mercy </h4>
                                </div>
                                <div class="desc">
                                    <h3><i class="fa fa-quote-left"></i> Great & Talented Team!</h3>
                                    <p class="lead">The master-builder of human happines no one rejects, dislikes avoids pleasure itself, because it is very pursue pleasure. </p>
                                </div>
                                {/* end testi-meta */}
                            </div>{/* end testimonial */}
                        </div>{/* end carousel */}
                    </div>{/* end col */}
                </div>{/* end row */}
            </div>{/* end container */}
        </div>{/* end section */}

        <div class="parallax section dbcolor">
            <div class="container">
                <div class="row logos">
                    <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="/"><img src="k.fl" alt="" class="img-repsonsive"  style={{opacity: "0"}}/></a>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="/"><img src="" alt="" class="img-repsonsive"  style={{opacity: "0"}}/></a>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="/"><img src="" alt="" class="img-repsonsive"  style={{opacity: "0"}}/></a>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="/"><img src="" alt="" class="img-repsonsive"  style={{opacity: "0"}}/></a>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="/"><img src="" alt="" class="img-repsonsive"  style={{opacity: "0"}}/></a>
                    </div>
                    <div class="col-md-2 col-sm-2 col-xs-6 wow fadeInUp">
                        <a href="/"><img src="" alt="" class="img-repsonsive"  style={{opacity: "0"}}/></a>
                    </div>
                </div>{/* end row */}
            </div>{/* end container */}
        </div>{/* end section */}
    
    </>
  );
};

export default HomeMainbar;
