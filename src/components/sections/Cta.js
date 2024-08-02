import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import './Cta.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const propTypes = {
    ...SectionProps.types,
    split: PropTypes.bool
}

const defaultProps = {
    ...SectionProps.defaults,
    split: false
}

const Cta = ({
                 className,
                 topOuterDivider,
                 bottomOuterDivider,
                 topDivider,
                 bottomDivider,
                 hasBgColor,
                 invertColor,
                 split,
                 ...props
             }) => {

    const outerClasses = classNames(
        'cta section center-content-mobile reveal-from-bottom',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    return (
        <>
            <section
                {...props}
                className={outerClasses}
            >
                <div className="container max-width">
                    <div className="cta-inner background-green ">
                        <div className="cta-content">
                            <h2 className="cta-title ">
                                Subscribe to<br/>
                                our Newsletter
                            </h2>
                            <div className="cta-action font-size-22">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="cta-input"
                                />
                                <button className="cta-button">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    );
}


const Footer = () => {
    return (
        <footer className="site-footer ">
            <div className="container ">
                <div className="footer-content">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <p><strong>Email</strong><br/>xxxx@ezout.com</p>
                        <p><strong>Phone</strong><br/>88888888</p>
                        <p><strong>Address</strong><br/>100 Fore St, Portland, ME,USA</p>
                    </div>
                    <div className="vertical-line"></div>
                    <div className="company-info">
                        <h3>Ezout</h3>
                        <p>Simply dummy text of the printing and typesetting industry.<br/>Lorem Ipsum simply dummy text
                            of the printing</p>
                        <div className="social-icons">
                            <a href="https://www.google.com/" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.facebook.com/" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://twitter.com/" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;