import React from 'react';
import { Helmet } from 'react-helmet';
import './PrivacyPolicyScreen.css';
import {
  IoArrowBack,
  IoInformationCircle,
  IoDocumentText,
  IoAnalytics,
  IoShareSocial,
  IoShieldCheckmark,
  IoOptions,
  IoPeople,
  IoRefresh,
  IoMail,
} from 'react-icons/io5';

const PrivacyPolicyScreen = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div>
      <Helmet>
        <title>Privacy Policy -SkyLand Promotores</title>
        <meta name="description" content="BestWorkers Privacy Policy" />
      </Helmet>

      {/* Header */}
      <header className="privacy-header">
        {/* <button onClick={handleBack} className="back-button">
          <IoArrowBack size={24} />
        </button> */}
        <h1>Privacy Policy</h1>
        <div style={{ width: '24px' }}></div>
      </header>

      {/* Content */}
      <main className="privacy-policy-container">
        {/* <p className="last-updated">Last Updated: June 10, 2024</p> */}

        <SectionWithIcon title="Introduction" icon={<IoInformationCircle color="#007BFF" size={20} />}>
          <p>
            Welcome to BestWorkers ("we," "our," or "us"). We are committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
          </p>
        </SectionWithIcon>

        <SectionWithIcon title="Information We Collect" icon={<IoDocumentText color="#007BFF" size={20} />}>
          <h3>Personal Information</h3>
          <p>When you register for an account, we may collect:</p>
          <ul>
            <li>Your name, email address, phone number</li>
            <li>Your profession, skills, and work experience</li>
            <li>Location data to help connect you with nearby service providers or customers</li>
            <li>Profile picture (optional)</li>
            <li>Payment information (if applicable for premium services)</li>
          </ul>

          <h3>Service-Related Information</h3>
          <p>For service providers, we collect:</p>
          <ul>
            <li>Your service categories (e.g., Plumbing, Electrical work, Construction, etc.)</li>
            <li>Availability and work schedule</li>
            <li>Ratings and reviews from customers</li>
            <li>Work history within the app</li>
          </ul>

          <h3>Search and Interaction Data</h3>
          <p>We collect information about:</p>
          <ul>
            <li>Your searches for specific services or professionals</li>
            <li>Your interactions with other users</li>
            <li>Service requests and bookings</li>
          </ul>
        </SectionWithIcon>

        <SectionWithIcon title="How We Use Your Information" icon={<IoAnalytics color="#007BFF" size={20} />}>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Provide and maintain our service</li>
            <li>Connect service providers with potential customers</li>
            <li>Verify professional qualifications and skills</li>
            <li>Process transactions and send service-related notifications</li>
            <li>Improve our app and develop new features</li>
            <li>Communicate with you about updates, security alerts, and support messages</li>
            <li>Prevent fraud and ensure the security of our platform</li>
          </ul>
        </SectionWithIcon>

        <SectionWithIcon title="Sharing of Information" icon={<IoShareSocial color="#007BFF" size={20} />}>
          <p>We may share information:</p>
          <ul>
            <li>With other users to facilitate service connections</li>
            <li>With service providers who help with app operations</li>
            <li>When required by law or to protect our rights</li>
            <li>During business transfers (merger, acquisition)</li>
          </ul>
          <p>We do not sell your personal information to third parties.</p>
        </SectionWithIcon>

        <SectionWithIcon title="Data Security" icon={<IoShieldCheckmark color="#007BFF" size={20} />}>
          <p>
            We implement appropriate security measures to protect your information. However, no electronic transmission or storage is 100% secure.
          </p>
        </SectionWithIcon>

        <SectionWithIcon title="Your Choices" icon={<IoOptions color="#007BFF" size={20} />}>
          <p>You can:</p>
          <ul>
            <li>Update or correct your profile information</li>
            <li>Adjust notification preferences</li>
            <li>Request deletion of your account and associated data</li>
            <li>Opt-out of certain data collection (where applicable)</li>
          </ul>
        </SectionWithIcon>

        <SectionWithIcon title="Children's Privacy" icon={<IoPeople color="#007BFF" size={20} />}>
          <p>
            Our app is not intended for users under 16. We do not knowingly collect information from children.
          </p>
        </SectionWithIcon>

        <SectionWithIcon title="Changes to This Policy" icon={<IoRefresh color="#007BFF" size={20} />}>
          <p>
            We may update this policy periodically. We will notify you of significant changes through the app or via email.
          </p>
        </SectionWithIcon>

        <SectionWithIcon title="Contact Us" icon={<IoMail color="#007BFF" size={20} />}>
          <p>If you have questions about this Privacy Policy, please contact us at:</p>
          <div className="contact-email">
            <IoMail size={18} />
            <a href="mailto:bestworkerrzz@gmail.com">zeroestate2025@gmail.com</a>
          </div>
        </SectionWithIcon>
      </main>
    </div>
  );
};

const SectionWithIcon = ({ title, icon, children }) => (
  <section className="privacy-section">
    <div className="section-title">
      {icon}
      <h2>{title}</h2>
    </div>
    <div className="section-content">{children}</div>
  </section>
);

export default PrivacyPolicyScreen;
