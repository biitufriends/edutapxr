import React from 'react';
import NavbarFour from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

const FAQs = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="FAQs" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="FAQs"
            /> 
			
            <div className="faq-area ptb-100">
                <div className="container">
                    <div className="faq-accordion accordion-box">
                        <Accordion allowZeroExpanded preExpanded={['a']}>
                            <AccordionItem uuid="a">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Why should I use the Edutaps app?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Edutaps is a highly engaging and interactive way of learning and education for higher retention of knowledge-making learners ahead of time and competition.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="b">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Who can benefit from Edutaps app?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Currently, Edutaps is meant for school-level education from classes 6 to 12 and can benefit them in their learning. However, it has infinite potential in all fields.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="c">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    How is Edutaps  different from other e-Learning apps?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Edutaps is a totally different and innovative concept of learning with highly engaging content in the augmented world.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="d">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Does Edutaps app helps apart from tuition and coaching?  
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Definitely. Tuition and coaching do not visualize the learning content, the retention of the subject is less as students have difficulty in memorizing and recalling. Edutaps overcomes this problem by making the subject feel visually by interactive 3D augmented reality application leading to higher retention of the subject.</p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="e">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    Do I need a compatible device for this app?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>Yes, your device or smartphone should support Augmented Reality, for that you can visit our website and check Augmented Reality (AR) supported device list or click <Link href="#">here.</Link></p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem uuid="f">
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    where can I get the Edutaps app ?
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p>You can download the Edutaps app from Google play store and app store. Even you can get link from product page of our website. </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    <div className="ticket-box">
                        <h3>Have Any Question in Mind Please Call or Mail Us</h3>

                        <div className="box-one">
                            <i className="ri-customer-service-line"></i>
                            <a href="tel:+918250440114">(+91) 8250-440-114</a>
                        </div>

                        <div className="box-two">
                            <i className="ri-earth-line"></i>
                            <a href="mailto:support@edutaps.com">support@edutaps.com</a>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="faq-shape-1">
                    <img src="/images/faq/shape-1.png" alt="image" />
                </div>
                <div className="faq-shape-2">
                    <img src="/images/faq/shape-2.png" alt="image" />
                </div>
                <div className="faq-shape-3">
                    <img src="/images/faq/shape-3.png" alt="image" />
                </div>
                <div className="faq-shape-4">
                    <img src="/images/faq/shape-4.png" alt="image" />
                </div>
                <div className="faq-shape-5">
                    <img src="/images/faq/shape-5.png" alt="image" />
                </div>
            </div>
	 
			<Footer />
		</>
    )
}

export default FAQs;