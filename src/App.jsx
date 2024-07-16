import React, { useState, useEffect } from "react";
import { Header } from "./components/header";
// import { Features } from "./components/features";
// import { About } from "./components/about";
// import { Services } from "./components/services";
// import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
// import { Team } from "./components/Team";
// import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Carousel } from "./components/courousel";

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



const App = () => {
    const [loading, setLoading] = useState({});
    const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  
  
   useEffect(() => {
        // loadScript(`${process.env.PUBLIC_URL}/js/plugin.min.js`)
        loadScript(`js/all.js`)
        loadScript(`js/custom.js`)
        loadScript(`js/timeline.min.js`)
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
        // loadScript(`${process.env.PUBLIC_URL}/js/main.js`)        
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
      <Carousel data={landingPageData.About}/>
      <div id="overviews" class="section wb">
        <div class="container">
            <div class="section-title row text-center">
                <div class="col-md-8 offset-md-2">
                    <h3>About</h3>
                    <p class="lead">A learning  centre in komarocks sector one, Embakasi East in Nairobi Kenya which offers quality 
and affordable education  from Early Childhood  to primary level to the  low class and vulnerable children 
in the community.</p>
                </div>
            </div>{/* end title */}
        
            <div class="row align-items-center">
                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div class="message-box">
                        <h4>Started in 2004</h4>
                        <h2>Welcome to Gracious Day education centre</h2>
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
                        <h2>Gracious Day School was started  in May, 2004 with 7pupils.</h2>
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
    </div>{/* end section */}

    <section class="section lb page-section">
		<div class="container">
			 <div class="section-title row text-center">
                <div class="col-md-8 offset-md-2">
                    <h3>Our history</h3>
                    <p class="lead">Gracious Day School was started  in May, 2004 with 7pupils.</p>
                </div>
            </div>{/* end title */}
			<div class="timeline">
				<div class="timeline__wrap">
					<div class="timeline__items">
          
<div class="timeline__item">
    <div class="timeline__content img-bg-03">
        <h2>2004</h2>
        <p>Gracious Day School was established in May with 7 pupils.</p>
    </div>
</div>

<div class="timeline__item">
    <div class="timeline__content img-bg-03">
        <h2>2005</h2>
        <p>First cohort of pupils completed their first year at Gracious Day School.</p>
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
                <p>I am incredibly grateful for the education and support I received at Gracious Day. The teachers here are dedicated and passionate about their subjects, making learning both engaging and effective. The school's commitment to fostering a nurturing and inclusive environment allowed me to thrive academically and personally.</p>
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
                                <p class="lead">I am incredibly grateful for the education and support I received at Gracious Day. The teachers' dedication and passion made learning both engaging and effective.</p>
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
                                <p class="lead">The friendships I formed and the experiences I gained have left a lasting positive impact on my life. I wholeheartedly recommend Gracious Day to any student looking for a well-rounded and enriching educational experience. </p>
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
      {/* <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} /> */}

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
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
							<li><a href="#">About</a></li>
							<li><a href="#">Contact</a></li>
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
    </footer>{/* end footer */}
    {/* </div> */}
    </>
  );
};

export default App;
