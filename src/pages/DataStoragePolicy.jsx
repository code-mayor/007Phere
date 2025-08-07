import MainLayout from "../layouts/MainLayout";

export default function DataStoragePolicy() {
    return (
        <MainLayout title="Data Storage Policy - 007Phere">
            {/* Hero */}
            <section className="relative h-[30vh] bg-gradient-to-r from-purple-800 to-purple-400 flex items-center justify-center text-white">
                <h1 className="text-3xl md:text-4xl font-bold">Data Storage Policy</h1>
            </section>

            {/* Content */}
            <section className="max-w-4xl mx-auto px-6 py-10 text-sm leading-relaxed text-gray-700 space-y-6">
                <p>
                    At 007Phere, we take a privacy-first approach to how we collect, store, and manage sensitive client data. This policy outlines our data storage practices in accordance with our confidentiality commitment.
                </p>

                <h2 className="text-md font-semibold text-purple-700">1. Data Collection Sources</h2>
                <p>
                    We collect personal information directly from clients and, where authorized, from third-party public databases and professional networks. All data collection is relevant to the scope of the matrimonial investigation or service.
                </p>

                <h2 className="text-md font-semibold text-purple-700">2. Storage Infrastructure</h2>
                <p>
                    All personal and case-related data is stored on encrypted, access-controlled servers located within secure data centers. We do not store data on unsecured local devices.
                </p>

                <h2 className="text-md font-semibold text-purple-700">3. Encryption Standards</h2>
                <p>
                    Data at rest and in transit is encrypted using AES-256 and TLS protocols, respectively. Access to stored data is restricted to authorized personnel only under role-based access control (RBAC).
                </p>

                <h2 className="text-md font-semibold text-purple-700">4. Retention Duration</h2>
                <p>
                    Data is retained only for the duration necessary to fulfill the service or comply with legal obligations. Typically, personal data is deleted 60 days after service completion, unless extended by written client request.
                </p>

                <h2 className="text-md font-semibold text-purple-700">5. Backups & Recovery</h2>
                <p>
                    Encrypted backups are maintained on a rolling basis to ensure availability and business continuity in case of system failure. Backups are purged in accordance with the data retention timeline.
                </p>

                <h2 className="text-md font-semibold text-purple-700">6. Breach Response</h2>
                <p>
                    In the rare event of a data breach, we will notify affected individuals within 72 hours and initiate remedial action. We also maintain an internal incident response protocol for such scenarios.
                </p>

                <h2 className="text-md font-semibold text-purple-700">7. Client Rights</h2>
                <p>
                    Clients may request access, export, correction, or deletion of their stored data by emailing <a href="mailto:hello@007phere.com" className="text-purple-600">hello@007phere.com</a>. Verification procedures will apply.
                </p>

                <p>
                    By using 007Phere services, you consent to this data storage policy. For clarifications, please reach out at any time.
                </p>
            </section>
        </MainLayout>
    );
}
