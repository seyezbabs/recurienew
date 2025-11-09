import React from 'react';
import '../styles/Footer.css';

const columns = [
  {
    title: 'PRODUCTS',
    links: ['Sanity Studio', 'Media Library', 'Canvas', 'Content Releases', 'Insights', 'App SDK', 'Content Lake', 'Live CDN', 'Compute', 'Agent Actions', 'AI Assist', 'Use cases']
  },
  {
    title: 'RESOURCES',
    links: ['Docs', 'Sanity Learn', 'Tools and plugins', 'Frameworks', 'Templates', 'Schemas and snippets', 'Guides', 'Headless CMS explained', 'Resource library', 'Explainers', 'Enterprise CMS guides', 'Compare Sanity', 'Glossary', 'Pricing']
  },
  {
    title: 'COMPANY',
    links: ['Contact', 'Blog', 'Events', 'Careers', 'Changelog', 'Customer Stories', 'Agency Partners', 'Technology Partners']
  },
  {
    title: 'TRUST AND COMPLIANCE',
    links: ['Privacy policy', 'Terms of service', 'Accessibility statement', 'Transparency statement', 'Security and compliance', 'Open Source Pledge', 'Cookie preferences']
  }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-cta">
          <h2 className="cta-heading">Join our community</h2>

          <div className="cta-sub">
            <button className="subscribe-btn" aria-label="Subscribe to newsletter">SUBSCRIBE TO OUR NEWSLETTER</button>
            
          </div>
        </div>

        <div className="footer-grid" aria-label="Footer navigation">
          {columns.map((col) => (
            <div className="footer-column" key={col.title}>
              <h4 className="footer-heading">{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li className="footer-link" key={link}><a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Recurie. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;