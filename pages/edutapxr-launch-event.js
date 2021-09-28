import React from 'react';
import NavbarFour from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import EventsTime from '../components/EventsDetails/EventsTime';
import EventSidebar from '../components/EventsDetails/EventSidebar';
import Footer from '../components/_App/Footer';
import EventSpeakers from '../components/Common/EventSpeakers';
import CTA from '../components/Common/CTA';

const EventsDetails = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Edutapxr Launch Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Edutapxr Launch Details"
            /> 

            <>
                <div className="events-details-area ptb-100">
                    <div className="container">
                        <div className="events-details-image">
                            <img src="/images/events/events-details.jpg" alt="image" />

                            {/* Events Time */}
                            <EventsTime />
                        </div>

                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="events-details-header">
                                    <ul>
                                        <li><i className="ri-calendar-line"></i >Monday, 11 October 2021</li>
                                        <li><i className="ri-map-pin-line"></i> Online Webinar</li>
                                        <li><i className="ri-time-line"></i> 15.00 PM</li>
                                    </ul>
                                </div>

                                <div className="events-details-location">
                                    
                                </div>

                                <div className="events-details-desc">
                                    <h3>About The Event</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>

                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>

                                    <h3>Where The Event?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>
                                    
                                    <h3>Who This Event Is For?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit laborum.</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <EventSidebar />
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .events-details-image {
                        position: relative;
                        margin-bottom: 50px;
                    }
                    .events-details-image img {
                        border-radius: 5px;
                    }
                    .events-details-header {
                        margin-bottom: 30px;
                    }
                    .events-details-header ul {
                        margin-bottom: 0;
                        list-style-type: none;
                        background-color: #f8f9f8;
                        padding: 30px;
                        border-radius: 5px;
                    }
                    .events-details-header ul li {
                        display: inline-block;
                        margin-right: 20px;
                        color: var(--paragraph-color);
                        position: relative;
                        padding-left: 25px;
                        font-size: 14px;
                        font-weight: 500;
                    }
                    .events-details-header ul li i {
                        color: var(--main-color);
                        position: absolute;
                        left: 0;
                        top: 50%;
                        -webkit-transform: translateY(-50%);
                                transform: translateY(-50%);
                        font-size: 18px;
                    }
                    .events-details-header ul li:last-child {
                        margin-right: 0;
                    }
                    .events-details-location {
                        margin-bottom: 30px;
                    }
                    .events-details-location iframe {
                        height: 450px;
                        width: 100%;
                        border: none;
                    }
                    .events-details-desc h3 {
                        margin-bottom: 20px;
                        font-size: 25px;
                    }
                    .events-details-desc h3:not(:first-child) {
                        margin-top: 30px;
                    }
        
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .events-details-image {
                            margin-bottom: 30px;
                        }
                        .events-details-image h2 {
                            font-size: 22px;
                        }

                        .events-details-header ul {
                            padding: 25px;
                        }
                        .events-details-header ul li {
                            margin-bottom: 15px;
                        }
                        .events-details-header ul li:last-child {
                            margin-bottom: 0;
                        }
                        .events-details-desc h3 {
                            font-size: 22px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        
                    }
                `}</style>
            </>

            <EventSpeakers />
            
            <div className="pb-100">
                {/* <CTA /> */}
            </div>

			<Footer />
		</>
    )
}

export default EventsDetails;