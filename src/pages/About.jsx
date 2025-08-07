import MainLayout from "../layouts/MainLayout";
import team1 from "../assets/team/team1.jpg";
import team2 from "../assets/team/team2.jpg";
import team3 from "../assets/team/team3.jpg";
import team4 from "../assets/team/team4.jpg";

export default function About() {
    const team = [
        {
            name: "Ishaan Verma",
            role: "Founder & Lead Analyst",
            intro: "Over a decade of experience in investigative intelligence and strategic profiling.",
            image: team1,
        },
        {
            name: "Ritika Sharma",
            role: "Psychologist & Evaluator",
            intro: "Specializes in behavioral profiling and compatibility assessment.",
            image: team2,
        },
        {
            name: "Aarav Patel",
            role: "Legal Advisor",
            intro: "Expert in matrimonial and family law, offering clarity and guidance.",
            image: team3,
        },
        {
            name: "Naina Joseph",
            role: "Surveillance Operations Head",
            intro: "Leads discreet field activities with precision and confidentiality.",
            image: team4,
        },
    ];

    return (
        <MainLayout title="About Us - 007Phere">
            {/* Hero */}
            <section className="relative h-[30vh] bg-gradient-to-r from-purple-800 to-purple-400 flex items-center justify-center text-white">
                <h1 className="text-4xl font-bold">About</h1>
            </section>

            {/* Company Description */}
            <section className="max-w-5xl mx-auto p-6 text-center">
                <h2 className="text-2xl font-semibold mb-4">Reimagining Matrimonial Trust</h2>
                <p className="text-gray-700 mb-4">
                    At 007Phere, we believe that marriage is a lifelong alliance that deserves the truth. Our mission is to empower individuals and families to make informed matrimonial decisions, backed by verified facts, psychological insights, and legal support.
                </p>
                <p className="text-gray-700">
                    Whether it’s pre-nuptial clarity or post-nuptial support, we operate with confidentiality, compassion, and a commitment to truth. We combine real-world intelligence with empathy — making us a trusted partner in every phase of matrimonial life.
                </p>
            </section>

            {/* Team Section */}
            <section className="max-w-6xl mx-auto px-6 py-8">
                <h2 className="text-xl font-bold mb-6 text-center">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {team.map((member, idx) => (
                        <div key={idx} className="text-center shadow rounded p-4 bg-white">
                            <div className="w-full h-24 bg-gray-200 mx-auto mb-4 overflow-hidden">
                                <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
                            </div>
                            <h3 className="font-semibold text-lg">{member.name}</h3>
                            <p className="text-sm text-purple-600 mb-1">{member.role}</p>
                            <p className="text-sm text-gray-600">{member.intro}</p>
                        </div>
                    ))}
                </div>
                <p className="text-sm text-center text-gray-500 mt-8 italic">
                    Our anonymous sleuth team works round the clock to obtain credible information and conduct discreet verifications.
                </p>
            </section>
        </MainLayout>
    );
}
