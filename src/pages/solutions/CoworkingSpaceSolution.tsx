import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SolutionIntro from "@/components/SolutionIntro";
import SearchBar from "@/components/SearchBar";
import AvailableLocations from "@/components/AvailableLocations";

const CoworkingSpaceSolution = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <SolutionIntro
          title="Coworking Space"
          subtitle="Work, Connect, Grow"
          description="Flexible workspace options with premium amenities and a vibrant community to boost productivity. Choose hot desks, dedicated desks, or private cabins as your team scales."
          videoSrc={undefined}
        />

        <section className="container mx-auto px-4 pb-8">
          <SearchBar defaultService="Coworking Spaces" />
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

export default CoworkingSpaceSolution;


