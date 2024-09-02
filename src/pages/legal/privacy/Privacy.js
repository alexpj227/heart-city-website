import React from 'react';
import styles from './Privacy.module.css';

const Privacy = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>HeartCity App Privacy Policy</h1>
            <p className={styles.effectiveDate}>Effective Date: August 1, 2024</p>

            <h2 className={styles.sectionHeading}>A. About Us:</h2>
            <p className={styles.text}>
                Welcome to the HeartCity App (the “App”). The HeartCity App, operated by Tamarama Investments, II LLC 
                (“HeartCity”, “we”, “us”, or “our”), provides a platform for users to engage with local businesses, 
                earn discounts, coupons, and other rewards (“Rewards”) offered by and redeemable with businesses 
                that use the App or are otherwise associated with us (“Merchants”). We offer these services through 
                our mobile application, associated website, content, and other related services (collectively, the “Services”). 
                By accessing or using our Services, you agree to the terms outlined in this Privacy Policy, our Terms of Service, 
                and any other policies we may implement from time to time (collectively, “Policies”). If you do not agree with 
                the practices described in this Privacy Policy, please do not use our App or Services.
            </p>

            <h2 className={styles.sectionHeading}>B. Privacy Policy:</h2>
            <p className={styles.text}>
                Please read this Privacy Policy carefully as it contains important information regarding the collection, 
                use, and handling of your Personal Data and other information. Terms not defined herein shall have the meanings 
                given to them in our Terms of Service. If you have any questions or concerns, please contact us at: <a href="mailto:info@heartcity.app">info@heartcity.app</a>.
            </p>

            <h3 className={styles.subSectionHeading}>1. Information We Collect.</h3>
            <p className={styles.text}><strong>(a) Personal Data.</strong> We collect personal information from you when you create an account or otherwise provide Personal Data while using the Services. “Personal Data” refers to any information that can identify an individual, such as your name, email address, payment information, and related details.</p>
            <p className={styles.text}><strong>(b) Location Data.</strong> We may collect location information related to your device and usage of the Services. By using the Services, you consent to the collection of Location Data to enable certain features. This data is collected anonymously and may be aggregated with other users' data. We may share this anonymous data with third parties.</p>
            <p className={styles.text}><strong>(c) Use Data.</strong> When you use our Services to send or receive content, we collect data about that interaction.</p>
            <p className={styles.text}><strong>(d) Log Information.</strong> We may log your IP address to understand how you use our Services. This is generally done anonymously, but if you are logged into an account, we may link this information to your Personal Data. Our Services may also use cookies to enhance user experience.</p>
            <p className={styles.text}><strong>(e) Ad Data.</strong> Our Services may use advertising tools like Google AdSense. If implemented, these tools use cookies and web beacons, and information may be shared with Google under its privacy policies.</p>
            <p className={styles.text}><strong>(f) Aggregate Data.</strong> We may collect and use aggregate data, which does not personally identify you, to understand trends and improve our Services.</p>
            <p className={styles.text}><strong>(g) Analytics.</strong> We may use third-party analytics tools to collect data on how users interact with our Services. This information helps us improve the Services but does not include Personal Data.</p>
            <p className={styles.text}><strong>(h) Device Information.</strong> We may collect details about your device, such as the hardware model, operating system, unique device identifier, and mobile carrier information.</p>
            <p className={styles.text}><strong>(i) Tracking Technologies.</strong> We may use cookies, flash cookies, web beacons, and similar technologies to collect information when you interact with our Services.</p>
            <p className={styles.text}><strong>(j) From Third Parties.</strong> We may acquire additional information from third parties to update or supplement the data you provide or we collect.</p>

            <h3 className={styles.subSectionHeading}>2. How We Use It.</h3>
            <p className={styles.text}>
                We use your Personal Data to:
                <ul className={styles.list}>
                    <li>Provide and improve the Services</li>
                    <li>Notify you about account-related issues</li>
                    <li>Increase usability of the Services</li>
                    <li>Send promotional offers</li>
                    <li>Investigate misuse of the Services</li>
                    <li>Respond to customer support requests</li>
                    <li>Analyze trends and usage</li>
                    <li>Carry out our business operations</li>
                </ul>
            </p>

            <h3 className={styles.subSectionHeading}>3. Who We Share It With.</h3>
            <p className={styles.text}>
                We may share Personal Data with third parties under the following circumstances:
                <ul className={styles.list}>
                    <li>To provide the Services to you, or if you have allowed us to share your Personal Data</li>
                    <li>When required by law or to protect our rights and property</li>
                    <li>If we are involved in a merger, acquisition, or sale of assets</li>
                    <li>With our affiliates and service providers who help us operate our business</li>
                </ul>
            </p>

            <h3 className={styles.subSectionHeading}>4. Your Choices.</h3>
            <p className={styles.text}>
                <ul className={styles.list}>
                    <li>Be mindful when sharing content on public areas or through social media, as others can view and share it.</li>
                    <li>You can opt out of targeted ads through the Network Advertising Initiative or Digital Advertising Alliance.</li>
                    <li>You can opt out of marketing communications by contacting us at <a href="mailto:info@heartcity.app">info@heartcity.app</a>.</li>
                </ul>
            </p>

            <h3 className={styles.subSectionHeading}>5. Security of Your Personal Information.</h3>
            <p className={styles.text}>
                We use reasonable measures to protect your Personal Data from unauthorized access. However, no method of transmission over the internet or electronic storage is 100% secure. By using our Services, you acknowledge and accept these risks.
            </p>

            <h3 className={styles.subSectionHeading}>6. Your Account.</h3>
            <p className={styles.text}>
                You can review and update your Personal Data by logging into your account. If your account is terminated, we may delete your information, but may retain certain data as necessary.
            </p>

            <h3 className={styles.subSectionHeading}>7. Tracking Technology.</h3>
            <p className={styles.text}>
                We use cookies and similar technologies to personalize and enhance your experience with our Services. You can manage your cookie preferences through your browser settings.
            </p>

            <h3 className={styles.subSectionHeading}>8. Compliance with the Children’s Online Privacy Protection Act.</h3>
            <p className={styles.text}>
                We do not knowingly collect Personal Data from children under the age of 13. If we learn we have collected such information, we will delete it. If you believe we have mistakenly collected data from a child under 13, please contact us immediately.
            </p>

            <h3 className={styles.subSectionHeading}>9. Linked Sites.</h3>
            <p className={styles.text}>
                Our Services may contain links to other websites. This Privacy Policy does not apply to those Linked Sites. We encourage you to review the privacy policies of any Linked Sites you visit.
            </p>

            <h3 className={styles.subSectionHeading}>10. California Privacy Rights.</h3>
            <p className={styles.text}>
                California residents have the right to request information about how we share their Personal Data with third parties for marketing purposes. To make such a request, please contact us at <a href="mailto:info@heartcity.app">info@heartcity.app</a> with the subject line "Re: Opt-out."
            </p>

            <h3 className={styles.subSectionHeading}>11. Changes to our Privacy Policy; Miscellaneous.</h3>
            <p className={styles.text}>
                We reserve the right to update this Privacy Policy at any time. Changes will be posted on our App, and your continued use of the Services indicates acceptance of the new terms.
            </p>

            <h3 className={styles.subSectionHeading}>12. Feedback.</h3>
            <p className={styles.text}>
                We value your feedback. If you have any questions or comments about this Privacy Policy, please contact us at <a href="mailto:info@heartcity.app">info@heartcity.app</a>.
            </p>
        </div>
    );
};

export default Privacy;
