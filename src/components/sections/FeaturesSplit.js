import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

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
    paragraph: 'Labor shortage caused by COVID has increased understaffing, workloads, and poor shopping experiences, resulting in lower profit margins for grocers. Additionally, with the rise in inflation and unpredictable shopper behavior, grocers are struggling to survive.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
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
                Personalizes shopping experience and increases customer retention.
                </p>
                <p className="m-0">
                  • Allows shoppers to pay on the trolley itself and saves their 10-15 mins by bypassing waiting at cashier’s register.
                </p>
                <p className="m-0">
                  • Engages shoppers to buy more items by marketing promotional items/discount and recommending next best item that complements their basket. It increases their basket size by 30%.
                </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
              <Image
                src={require('../../assets/images/payment-demo.jpg')}
                alt="Features split 01"
                width={528}
                height={396}
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
                    Reduces shrinkage by more than 50%.
                  </p>
                  <p className="m-0">
                    • AI powered anti-theft sensors monitor each item in every trolley and looks for unscanned/incorrect items, which saves grocer’s resources to monitor shoppers.
                  </p>
                  <p className="m-0">
                    • Real-time insights update the store’s database as soon as an item is scanned, this keeps track of inventory in real-time.
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
                  <p className="m-0">
                    Increases store efficiency by 60%.
                  </p>
                  <p className="m-0">
                    • Saves labor cost at cashier’s register so that employees can focus on human required tasks such as assisting more shoppers, restocking inventory during peak hours, optimize curbside operations, backend operations, etc.
                  </p>
                  <p className="m-0">
                    • Real-time insights is used for better decision-making in store layout, product placement and eventually more aisle space.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('../../assets/images/data-visualization.png')}
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