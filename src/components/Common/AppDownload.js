import React from "react";
// import "./DownloadApp.css"
export const AppDownload = () =>{
return(
    <section className="download-section bg-offwhite position-relative" id="downloadSection">
            <div className="mini-shapes d-none d-lg-block">
                <div className="mini-shape mini-shape-1">
                    <img src="assets/images/shapes/mini-shape-1.png" alt="shape"/>
                </div>
            </div>
            <div className="container">
                <div className="row align-items-center align-items-xl-start">
                    <div className="mobilepic col-lg-5 position-relative">
                        <div className="image-position image-position-top tab-pb-30 text-center text-lg-start">
                            <img src="assets/images/download.png" alt="download"/>
                        </div>
                    </div>
                    <div className="col-lg-7 pt-100 pb-100 tab-pt-0">
                        <div className="desk-pad-left-50 section-title section-title-left about-title m-0">
                            <small>Download Our Mobile App</small>
                            <h2>Book Your First Tour Through Our Mobile App</h2>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo.</p>
                            <div className="section-buttons justify-center justify-flex-start">
                                <a href="contact.html" className="btn main-btn">Download From Applestore <i className="icofont-brand-appstore"></i></a>
                                <a href="contact.html" className="btn main-btn main-btn-red">Download From Playstore <i className="flaticon-play-store"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)

}