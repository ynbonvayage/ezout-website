import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionProps} from '../../utils/SectionProps';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Logo from '../layout/partials/Logo';
import {FaArrowCircleRight} from "react-icons/fa";
import Modal from '../elements/Modal';

const propTypes = {
    ...SectionProps.types
}

const defaultProps = {
    ...SectionProps.defaults
}

const Hero = ({
                  className,
                  topOuterDivider,
                  bottomOuterDivider,
                  topDivider,
                  bottomDivider,
                  hasBgColor,
                  invertColor,
                  ...props
              }) => {

    const outerClasses = classNames('hero section', topOuterDivider && 'has-top-divider', bottomOuterDivider && 'has-bottom-divider', hasBgColor && 'has-bg-color', invertColor && 'invert-color', className);

    const innerClasses = classNames('hero-inner section-inner', topDivider && 'has-top-divider', bottomDivider && 'has-bottom-divider');

    const [videoModalActive, setVideomodalactive] = useState(false);

    const openModal = (e) => {
        e.preventDefault();
        setVideomodalactive(true);
    }

    const closeModal = (e) => {
        e.preventDefault();
        setVideomodalactive(false);
    }

    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}
                     style={{
                         display: 'flex',
                         flexWrap: 'wrap',
                         alignItems: 'center',
                         justifyContent: 'space-between',
                     }}>
                    <div className="hero-content" style={{
                        flex: '1 1 300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        textAlign: 'left',
                        marginBottom: '2rem',
                        minWidth: '300px',
                    }}>
                        <h1 className="mt-0 mb-100"
                            style={{
                                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                                color: '#2C5364',
                                marginTop: '1rem',
                                lineHeight: 1.5,
                                wordSpacing: '0.4em',
                            }}>
                            Elevate your<br/>
                            grocery store<br/>
                            experience
                        </h1>
                        <div className="container-xs">
                            <Button tag="a" wideMobile onClick={openModal} style={{
                                backgroundColor: '#EFD372',
                                color: '#000000',
                                border: 'none',
                                borderRadius: '10px',
                                padding: '10px 20px',
                                fontSize: 'clamp(0.9rem, 2vw, 1.1rem)',
                            }}>
                                Explore Now <FaArrowCircleRight style={{marginLeft: '8px'}}/>
                            </Button>
                        </div>
                        <Modal
                            id="video-modal"
                            show={videoModalActive}
                            handleClose={closeModal}
                            video="https://bit.ly/3VZ6R0g"
                            videoTag="iframe"/>
                    </div>
                    <div className="hero-figure" style={{
                        flex: '1 1 300px',
                        display: 'flex',
                        justifyContent: 'flex-end',
                        minWidth: '300px',
                        maxWidth: '100%',
                    }}>
                        <Image
                            src={require('../../assets/images/payment-demo.jpeg')}
                            alt="Features split 01"
                            width={528}
                            height={400}
                            style={{
                                borderRadius: '10px',
                                maxWidth: '100%',
                                height: 'auto',
                            }}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;