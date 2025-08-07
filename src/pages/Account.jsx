
import MainLayout from "../layouts/MainLayout";

export default function Account() {
  return (
    <MainLayout title="My Account - 007Phere">
      <section className="min-h-[50vh] flex flex-col items-center justify-center p-6">
        <h1 className="text-2xl font-bold mb-4">My Account</h1>
        <p className="text-sm text-gray-600">This is a placeholder page for user account settings.</p>
      </section>
    </MainLayout>
  );
}
