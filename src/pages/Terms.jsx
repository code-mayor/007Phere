import MainLayout from "../layouts/MainLayout";

export default function Terms() {
    return (
        <MainLayout title="Terms of Use - 007Phere">
            {/* Hero */}
            <section className="relative h-[30vh] bg-gradient-to-r from-purple-800 to-purple-400 flex items-center justify-center text-white">
                <h1 className="text-4xl font-bold">Terms of Use</h1>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 py-10 text-sm leading-relaxed text-gray-700 space-y-6">
                <p>
                    Welcome to 007Phere. By using our website and services, you agree to abide by the following Terms of Use. These terms are designed to ensure transparency and responsible usage of our matrimonial support offerings.
                </p>

                <h2 className="text-md font-semibold text-purple-700">1. Service Scope</h2>
                <p>
                    007Phere provides investigation, counseling, and legal guidance in matrimonial contexts. We operate under professional confidentiality and discretion. Our services are intended solely for personal and lawful matrimonial verification and support.
                </p>

                <h2 className="text-md font-semibold text-purple-700">2. Confidentiality</h2>
                <p>
                    All user data and inquiry details are handled under strict confidentiality. We do not disclose information without your written consent unless legally required.
                </p>

                <h2 className="text-md font-semibold text-purple-700">3. Limitations</h2>
                <p>
                    Our findings are based on available data and third-party sources. While we strive for accuracy, we do not guarantee 100% verification due to privacy laws and access restrictions.
                </p>

                <h2 className="text-md font-semibold text-purple-700">4. User Conduct</h2>
                <p>
                    Users agree not to misuse the platform, impersonate others, or submit false information. Misuse may result in suspension or legal action.
                </p>

                <h2 className="text-md font-semibold text-purple-700">5. Payments and Refunds</h2>
                <p>
                    Once a service is initiated, fees are non-refundable due to the sensitive nature of our investigations. For counseling or advisory packages, cancellation within 24 hours may be considered for partial refunds.
                </p>

                <h2 className="text-md font-semibold text-purple-700">6. Legal Compliance</h2>
                <p>
                    Users are responsible for using our services within the bounds of Indian law. We cooperate with legal authorities as required by law.
                </p>

                <h2 className="text-md font-semibold text-purple-700">7. Changes to Terms</h2>
                <p>
                    007Phere reserves the right to update these Terms of Use at any time. Continued use of the platform implies acceptance of the updated terms.
                </p>

                <p>
                    For any questions, please contact us at <a href="mailto:hello@007phere.com" className="text-purple-600">hello@007phere.com</a>.
                </p>
            </section>
        </MainLayout>
    );
}
