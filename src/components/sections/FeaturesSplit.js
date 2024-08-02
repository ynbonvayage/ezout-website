import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import './FeaturesSplit.css'

import Modal from '../elements/Modal';

const propTypes = {
    ...SectionSplitProps.types
}

const defaultProps = {
    ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
                           className,
                           topOuterDivider,
                           bottomOuterDivider,
                           topDivider,
                           bottomDivider,
                           hasBgColor,
                           invertColor,
                           invertMobile,
                           invertDesktop,
                           alignTop,
                           imageFill,
                           ...props
                       }) => {
    const [videoModalActive, setVideomodalactive] = useState(false);

    const outerClasses = classNames(
        'features-split section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-split-inner section-inner',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
        'split-wrap',
        invertMobile && 'invert-mobile',
        invertDesktop && 'invert-desktop',
        alignTop && 'align-top'
    );


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="container">
                <div className={innerClasses}>
                    <div className="hero-figure reveal-from-bottom illustration-element-01 " data-reveal-value="20px"
                         data-reveal-delay="800">
                    </div>
                    <div className={splitClasses}>

                        <div className="split-item ">
                            <div className="split-item-content center-content-mobile reveal-from-left"
                                 data-reveal-container=".split-item">
                                <h1 className="mt-0 mb-12 personalized-shopping">
                                    Vision API
                                </h1>
                                <p className="m-0 reduces-cognitive ">
                                    Our advanced computer vision platform provides rapid image analysis and precise object recognition capabilities.
                                    Simply upload an image for immediate processing!
                                </p>
                                <p className="m-0 reduces-cognitive ">
                                    1. Upload an image<br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;- Prepare your image file for analysis
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    2. Immediate processing<br/>

                                    &nbsp;&nbsp;&nbsp;&nbsp;- The platform automatically begins analyzing the uploaded image
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    3. Receive detailed results<br/>

                                    &nbsp;&nbsp;&nbsp;&nbsp;- Get output on image analysis and object recognition
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <Image
                                    src={require('../../assets/images/personlized.png')}
                                    alt="Features split 01"
                                    width={528}
                                    height={400}
                                    style={{borderRadius: '10px'}}/>
                            </div>
                        </div>

                        <div className="split-item ">
                            <div className="split-item-content center-content-mobile reveal-from-left"
                                 data-reveal-container=".split-item">
                                <div className="text-xxs interactive-shopping fw-600 tt-u mb-8">
                                    INTERACTIVE SHOPPING
                                </div>
                                <h3 className="mt-0 mb-12 personalized-shopping">
                                    Personalized Shopping Experience
                                </h3>
                                <h6 className="mt-0 mb-12 ai-assistant">
                                    AI assistant
                                </h6>
                                <p className="m-0 reduces-cognitive ">
                                    • Reduces cognitive load on shoppers
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    • Increases customer retention / brand loyalty
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    • Saves customer time by allowing payment through cart system
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    • Increases purchase amount by 30% on average through personalized recommendations
                                    and item promotion
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <Image
                                    src={require('../../assets/images/personlized.png')}
                                    alt="Features split 01"
                                    width={528}
                                    height={400}
                                    style={{borderRadius: '10px'}}/>
                            </div>
                        </div>


                        <div className="split-item">
                            <div className="split-item-content center-content-mobile reveal-from-right"
                                 data-reveal-container=".split-item">
                                <div className="text-xxs interactive-shopping fw-600 tt-u mb-8">
                                    NO MORE THEFTS
                                </div>
                                <h3 className="mt-0 mb-12 personalized-shopping">
                                    Reduced Shrinkage
                                </h3>
                                <h6 className="mt-0 mb-12 ai-assistant">
                                    AI powered anti-theft systems
                                </h6>
                                <p className="m-0 reduces-cognitive ">
                                    • Reduce shrinkage by more than 50%
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    • Lowers the cost of anti-theft measures by stores
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    • Real-time database updates of store inventory
                                    allow for notifications of potential theft
                                </p>
                            </div>
                            <div className={
                                classNames(
                                    'split-item-image center-content-mobile reveal-from-bottom',
                                    imageFill && 'split-item-image-fill'
                                )}
                                 data-reveal-container=".split-item">
                                <Image
                                    src={require('../../assets/images/map-demo.png')}
                                    alt="Features split 02"
                                    width={528}
                                    height={396}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;