import MainLayout from "../layouts/MainLayout";

// Pre-nuptial
import bgCheck from "../assets/services/basic-bg-check.png";
import lifestyle from "../assets/services/lifestyle-audit.png";
import financial from "../assets/services/financial.png";
import secondmarriage from "../assets/services/second-marriage.png";
import dossier from "../assets/services/dossier.png";

// Counseling
import counseling from "../assets/services/counseling.jpg";
import crisis from "../assets/services/crisis.jpg";
import postdivorce from "../assets/services/postdivorce.jpg";

// Legal
import divorce from "../assets/services/divorce.jpg";
import custody from "../assets/services/custody.jpg";
import property from "../assets/services/property.jpg";
import adr from "../assets/services/adr.jpg";

export default function Services() {
    const services = [
        {
            label: "Pre-nuptial",
            items: [
                {
                    name: "Primary Background Check",
                    description: "Identity verification, education & employment history, marital status and social reputation.",
                    image: bgCheck,
                },
                {
                    name: "Character & Lifestyle Audit",
                    description: "Habits, social circles, criminal background, substance use, daily routines & social behavior.",
                    image: lifestyle,
                },
                {
                    name: "Asset & Financial Verification",
                    description: "Income, debts, property ownership, and creditworthiness investigation.",
                    image: financial,
                },
                {
                    name: "Surveillance & Real-Time Monitoring",
                    description: "On-ground shadowing, movement logs, video/photo proof, anonymous field agents.",
                    image: secondmarriage,
                },
                {
                    name: "Complete Matrimonial Dossier",
                    description: "All-in-one report with psychological profile, legal advisory and astrological compatibility.",
                    image: dossier,
                },
            ],
        },
        {
            label: "Post-nuptial Counseling",
            items: [
                {
                    name: "Relationship Counseling",
                    description: "Support with rebuilding trust, improving communication, and emotional intimacy.",
                    image: counseling,
                },
                {
                    name: "Crisis Intervention",
                    description: "Guidance for domestic violence, separation prep, trauma support and safety planning.",
                    image: crisis,
                },
                {
                    name: "Post-Divorce Therapy",
                    description: "Help for emotional recovery, co-parenting, and family restructuring after separation.",
                    image: postdivorce,
                },
            ],
        },
        {
            label: "Legal Services",
            items: [
                {
                    name: "Divorce Representation",
                    description: "Legal support for contested and uncontested divorces, paperwork, and court proceedings.",
                    image: divorce,
                },
                {
                    name: "Child Custody & Alimony",
                    description: "Petition filing, custody strategy, visitation enforcement and financial affidavits.",
                    image: custody,
                },
                {
                    name: "Property & Asset Division",
                    description: "Joint property evaluation, partition, settlements, and enforcement.",
                    image: property,
                },
                {
                    name: "Dispute Resolution (ADR)",
                    description: "Neutral mediation for resolving sensitive issues outside the courtroom.",
                    image: adr,
                },
            ],
        },
    ];

    return (
        <MainLayout title="Services - 007Phere">
            {/* Hero */}
            <section className="relative h-[30vh] bg-gradient-to-r from-purple-800 to-purple-400 flex items-center justify-center text-white">
                <h1 className="text-4xl font-bold">Services</h1>
            </section>

            {/* Short Description */}
            <section className="max-w-4xl mx-auto text-center p-6">
                <h2 className="text-xl font-semibold mb-2">Due Diligence, Discretion & Support</h2>
                <p className="text-gray-600">
                    We provide investigative and advisory services before, during and after marriage to help you make informed, confident decisions.
                </p>
            </section>

            {/* Service Categories */}
            {services.map((category, catIdx) => (
                <section key={catIdx} className="max-w-6xl mx-auto px-6 py-8">
                    <h3 className="text-lg font-bold mb-6 text-purple-800">{category.label}</h3>
                    {category.items.map((item, idx) => (
                        <div
                            key={idx}
                            className={`flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : ""
                                } items-center gap-6 mb-12`}
                        >
                            <div className="md:w-1/2">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="rounded shadow w-full h-64 object-cover"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
                                <p className="text-sm text-gray-700">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            ))}
        </MainLayout>
    );
}
