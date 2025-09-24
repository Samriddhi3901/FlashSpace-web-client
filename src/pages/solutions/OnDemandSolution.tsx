import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionIntro from "@/components/SolutionIntro";
import SearchBar from "@/components/SearchBar";
import AvailableLocations from "@/components/AvailableLocations";

const OnDemandSolution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionIntro
          title="On Demand"
          subtitle="Book When You Need"
          description="Pay-as-you-go meeting rooms and services with modern AV and flexible booking. Ideal for client meetings, interviews, and workshops."
          videoSrc={undefined}
        />

        <section className="container mx-auto px-4 pb-8">
          <SearchBar defaultService="On Demand" />
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

export default OnDemandSolution;


