import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionIntro from "@/components/SolutionIntro";
import SearchBar from "@/components/SearchBar";
import AvailableLocations from "@/components/AvailableLocations";

const BusinessSetupSolution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionIntro
          title="Business Setup"
          subtitle="Launch With Confidence"
          description="End-to-end company registration, legal documentation, and compliance assistance. From GST to MSME, get everything sorted by experts."
          videoSrc={undefined}
        />

        <section className="container mx-auto px-4 pb-8">
          <SearchBar defaultService="Business Setup" />
        </section>

        <AvailableLocations
          heading="Available across major cities"
          cities={[
            "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai",
            "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat"
          ]}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessSetupSolution;


