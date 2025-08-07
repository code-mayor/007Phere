import MainLayout from "../layouts/MainLayout";

export default function Privacy() {
    return (
        <MainLayout title="Privacy Policy - 007Phere">
            {/* Hero */}
            <section className="relative h-[30vh] bg-gradient-to-r from-purple-800 to-purple-400 flex items-center justify-center text-white">
                <h1 className="text-4xl font-bold">Privacy Policy</h1>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 py-10 text-sm leading-relaxed text-gray-700 space-y-6">
                <p>
                    At 007Phere, your privacy is our utmost priority. We are committed to protecting the confidentiality of all personal and sensitive information shared with us.
                </p>

                <h2 className="text-md font-semibold text-purple-700">1. Data We Collect</h2>
                <p>
                    We collect personal data such as your name, contact information, location, and inquiry details. This may include additional information necessary for pre- or post-nuptial services.
                </p>

                <h2 className="text-md font-semibold text-purple-700">2. Purpose of Data Collection</h2>
                <p>
                    The data collected is used exclusively for providing matrimonial support services, including investigation, counseling, or legal advice. It is never used for marketing or sold to third parties.
                </p>

                <h2 className="text-md font-semibold text-purple-700">3. Consent and Control</h2>
                <p>
                    By submitting your information, you consent to our use of it for the specified purposes. You may request access, correction, or deletion of your personal data at any time.
                </p>

                <h2 className="text-md font-semibold text-purple-700">4. Data Storage and Security</h2>
                <p>
                    All data is securely stored on encrypted servers with limited access. We implement administrative, technical, and physical safeguards to protect your data from unauthorized access or disclosure.
                </p>

                <h2 className="text-md font-semibold text-purple-700">5. Disclosure to Authorities</h2>
                <p>
                    We do not disclose personal data to any third party unless required by law or with explicit client consent.
                </p>

                <h2 className="text-md font-semibold text-purple-700">6. Cookies and Tracking</h2>
                <p>
                    Our website may use minimal cookies for functionality and analytics. You can disable cookies in your browser settings.
                </p>

                <h2 className="text-md font-semibold text-purple-700">7. Updates to This Policy</h2>
                <p>
                    We may update this policy to reflect changes in our practices or legal obligations. Continued use of our services implies acceptance of the updated terms.
                </p>

                <p>
                    For questions or privacy-related requests, please email <a href="mailto:hello@007phere.com" className="text-purple-600">hello@007phere.com</a>.
                </p>
            </section>
        </MainLayout>
    );
}
