import React, {useState} from 'react';
import classNames from 'classnames';
import {SectionSplitProps} from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import './FeaturesSplit.css'
import axios from 'axios';

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
    const [file, setFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);

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

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        setImagePreview(URL.createObjectURL(selectedFile));
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFile = event.dataTransfer.files[0];
        setFile(droppedFile);
        setImagePreview(URL.createObjectURL(droppedFile));
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleUpload = async () => {
        if (!file) return;

        setLoading(true);
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post('YOUR_API_ENDPOINT', formData);
            setResults(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setLoading(false);
        }
    };

    const FileUploadArea = () => (
        <div
            className="file-upload-area"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <div className="upload-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
            </div>
            <p className="upload-text">Drop files or Browse</p>
            <p className="file-formats">Supported formats: png, jpeg, jpg</p>
            <input
                type="file"
                onChange={handleFileChange}
                accept="image/png, image/jpeg, image/jpg"
                style={{ display: 'none' }}
                id="file-input"
            />
            <label htmlFor="file-input" className="select-file-btn">SELECT FILE</label>
        </div>
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
                                    <a href="https://docs.ezout.store/docs/vision-detect" className="api-doc-button">
                                        <span>API Doc</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </a>
                                </h1>
                                <p className="m-0 reduces-cognitive ">
                                    Our advanced computer vision platform provides rapid image analysis and precise object recognition capabilities.
                                    Simply upload an image for immediate processing!
                                </p>
                                <div style={{height: '8px'}} />
                                <p className="m-0 reduces-cognitive ">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>Step One: Upload an image</strong><br/>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Prepare your image file for analysis
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>Step Two: Immediate processing</strong><br/>

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Vision API automatically analyzes the uploaded image
                                </p>
                                <p className="m-0 reduces-cognitive">
                                    &nbsp;&nbsp;&nbsp;&nbsp;<strong>Step Three: Receive detailed results</strong><br/>

                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Get output on image analysis and object recognition
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

                        <div className="split-item try-api-section">
                            <div className="file-upload-container">
                                {!imagePreview && <FileUploadArea />}
                                {imagePreview && (
                                    <div>
                                        <img src={imagePreview} alt="Preview" style={{ maxWidth: '100%', borderRadius: '10px' }} />
                                        {!loading && !results && (
                                            <button onClick={handleUpload} className="confirm-btn">Confirm</button>
                                        )}
                                    </div>
                                )}
                                {loading && <div className="loading">Loading...</div>}
                                {results && (
                                    <div className="results">
                                        <h3>Detected Result</h3>
                                        {/* Display your results here */}
                                        <button onClick={() => { setFile(null); setImagePreview(null); setResults(null); }} className="reset-btn">Reset</button>
                                        <button onClick={() => { setFile(null); setImagePreview(null); setResults(null); }} className="new-file-btn">New File</button>
                                    </div>
                                )}
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