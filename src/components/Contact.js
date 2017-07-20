// libs
import React from 'react';
// components
import { FaGithubSquare, FaLinkedinSquare, FaFacebookSquare, FaTwitterSquare, FaInstagram, FaYoutubeSquare } from 'react-icons/lib/fa';
// assets
import ContactUs from '../img/landingimg.jpg';
import WimmaLogo from '../img/logo/wimmalablogo.png';

export default class Contact extends React.Component {
    render() {
        return (
            <section className="contact">
                <div className="container">
                    <h2>Contact</h2>
                    <hr />
                    <div className="contact-container">
                        <div className="left-side">
                            <h3>Marko "Narsu" Rintamäki</h3>
                            <p>marko.rintamaki (at) jamk.fi</p>
                            <br/>
                            <h3>Lauri Mäkinen</h3>
                            <p>lauri.makinen (at) jamk.fi</p>
                            <br />
                            <h3>Campus Dynamo</h3>
                            <h3>Piippukatu 2</h3>
                            <h3>40100 Jyväskylä Finland</h3>
                            <p>wimmalab (at) gmail.com</p>
                        </div>
                        <div className="right-side">
                            <img src={ContactUs} alt="ContactUs"></img>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <a className="wimmalogo" href="#page-top"><img src={WimmaLogo} alt='logo'></img></a>
                    <h5>You can also find us here</h5>
                    <div className="social-links">
                        <span><a href="https://github.com/wimmalab"><FaGithubSquare /></a></span>
                        <span><a href="https://www.linkedin.com/company-beta/22308846/"><FaLinkedinSquare /></a></span>
                        <span><a href="https://www.facebook.com/wimmalab/"><FaFacebookSquare /></a></span>
                        <span><a href="https://twitter.com/wimmalab"><FaTwitterSquare /></a></span>
                        <span><a href="https://www.instagram.com/wimmalab/"><FaInstagram /></a></span>
                        <span><a href="https://www.youtube.com/channel/UCe0Ssog7DURm_aTiPO2hUFw"><FaYoutubeSquare /></a></span>
                    </div>
                </div>
            </section>
        );
    }
}
