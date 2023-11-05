import React from 'react';
import classNames from 'classnames';
import Showdown from 'showdown';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  topDivider: PropTypes.bool,
};

const defaultProps = {
  className: '',
  topDivider: false,
};

const InvestorNewsletter = ({ className, topDivider, ...props }) => {
  const markdownContent = `
  Happy Halloween from EzOut! We’re excited to bring you our latest update.

  🧿 Vision:
  EzOut’s vision is to create an AI-driven ecosystem that not only assists shoppers but also helps store employees to solve daily problems at grocery stores.
  
  🚀 Highlights:
  EzOut recently completed its MVP, which was showcased to Giant Eagle and other stores in the Northeastern USA to gather feedback and establish relationships for further discussions.
  Last month, EzOut embarked on a one-year accelerator program, Founder Residency at The Roux Institute at Northeastern University, gaining access to grants and potential industry partners.
  Onboarded Hannaford Bros. Co. as our industry mentor who are guiding us to refine our technology and providing us valuable insights necessary for EzOut.
  
  🏋 Challenges:
  EzOut is experiencing a slower cycle of customer discussions, largely due to the lengthy chains of hierarchy in grocery stores. Nevertheless, as the saying goes, 'slow and steady wins the race’ 😉.
  
  🙏 Asks:
  EzOut is seeking introductions to:
  - Grocers or individuals working at grocery stores to gather more feedback and develop relations to schedule a pilot.
  - Innovation professionals at NCR and Oracle for strategic partnership for EzOut’s vision.
  - Angels and early-stage investors with a background in retail/groceries to assist us in raising $500k in pre-seed funding. (These funds will be used to develop a prototype by Apr 2024 and to showcase our product at Retail Conferences from Jan to Mar. We anticipate generating outreach among potential customers and securing test partners in Q1, 2024.)

💰 Financials:
  Total Funds Raised (Sept, 2023): $28,000
  Burn Rate: ~$2,500/month.

  Cheers,
  Matthew Mo and Naman Gupta
  Founders of EzOut, Inc.  
  `;
  const converter = new Showdown.Converter();
  const htmlContent = converter.makeHtml(markdownContent);

  const sectionClasses = classNames(
    'newsletter-section section',
    topDivider && 'has-top-divider',
    className
  );

  return (
    <section {...props} className={sectionClasses}>
      <style>
        {`
          .section {
            padding: 4rem 0; /* Padding at the top and bottom */
          }

          .has-top-divider {
            border-top: 2px solid #e8e8e8;
          }

          .container {
            width: 100%; /* Full width */
            max-width: 1200px; /* Maximum container width */
            margin: 0 auto; /* Center horizontally */
            padding: 0 1rem; /* Padding on the sides */
            box-sizing: border-box; /* Include padding in width */
          }

          .newsletter-inner {
            max-width: 1200px; /* Maximum width of the content area */
            margin: 0 auto; /* Center horizontally */
            padding: 2rem; /* Padding inside the content area */
            overflow: hidden; /* Clearfix for floated elements */
          }

          .title {
            text-align: center;
            margin-top: 7rem;
            margin-bottom: 1rem; /* Space below the title */
            font-size: 1; /* Title font size */
            line-height: 1.2; /* Line height for the title */
            font-weight: 600; /* Font weight for the title */
          }

          .newsletter-content {
            line-height: 1.6; /* Line height for content */
            font-size: .7rem; /* Font size for content */
            color: #333; /* Text color for content */
          }
        `}
      </style>

      <div className="container">
        <div className="newsletter-inner section-inner">
          <h1 className="title">Investor Newsletter</h1>
          <div className="newsletter-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </section>
  );
};

InvestorNewsletter.propTypes = propTypes;
InvestorNewsletter.defaultProps = defaultProps;

export default InvestorNewsletter;
