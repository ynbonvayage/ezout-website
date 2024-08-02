import React from 'react';
import classNames from 'classnames';
import {SectionTilesProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import './FeaturesTiles.css';

const propTypes = {
    ...SectionTilesProps.types
}

const defaultProps = {
    ...SectionTilesProps.defaults
}

const FeaturesTiles = ({
                           className,
                           topOuterDivider,
                           bottomOuterDivider,
                           topDivider,
                           bottomDivider,
                           hasBgColor,
                           invertColor,
                           pushLeft,
                           ...props
                       }) => {

    const outerClasses = classNames(
        'features-tiles section',
        topOuterDivider && 'has-top-divider',
        bottomOuterDivider && 'has-bottom-divider',
        hasBgColor && 'has-bg-color',
        invertColor && 'invert-color',
        className
    );

    const innerClasses = classNames(
        'features-tiles-inner section-inner pt-0',
        topDivider && 'has-top-divider',
        bottomDivider && 'has-bottom-divider'
    );

    const tilesClasses = classNames(
        'tiles-wrap',
        pushLeft && 'push-left'
    );

    const sectionHeader = {
        title: 'What We Offer For You',
        paragraph: ''
    };


    return (
        <section
            {...props}
            className={outerClasses}
        >
            <div className="features-tiles-wrapper">
                <div className="container ">
                    <div className={innerClasses}>
                        <SectionHeader data={sectionHeader} className="center-content text-white"/>
                        <div className={tilesClasses}>
                            {[
                                {
                                    title: 'Vision API',
                                    description: 'Image upload for instant product matches. Find items easily without tedious text searches.',
                                    icon: 'feature-tile-icon-01.svg'
                                },
                                {
                                    title: 'Add inventory',
                                    description: 'Streamline your stock management with easy bulk uploads and real-time tracking.',
                                    icon: 'feature-tile-icon-02.svg'
                                },
                                {
                                    title: 'View Inventory',
                                    description: 'Upload invoice files for instant matching. Manage your finances effortlessly in seconds.',
                                    icon: 'feature-tile-icon-03.svg'
                                },
                                {
                                    title: 'Promotional ads',
                                    description: 'Create eye-catching, customizable ads to deliver timely promotions to shoppers.',
                                    icon: 'feature-tile-icon-05.svg'
                                }
                            ].map((item, index) => (
                                <div className="tiles-item reveal-from-bottom" data-reveal-delay={index * 200}
                                     key={index}>
                                    <div className="tiles-item-inner center-content">
                                        <div className="features-tiles-item-header">
                                            <div className="features-tiles-item-image mb-16">
                                                <Image
                                                    src={require(`../../assets/images/${item.icon}`)}
                                                    alt={`${item.title} icon`}
                                                    width={64}
                                                    height={64}
                                                />
                                            </div>
                                        </div>
                                        <div className="features-tiles-item-content">
                                            <h4 className="mt-0 mb-8 text-sub-title">{item.title}</h4>
                                            <p className="m-0 text-sm text-description ">
                                                {item.description}
                                            </p>
                                            <button className="button button-primary mt-32">Use Now →</button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;