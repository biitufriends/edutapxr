import React from 'react';
import NavbarFour from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import Footer from '../components/_App/Footer';

const PrivacyPolicy = () => {
    return (
        <>
			<NavbarFour />
			
			<PageBanner 
                pageTitle="Privacy Policy" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Privacy Policy"
            /> 
 
            <div className="privacy-policy-area ptb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="privacy-policy-content">

                                <img src="/images/edutapxr-privacy-policy.png" alt="image" />

                                <p><i>This Privacy Policy was last updated on September 1, 2021.</i></p>
                                <p><i>Welcome! to Edutapxr: a dedicated online education platform for immersive learning. Edutapxr brings school education content to a three-dimensional (3D) Augmented Reality (AR) learning app. Using Edutap, students learn their subjects with simulation and guided voice over.

This Privacy Policy describes what personal information we collect, how we use this information, how this information may be shared, and what choices and rights you have with respect to this information. Access and use of our Platform is subject to this Privacy Policy.

Our “Platform” is made up of Edutap, other sites, apps, products, and services on which this Privacy Policy is posted and that are Edutapxr-branded or operated by the xrlearn, including our plug-ins, embedded content made available on other sites, and browser extensions.

The terms “we,” “us,” or “our” refer to xrlearn, an Indian private limited company. By “you,” we are referring to visitors and users of any part of our Platform.</i></p>
                                <h2> Collection of Information</h2>
                                

                                
                                    <p>We collect personal information that you provide us, from third parties, and automatically when you use our Platform.</p>
                                
                                <h3><span>1.</span> Information You Provide Us</h3>
                                <p>We collect information that you provide us, including your account and profile information, content you submit or post to our Platform, your purchase information, your communications, and information you provide to us as part of surveys and contests.</p>
                                <h3><span>2.</span> Account and Profile Information</h3>
                                <p>When you create an account on our Platform, we collect information you provide us, like your name, contact number ,email address, gender, age, and profile information. If you are a professional, you may also provide us information related to your business, including a business description and areas served.</p>
                                <h3><span>3.</span> Content You Submit</h3>
                                <p>We collect information and content that you submit to our Platform, including comments, reviews, searches, other types of content provided in our Edutapxr.</p>
                                <h3><span>4.</span> Purchases</h3>
                                <p>If you purchase or sell products or services or make or receive payments within our Platform, we collect certain information in order to complete your purchases, sales, and payments, such as your phone number, address, and payment method (for example, credit card or bank account information). If you participate in our Trade Program or Business Program, you may be asked to provide proof that you are eligible for the program or for a tax exemption.</p>
                                <h3><span>5.</span> Communications</h3>
                                <p>When you communicate with us (via email, phone, through our Platform, or otherwise) and when you use our Platform to communicate with others, we may record, monitor, or otherwise collect details about your communications (including call time, and call duration). We will provide you notice or obtain your consent in accordance with applicable law before recording or monitoring any of these calls. Otherwise, to the extent you communicate with professionals, sellers, and other users outside our Platform, those communications are not subject to this Privacy Policy.</p>
                                <h3><span>6.</span> Surveys and Contests</h3>
                                <p>If you participate in our surveys, contests, or promotions, we will collect the information you provide to us.</p>
                                <h3><span>7.</span> Information from Others</h3>
                                <p>We collect information that others make available to us, including information from other platforms, publicly available information, information from other users of our Platform, information from our partners, service providers, and corporate affiliates, and information from third-party sites.</p>
                                <h3><span>8.</span> Other Platforms</h3>
                                <p>We may receive information about you from third-party platforms when you allow the third-party platform to share this information with us or allow Edutap to obtain this information from the third party. For example, you may sign-up for our Platform through Facebook, Google, or Apple; upload your contacts from your third-party email service; use our Platform (or a third-party integration on our Platform) to manage your calendar on another platform or to manage and send communications (e.g., email or text messages).</p>
                                <h3><span>9.</span> Publicly Available Information</h3>
                                <p>If you are a school or educational institution, we may collect information about you from publicly available sources and where permitted by applicable law or with your permission, make it available as part of our Platform. For example, we may receive your name and contact information from industry associations and dealer networks in which you participate and display your affiliation with these organizations. We also may collect and display the details of any license you have using publicly available records.</p>
                                <h3><span>10.</span>Other Users and Customers</h3>
                                <p>Others may post content on our Platform that includes information about you (for example, as part reviews) or provide us your information in connection with using our Platform (participate in referral programs, and to advertise through our Platform). In order to enhance the quality of our Platform, professionals and sellers on our Platform may provide us information about your engagement with them, including whether you have contacted them or responded to them, whether your project has been completed, and whether you have received a product you have ordered.</p>
                                
                                <h3><span>11.</span> Our Partners and Service Providers</h3>

                                <p>We may receive information about you from our partners and service providers. For example, our payment processors may update your payment information, advertising partners may help us send communications to your address, and third parties may help us prevent fraud by verifying your contact information.</p>
                                <h3><span>12.</span> Edutapxr</h3>

                                <p>Subject to the privacy policies of our corporate affiliates and in accordance with applicable laws, we may receive information about you from them.</p>

                                <h3><span>13.</span> Third-Party Sites</h3>

                                <p>Certain third-party sites embed a Edutapxr plug-in, widget, or content, including through Edutapxr-branded buttons, badges, and slideshows and Edutapxr co-branded content partnerships. Our plug-ins, widgets, embedded content, and pixels may collect information pursuant to our Cookie Policy. You may also choose to use our browser extensions, which collect the information described in this Privacy Policy like the rest of our Platform.</p>
                                <h3><span>14.</span> Site Designer Websites</h3>

                                <p>Certain professional sites are developed or hosted by us (“Site Designer Website”). As with the rest of our Platform, we collect the information described in this Privacy Policy on the Site Designer Websites, including your messages to the professionals sent through those sites. These professionals collect usage information for their Site Designer Websites and receive your messages sent through those sites.</p>

                                <h3><span>15.</span> Automatically Collected Information</h3>

                                <p>Each time you access the Platform, information is sent to our server by your Internet browser or app and stored in our log files. We collect information about your use of our Platform, including your search activity, the pages you view, the date and time of your visit, and if you use our browser extensions, the content you interact with on third-party sites (for example, if you save an image from a third-party site to your Edutapxr account), and how you navigate and interact with a page or screen. We also collect information that your device provides to us in connection with your use of our Platform, such as your browser type, type of device, browser language, IP address, mobile carrier, unique device identifier, and requested and referring URLs.</p>

                                <h3><span>16.</span> Cookies and Similar Technologies</h3>

                                <p>We use cookies and similar technologies in connection with your use of our Platform to collect information related to what you see and interact with on our Platform and other Platform access and use.</p>

                                <h2> Use of Information</h2>
                                <p>We use the personal information we collect to provide, support, and personalize our Platform and to communicate with you about our Platform (on and off our Platform). The ways we do this include the following:</p>
                                <ol>
                                <li>To provide and improve our Platform and its features and functionality, including to display relevant content, fulfill your purchases through our Platform, process, store, and deliver your communications; to provide customer service and support; to respond to your inquiries or requests; to back-up our systems; and to improve the security of our Platform;</li>
                                <li>To evaluate use of our Platform for our business purposes and to provide and improve our products and services, including new and co-branded products and services and our Platform’s functionality;</li>
                                <li>To personalize your experience, such as tailoring the content and information made available to you and our support services;</li>
                                <li>To display relevant advertising (on our Platform and third-party sites) for us and other businesses and to evaluate the success of such advertising;</li>
                                <li>To communicate with you as described in our agreements with you this Privacy Policy;</li>
                                <li>To prevent fraud and to maintain a quality experience for our business purposes or legal reasons, including to filter for spam and communications that violate our agreements with you.</li>
                                <li>To enforce compliance with our agreements with you and applicable law; to comply with our legal obligations; to prosecute or defend a lawsuit, arbitration, or similar legal proceeding; to respond to lawful requests by public authorities (including national security or law enforcement requirements);</li>
                                <li>To perform research and analysis for our business purposes; and</li>
                                <li>To award badges and similar designations and if you decide to participate, to administer surveys, contests, and promotions.</li>
                                </ol>
                                <p>If you provide us information about your contacts (for example, when you sign up for our Platform through Facebook or any other), in order to facilitate a more connected experience, we may inform your contacts who have accounts on our Platform that you also have joined our Platform and follow them on your behalf so that you may view their public activities on our Platform.</p>

                                <p>We may use your communications generally for quality assurance purposes and training and to improve our products and services. We may use your communications to understand and help manage the quality of requests received, and responses sent, by professionals and sellers on our Platform and to provide them with feedback. We may use automated technology to review your communications and improve user experience.</p>

                                <p>We may use your log-in information, cookie information, device information, IP addresses, and other information to identify you and log your use across devices, our Platform, and third-party sites. We may use this information to personalize your experience on our Platform.</p>

                                <p>For your convenience, we and our payment processors will store information about the payment method you use in connection with the Platform. Note that while our payment processors may store your complete credit card number, Edutapxr does not. You may remove or change your payment method on Edutapxr through your settings.</p>

                                <p>If you make purchases on Edutapxr as a visitor and subsequently create an account, for your reference, we will make information available to you about any prior purchases completed using the email address for your account.</p>

                                <p>Any use of your information that is incompatible with these uses will be disclosed to you in advance so that you may opt out of, or agree to, such uses at your discretion.</p>

                                <h2>Sharing Your Information</h2>
                                <p>We do share your personal contact information (such as your email address and mobile number associated with your account registration) to third parties to use for our marketing purposes. We share personal information in the following ways:</p>

                                <h3>Platform Visitors and Users</h3>

                                <p>One of the main purposes of having a Edutapxr account is to learn with immersive content. If you are a school or institution on Edutapxr, we may also display the following information in order to help visitors and users: your last visit to Edutapxr, aggregated information on our Platform about your Platform activity (e.g.reviews), and information that is publicly available from third parties. We have policies that place restrictions on Platform visitors’ and users’ use of information and content you choose to make available publicly through the Platform.</p>
                                <h3>Schools and Other Educational institution on our Platform</h3>

                                <p>Edutapxr Platform may share your information to students about your organization and display your reviews. Any information collected through surveys are used by the platform to show relevant content.</p>

                                <h3>Legal Obligations</h3>

                                <p>We may disclose information from or about you, as required or permitted by applicable law, if we believe that such disclosure is reasonably necessary to (a) comply with legal process and law enforcement instructions and orders, such as a search warrant, subpoena, statute, judicial proceeding, or other legal process served on us, a service provider, or a partner (which may include disclosure to law enforcement, courts, or governmental authorities); (b) prevent, investigate, or identify possible wrongdoing in connection with our Platform; (c) protect our rights, reputation, property, or that of our visitors, users, corporate affiliates, or the public; or (d) enforce compliance with our agreements with you.</p>

                                <h2>Communications</h2>
                                <p>An essential part of our services that you sign up for when you create an account on our Platform is to receive communications from the Edutapxr group through email , mobile number and our Platform. If you use our mobile app or provide us with your cell phone number, these communications also include text messages and push notifications.</p>

                                <p>If you provide us your phone number, we may call and otherwise contact you to help you with using the Platform (e.g., to discuss your relevant content based on class , subjects and topics ). If you are a school or other education institution , we may use your contact information (whether publicly available or provided to Edutap) to call and otherwise contact you about our Platform, including to market and sell our products or services or those available on our Platform.</p>

                                <h2>Your Choices and Rights</h2>
                                <p>We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws. We may ask you to verify your identity in order to help us respond to your request securely and efficiently.</p>
                                <p>Even where not legally required, we will use reasonable efforts to complete requests to access or delete your personal information. We will consider your request in accordance with applicable laws.</p>

                                <h2>Account Termination and Data Retention</h2>
                                <p>To deactivate your account as a school or student on Edutapxr, please contact us as described in the Contact Us section of this Privacy Policy. When you deactivate your account, you will cease to provide ongoing or future data to us that is associated with your account. Your Edutapxr profile will no longer be accessible on the Platform but in accordance with applicable law, your photos, reviews, and other content may still be available through our Platform. In order to request permanent deletion of the personal information associated with your account, please contact us as described in the Contact Us section.</p>

                                <p>We will keep your personal information only for as long as necessary to fulfill the purposes for which we are processing your personal information unless the law permits or requires us to retain your personal information for a longer period. For example, we may need to keep your personal data for quality assurance purposes for our Platform or to defend future legal claims. We also will retain de-identified information after your account has been deleted. We do not control information or content that others have copied out of our Platform. Please note that copies of information that you have updated, modified, or deleted may continue to reside in our systems for a period of time, and we may maintain copies of this information as part of our business records.</p>

                                <h2>Children</h2>
                                <p>Our Platform is intended for general audiences and children under 16. We do collect personal information from children under 16 with parent’s consent through our platform as mobile OTP verification process considering the mobile OTP is only accessible by parents or guardian.</p>

<h2>Data Security</h2>
<p>We use reasonable and appropriate measures to protect your personal information from loss, misuse, unauthorized access, disclosure, alteration, and destruction, taking into account the risks involved in the processing and the nature of the personal information.</p>

<h2>Updates to this Privacy Policy</h2>
<p>We may revise this Privacy Policy from time to time. The most current version of our Privacy Policy will govern our use of information about you. If we make material changes to our Privacy Policy, we will notify you by email or by posting a notice on our Platform or by other means, to offer you an opportunity to review the changes before they become effective. By continuing to access or use our Platform after those changes become effective, you are subject to the revised Privacy Policy.</p>

<h2>Google Play Privacy Policy</h2>
<p>We agree that our products that are available through Google Play will protect your privacy and legal rights. As you provide us with, or our product accesses or uses your usernames, passwords, or other login or personal information, we agree to make you aware that the information that is available with us will be provided with legally adequate privacy notice and protection. Further, our product may only use that information for the limited purposes for which we have been given permission to do so.</p>

<p>Our product will store your personal or sensitive information securely and only for as long as it is needed. However, in any scenario, if you opt into a separate agreement with us which will allow us to store or use personal or sensitive information directly related to our products, then the terms of that separate agreement will govern the use of such information.</p>

<p>Also, If you provide Google Account information, we will only use that information to access your Google Account when, and for the limited purposes for which we have been given your permission to do so.</p>

<h2>Contact Us</h2>
<p>Edutapxr is responsible for the use of your personal information. If you have questions or comments about this Privacy Policy (including about the manner in which we or our service providers treat your personal information), you may contact us in the following ways:</p>

<li>Email us at support@edutapxr.com</li>
<li>You can also contact us through mobile or phone as mentioned in ‘Contact Us’ section of our website.</li>
                                
                            </div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    .privacy-policy-content img {
                        border-radius: 5px;
                        margin-bottom: 30px;
                    }
                    .privacy-policy-content h3 {
                        margin-top: 25px;
                        margin-bottom: 15px;
                        font-size: 25px;
                    }
                    .privacy-policy-content .blockquote, .privacy-policy-content blockquote {
                        margin-top: 25px;
                        margin-bottom: 30px;
                        background-color: #e6f2f5;
                        text-align: left !important;
                        padding: 25px !important;
                        border-radius: 5px;
                    }
                    .privacy-policy-content .blockquote p, .privacy-policy-content blockquote p {
                        margin-bottom: 0;
                        line-height: 1.8;
                        font-size: 15px !important;
                        font-weight: 500;
                    }
                    .privacy-policy-content .blockquote::after, .privacy-policy-content blockquote::after {
                        display: none;
                    }
                    .privacy-policy-content .blockquote::before, .privacy-policy-content blockquote::before {
                        display: none;
                    }
                    .privacy-policy-content ol, .privacy-policy-content ul {
                        margin-top: 20px;
                    }
                    .privacy-policy-content ol li, .privacy-policy-content ul li {
                        margin-bottom: 10px;
                        color: var(--paragraph-color);
                        line-height: 1.8;
                        font-weight: 500;
                        font-size: 15px;
                    }
    
                    // Responsive Style
                    @media only screen and (max-width: 767px) {
                        .privacy-policy-content h3 {
                            font-size: 22px;
                        }
                    }

                    @media only screen and (min-width : 768px) and (max-width : 991px) {
                        
                    }

                    @media only screen and (min-width : 992px) and (max-width : 1199px) {
                        
                    }
                `}</style>
            </div>
  
			<Footer />
		</>
    )
}

export default PrivacyPolicy;