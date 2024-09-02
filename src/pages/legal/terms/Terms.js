import React from 'react';
import styles from './Terms.module.css';

const Terms = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>HeartCity App Terms of Service</h1>
            <p className={styles.effectiveDate}>Effective Date: August 1, 2024</p>

            <p className={styles.text}>
                Welcome to the HeartCity App (the "App"), a mobile application provided by Tamarama Investments, II LLC 
                ("Company," "we," "our," or "us"). These Terms of Service ("Terms") govern your use of the App, available 
                on iOS and Android platforms, and any related services provided by us. By accessing or using the App, you 
                agree to be bound by these Terms. If you do not agree with these Terms, please do not use the App.
            </p>

            <h2 className={styles.sectionHeading}>1. Description of Services</h2>
            <p className={styles.text}>
                The HeartCity App is a social media platform designed to help users find volunteer opportunities near them, 
                create events for volunteering, and connect with other users. Users can create profiles, set customizable 
                privacy settings, follow other users, and receive notifications about volunteering events and opportunities.
            </p>

            <h2 className={styles.sectionHeading}>2. Eligibility</h2>
            <p className={styles.text}>
                To use the App, you must be at least 13 years of age. By using the App, you represent and warrant that you 
                meet this age requirement. If you are under the age of 18, you must have your parent or guardian’s permission 
                to use the App.
            </p>

            <h2 className={styles.sectionHeading}>3. Account Registration</h2>
            <p className={styles.text}>
                To access certain features of the App, you may need to create an account. You agree to provide accurate, current, 
                and complete information during the registration process and to update such information to keep it accurate, current, 
                and complete. You are responsible for maintaining the confidentiality of your account password and for all activities 
                that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h2 className={styles.sectionHeading}>4. Privacy Settings and User Profiles</h2>
            <p className={styles.text}>
                Users can create profiles and adjust their privacy settings to control what information is shared and with whom. 
                By default, certain information may be visible to other users or the public. Please review your privacy settings carefully. 
                We are not responsible for the actions of other users or third parties who may view your profile or access your information, 
                whether through your chosen settings or through unauthorized access.
            </p>

            <h2 className={styles.sectionHeading}>5. User Conduct</h2>
            <p className={styles.text}>
                You agree not to use the App to:
                <ul className={styles.list}>
                    <li>Violate any local, state, national, or international law.</li>
                    <li>Transmit any content that is unlawful, harassing, defamatory, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable.</li>
                    <li>Engage in any activity that interferes with or disrupts the App or the servers and networks that host the App.</li>
                    <li>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</li>
                </ul>
            </p>

            <h2 className={styles.sectionHeading}>6. Content and Intellectual Property</h2>
            <p className={styles.text}>
                You retain all rights to any content you post or share through the App. However, by posting or sharing content on the App, 
                you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, reproduce, modify, create 
                derivative works from, distribute, publicly perform, and publicly display your content in connection with the App.
            </p>
            <p className={styles.text}>
                The App and all materials therein, including but not limited to software, images, text, graphics, illustrations, logos, patents, 
                trademarks, service marks, copyrights, photographs, audio, videos, and music (collectively, the "Content"), are the property 
                of Tamarama Investments, II LLC or our licensors and are protected by copyright, trademark, and other intellectual property laws. 
                You agree not to use, copy, reproduce, modify, translate, publish, broadcast, transmit, distribute, perform, upload, display, license, 
                sell, or otherwise exploit the Content for any purpose other than as part of the App.
            </p>

            <h2 className={styles.sectionHeading}>7. Third-Party Content</h2>
            <p className={styles.text}>
                The App may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, 
                and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. 
                You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused 
                or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or 
                through any such websites or services.
            </p>

            <h2 className={styles.sectionHeading}>8. Disclaimers and Limitation of Liability</h2>
            <p className={styles.text}>
                The App is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties of any kind, express or 
                implied, about the operation or availability of the App or the information, content, materials, or products included on the App.
            </p>
            <p className={styles.text}>
                To the fullest extent permitted by law, Tamarama Investments, II LLC disclaims all warranties, express or implied, including but 
                not limited to implied warranties of merchantability and fitness for a particular purpose.
            </p>
            <p className={styles.text}>
                In no event shall Tamarama Investments, II LLC, its directors, employees, or agents be liable for any direct, indirect, incidental, 
                special, consequential, or punitive damages arising from or related to your use of the App, even if we have been advised of the 
                possibility of such damages. Your sole and exclusive remedy for dissatisfaction with the App is to stop using the App.
            </p>

            <h2 className={styles.sectionHeading}>9. Indemnification</h2>
            <p className={styles.text}>
                You agree to indemnify, defend, and hold harmless Tamarama Investments, II LLC, its affiliates, and their respective officers, 
                directors, employees, agents, licensors, and suppliers from and against all claims, losses, liabilities, expenses, damages, 
                and costs, including, without limitation, reasonable attorneys' fees, arising from or relating to your use of the App, 
                your violation of these Terms, or your violation of any rights of another.
            </p>

            <h2 className={styles.sectionHeading}>10. Modifications to the App and Terms</h2>
            <p className={styles.text}>
                We reserve the right to modify or discontinue, temporarily or permanently, the App (or any part thereof) with or without notice. 
                You agree that we will not be liable to you or to any third party for any modification, suspension, or discontinuance of the App.
            </p>
            <p className={styles.text}>
                We may update these Terms from time to time. If we make changes, we will notify you by revising the date at the top of the Terms 
                and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification). 
                Your continued use of the App after the effective date of any changes constitutes your acceptance of the new Terms.
            </p>

            <h2 className={styles.sectionHeading}>11. Termination</h2>
            <p className={styles.text}>
                We may terminate or suspend your access to the App, without prior notice or liability, for any reason whatsoever, including, 
                without limitation, if you breach these Terms. Upon termination, your right to use the App will immediately cease.
            </p>

            <h2 className={styles.sectionHeading}>12. Governing Law</h2>
            <p className={styles.text}>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its 
                conflict of law principles.
            </p>

            <h2 className={styles.sectionHeading}>13. Contact Information</h2>
            <p className={styles.text}>
                If you have any questions about these Terms, please contact us at <a href="mailto:info@heartcity.app">info@heartcity.app</a>.
            </p>

            <p className={styles.text}>
                Tamarama Investments, II LLC <br/>
                1713 Hopkins Ave., Redwood City, CA 94062 <br/>
                Tax ID: 45-4834917
            </p>
        </div>
    );
};

export default Terms;
