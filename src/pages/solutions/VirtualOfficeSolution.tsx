import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionIntro from "@/components/SolutionIntro";
import SearchBar from "@/components/SearchBar";
import AvailableLocations from "@/components/AvailableLocations";

const VirtualOfficeSolution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionIntro
          title="Virtual Office"
          subtitle="Establish Presence, Instantly"
          description="Professional business address, mail handling, and call management to establish your presence anywhere. Ideal for startups, SMEs, and enterprises expanding into new markets without the overheads of a physical office."
          videoSrc="/videos/20250919-1216-40.7481310.mp4"
        />

        <section className="container mx-auto px-4 pb-8">
          <SearchBar defaultService="Virtual Spaces" />
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

export default VirtualOfficeSolution;


