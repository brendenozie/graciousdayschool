import React from "react";

export const Carousel = (props) => {
  return (
    <div id="carouselExampleControls" class="carousel slide bs-slider box-slider" data-ride="carousel" data-pause="hover" data-interval="false" >
		{/* <!-- Indicators --> */}
		<ol class="carousel-indicators">
			<li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
			<li data-target="#carouselExampleControls" data-slide-to="1"></li>
			<li data-target="#carouselExampleControls" data-slide-to="2"></li>
		</ol>
		<div class="carousel-inner" role="listbox">
			<div class="carousel-item active">
				<div id="home" class="first-section" style={{backgroundImage:"url('images/slider-01.jpeg')"}}>
					<div class="dtab">
						<div class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 text-right">
									<div class="big-tagline">
										<h2><strong>Gracious </strong> Day Imabet School</h2>
										<p class="lead">A dynamic center of excellence which nurtures young ones holistically and  
enables  them to be accepted in the community. </p>
											<a href="/contact" class="hover-btn-new"><span>Contact Us</span></a>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<a href="/about" class="hover-btn-new"><span>Read More</span></a>
									</div>
								</div>
							</div>
              {/* <!-- end row -->             */}
						</div>
            {/* <!-- end container --> */}
					</div>
				</div>
        {/* <!-- end section --> */}
			</div>
			<div class="carousel-item">
				<div id="home" class="first-section" style={{backgroundImage:"url('images/slider-02.jpeg')"}}>
					<div class="dtab">
						<div class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 text-left">
									<div class="big-tagline">
										<h2><strong>Gracious </strong> Day Imabet School</h2>
										<p class="lead">A dynamic center of excellence which nurtures young ones holistically and  
enables  them to be accepted in the community. </p>
											<a href="/contact" class="hover-btn-new"><span>Contact Us</span></a>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<a href="/about" class="hover-btn-new"><span>Read More</span></a>
									</div>
								</div>
							</div>
              {/* <!-- end row -->             */}
						</div>
            {/* <!-- end container --> */}
					</div>
				</div>
        {/* <!-- end section --> */}
			</div>
			<div class="carousel-item">
				<div id="home" class="first-section" style={{backgroundImage:"url('images/slider-02.jpeg')"}}>
					<div class="dtab">
						<div class="container">
							<div class="row">
								<div class="col-md-12 col-sm-12 text-center">
									<div class="big-tagline">
										<h2><strong>Gracious </strong> Day Imabet School</h2>
										<p class="lead">A dynamic center of excellence which nurtures young ones holistically and  
enables  them to be accepted in the community. </p>
											<a href="/contact" class="hover-btn-new"><span>Contact Us</span></a>
											&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
											<a href="/about" class="hover-btn-new"><span>Read More</span></a>
									</div>
								</div>
							</div>
              {/* <!-- end row -->             */}
						</div>
            {/* <!-- end container --> */}
					</div>
				</div>
        {/* <!-- end section --> */}
			</div>
			{/* <!-- Left Control --> */}
			<a class="new-effect carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
				<span class="fa fa-angle-left" aria-hidden="true"></span>
				<span class="sr-only">Previous</span>
			</a>

			{/* <!-- Right Control --> */}
			<a class="new-effect carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
				<span class="fa fa-angle-right" aria-hidden="true"></span>
				<span class="sr-only">Next</span>
			</a>
		</div>
	</div>
  );
};
