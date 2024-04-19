import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   
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

  const sectionHeader = {
    title: 'Current Market Problem', //The Current Problem:
    paragraph: 'Labor shortage caused by COVID have increased understaffing, workloads, and poor shopping experiences, resulting in lower profit margins for grocers. Additionally, rises in inflation and unpredictable shopper behavior are causin some grocers to struggle to survive.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          {/* second video   */}
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('../../assets/images/initial-page.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://bit.ly/3VZ6R0g"
            videoTag="iframe" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  INTERACTIVE SHOPPING
                  </div>
                <h3 className="mt-0 mb-12">
                  Personalized Shopping Experience
                </h3>
                <p className="m-0">
                 • AI assistant reduces cognitive load on shoppers, creating a more enjoyable experience
                </p>
                <p className="m-0">
                 • Increases customer retention / brand loyalty
                </p>
                <p className="m-0">
                 • saves customer time by allowing payment through the cart system
                </p>
                <p className="m-0">
                  • Increases purchase amount by 30% on average through personalized recommendations and item promotion
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              <Image
                src={require('../../assets/images/payment-demo.jpeg')}
                alt="Features split 01"
                width={528}
                height={400}
                style={{ borderRadius: '10px' }} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                NO MORE THEFTS
                  </div>
                <h3 className="mt-0 mb-12">
                Reduced Shrinkage
                  </h3>
                  <p className="m-0">
                    • AI powered anti-theft systems reduce shrinkage by more than 50%
                  </p>
                  <p className="m-0">
                    • Lowers the cost of anti-theft measures by stores
                  </p>
                  <p className="m-0">
                    • Real-time database updates of store inventory allow for notifications of potential theft
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
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  MORE EFFICIENT OPERATIONS
                  </div>
                <h3 className="mt-0 mb-12">
                  Increased Store Efficiency
                  </h3>
                  <br/>
                  <p className="m-0">
                    • Reduces cost of running stores by up to 60%
                  </p>
                  <p className="m-0">
                    • Saved labor of cashiers allow for workers to assist shoppers and fill other needs of the store
                  </p>
                  <p className="m-0">
                    • Real-time insights can lead to more profitable store layouts and product placements
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/heatmap.jpeg')}
                  alt="Features split 03"
                  width={528}
                  height={396}
                  style={{borderRadius: 20}} />
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