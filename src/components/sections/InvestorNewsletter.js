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

  🛒 About Us:
  
  EzOut solves labor shortage for grocers by offering an AI-driven platform that reduces their labor cost and boosts sales at physical grocery store using smart shopping carts.
  
  🧿 Vision:
  
  EzOut’s vision is to create an AI-driven ecosystem that not only assists shoppers but also helps store employees to solve daily problems at grocery stores.
  
  🚀 Highlights:
  
  EzOut recently completed its MVP, which was showcased to Giant Eagle and other stores in the Northeastern USA to gather feedback and establish relationships for further discussions.
  Last month, EzOut embarked on a one-year accelerator program, Founder Residency at The Roux Institute at Northeastern University, gaining access to grants and potential industry partners.
  Onboarded Hannaford Bros. Co. as our industry mentor who are guiding us to refine our technology and providing us valuable insights necessary for EzOut.
  
  🏋 Challenges:
  
  EzOut is experiencing a slower cycle of customer discussions, largely due to the lengthy chains of hierarchy in grocery stores. Nevertheless, as the saying goes, 'slow and steady wins the race’ 😉.
  
  🎯 Before Next Update (1st Jan):
  
  After gathering positive feedback from potential customers, we're introducing our product recommendation feature that boost grocer’s sales by over 30%.
  We plan to showcase our technology at the NRF Big Show to find strategic partners. To make this a success, we're seeking fund support or a partnered booth with your help.
  
  🙏 Asks:
  EzOut is seeking introductions to:
  * Grocers or individuals working at grocery stores to gather more feedback and develop relations to schedule a pilot.
  * Innovation professionals at NCR and Oracle for strategic partnership for EzOut’s vision.
  * Angels and early-stage investors with a background in retail/groceries to assist us in raising $500k in pre-seed funding. (These funds will be used to develop 10 prototypes by Apr 2024 and to showcase our product at Retail Conferences from Jan to Mar. We anticipate generating outreach among potential customers and securing test partners in Q1, 2024.)
  

If you are interested in helping us, please let us know and we can schedule a deeper dive on the plan.
  
  💰 Financials:
  
  Total Funds Raised (Sept, 2023): $28,000
  Burn Rate: ~$2,500/month.
  
  📢 Shout Outs:
  
  Special thanks to Santiago Zindel, the Director of Founder Residency, and everyone at The Roux Institute at Northeastern University for providing us with an incredible platform to help EzOut achieve exponential growth.
  
  📶 Connect With Us:
  
  Follow our LinkedIn page: https://www.linkedin.com/company/ezout/ to stay up to date. Excited to learn more about us? Reach out to us at info@ezout.store or book an appointment here: https://calendly.com/naman-eidar/30min. Don’t miss our latest video: https://www.linkedin.com/feed/update/urn:li:activity:7121324176535076864
  
  No longer want this update? Too frequent? Too long? Too short? Please let us know.
  
  Cheers,
  Matthew Mo and Naman Gupta
  Founders of EzOut, Inc.  
  `;

  const converter = new Showdown.Converter();
  const htmlContent = converter.makeHtml(markdownContent);

  const outerClasses = classNames(
    'newsletter-section section',
    topDivider && 'has-top-divider',
    className
  );

  const innerClasses = classNames(
    'newsletter-inner section-inner',
  );

  return (
    <section {...props} className={outerClasses}>
      <style>
        {`
          .title {
            text-align: center;
            margin-bottom: 8px; /* Adjust as needed */
          }
          .has-top-divider {
            border-top: 2px solid #e8e8e8;
            padding-top: 40px; /* Adjust as needed */
          }
          .newsletter-section {
            padding-top: 40px; /* Adjust as needed */
          }
        `}
      </style>
      <div className="container">
        <div className={innerClasses}>
          <h1 className="title" style={{marginTop: -55}}>Investor Newsletter</h1>
          <div className="newsletter-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
    </section>
  );
};

InvestorNewsletter.propTypes = propTypes;
InvestorNewsletter.defaultProps = defaultProps;

export default InvestorNewsletter;
