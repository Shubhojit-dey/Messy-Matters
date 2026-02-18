import React from "react";
import { useTheme } from "../ThemeContext"; // Go up one level to Landing folder

const Policy = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="container py-5" style={{ color: 'var(--text-color)' }}>
      
      <p style={{ color: 'var(--secondary-text)' }}>Last Updated: February 14, 2026</p>

      <p className="mt-4">
        Welcome to <strong>Messy Matters</strong> (“the App”). Your privacy is important
        to us, and we are committed to protecting your personal information.
        This Privacy Policy explains how we collect, use, disclose, and protect
        your information when you use our App.
      </p>

      <h3 className="mt-5 fw-bold">Information We Collect</h3>

      <h5 className="mt-4">1. Information You Provide</h5>
      <p style={{ color: 'var(--secondary-text)' }}>
        When you use the App, we may collect information that you voluntarily
        provide, such as your name, email address, and other contact information.
      </p>

      <h5 className="mt-4">2. Information Automatically Collected</h5>
      <p style={{ color: 'var(--secondary-text)' }}>
        When you use the App, certain information may be automatically collected,
        including device information such as unique identifier, operating system,
        and browser type.
      </p>
      <p style={{ color: 'var(--secondary-text)' }}>
        Usage information may include pages you visit and the actions you take
        within the App.
      </p>

      <h5 className="mt-4">3. Information from Third-Party Services</h5>
      <p style={{ color: 'var(--secondary-text)' }}>
        We use Google Sign-In, Google Analytics, and Google Crashlytics services
        from Firebase. These services may collect and process certain information
        as described in Google's privacy policy.
      </p>

      <h3 className="mt-5 fw-bold">How We Use Your Information</h3>
      <ul className="mt-3" style={{ color: 'var(--secondary-text)' }}>
        <li>To provide, maintain, and improve the App.</li>
        <li>To personalize your experience and send notifications.</li>
        <li>To monitor and analyze usage patterns and trends.</li>
        <li>To detect, prevent, and address technical issues.</li>
      </ul>

      <h3 className="mt-5 fw-bold">Data Security</h3>
      <p style={{ color: 'var(--secondary-text)' }}>
        We take reasonable measures to protect your information from unauthorized
        access, disclosure, alteration, or destruction.
      </p>

      <h3 className="mt-5 fw-bold">Sharing Your Information</h3>
      <p style={{ color: 'var(--secondary-text)' }}>
        We do not sell or trade your information for marketing purposes. We may
        share information with trusted third-party service providers who assist
        us in operating the App.
      </p>

      <h3 className="mt-5 fw-bold">Your Choices</h3>
      <p style={{ color: 'var(--secondary-text)' }}>
        You may have the right to access, correct, or delete your personal
        information. Contact us at <strong>connect@plansync.in</strong>.
      </p>

      <h3 className="mt-5 fw-bold">Changes to This Privacy Policy</h3>
      <p style={{ color: 'var(--secondary-text)' }}>
        We reserve the right to update this Privacy Policy from time to time.
        The latest version will always be posted on this page.
      </p>

      <h3 className="mt-5 fw-bold">Contact Us</h3>
      <p style={{ color: 'var(--secondary-text)' }}>
        If you have any questions or concerns, contact us at
        <strong> connect@plansync.in</strong>.
      </p>

    </div>
  );
};

export default Policy;