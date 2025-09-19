import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, ChevronDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  defaultCity?: string;
  defaultService?: string;
};

const SearchBar = ({ defaultCity = "Delhi", defaultService = "Virtual Spaces" }: SearchBarProps) => {
  const [selectedCity, setSelectedCity] = useState(defaultCity);
  const [selectedService, setSelectedService] = useState(defaultService);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", 
    "Kolkata", "Pune", "Ahmedabad", "Jaipur", "Surat",
    "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane"
  ];

  const services = [
    "Virtual Spaces", 
    "Coworking Spaces", 
    "On Demand",
    "Business Setup"
  ];

  const handleSearch = () => {
    if (!selectedCity) {
      alert("Please select a city");
      return;
    }
    let route = "/city-listing";
    if (selectedService) {
      const serviceRoutes: Record<string, string> = {
        "virtual spaces": "/services/virtual-office",
        "coworking spaces": "/services/coworking-space",
        "on demand": "/services/on-demand",
        "business setup": "/services/virtual-office"
      };
      const serviceKey = selectedService.toLowerCase();
      route = serviceRoutes[serviceKey] || "/city-listing";
    }
    const params = new URLSearchParams();
    params.set("city", selectedCity.toLowerCase().replace(/\s+/g, "-"));
    if (selectedService) params.set("service", selectedService);
    const url = `${route}?${params.toString()}`;
    window.location.href = url;
  };

  return (
    <div className="bg-white rounded-full shadow-2xl max-w-xl mx-auto p-1">
      <div className="flex flex-row items-center gap-1.5">
        <div className="flex items-center px-3 py-2.5 w-40 md:w-48">
          <MapPin className="w-5 h-5 mr-3 text-gray-500" />
          <Popover open={isLocationOpen} onOpenChange={setIsLocationOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                aria-expanded={isLocationOpen}
                className="justify-between p-0 h-auto font-normal border-0 bg-transparent hover:bg-transparent cursor-pointer w-full text-left"
              >
                {selectedCity || "Select City"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <div className="bg-white border border-primary/20 shadow-lg rounded-lg">
                <Command>
                  <CommandInput placeholder="Search city..." />
                  <CommandList>
                    <CommandEmpty>No city found.</CommandEmpty>
                    <CommandGroup>
                      {cities.map((city) => (
                        <CommandItem
                          key={city}
                          value={city}
                          onSelect={(currentValue) => {
                            setSelectedCity(currentValue === selectedCity ? "" : city);
                            setIsLocationOpen(false);
                          }}
                          className="cursor-pointer"
                        >
                          <Check className={cn("mr-2 h-4 w-4", selectedCity === city ? "opacity-100" : "opacity-0")} />
                          {city}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <div className="w-px bg-gray-200 h-6"></div>

        <div className="flex items-center px-3 py-2.5 w-44 md:w-56">
          <Popover open={isSolutionOpen} onOpenChange={setIsSolutionOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                role="combobox"
                aria-expanded={isSolutionOpen}
                className="justify-between p-0 h-auto font-normal border-0 bg-transparent hover:bg-transparent cursor-pointer w-full text-left"
              >
                {selectedService || "Select Solution"}
                <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <div className="bg-white border border-primary/20 shadow-lg rounded-lg">
                <Command>
                  <CommandInput placeholder="Search solution..." />
                  <CommandList>
                    <CommandEmpty>No solution found.</CommandEmpty>
                    <CommandGroup>
                      {services.map((service) => (
                        <CommandItem
                          key={service}
                          value={service}
                          onSelect={(currentValue) => {
                            setSelectedService(currentValue === selectedService ? "" : service);
                            setIsSolutionOpen(false);
                          }}
                          className="cursor-pointer"
                        >
                          <Check className={cn("mr-2 h-4 w-4", selectedService === service ? "opacity-100" : "opacity-0")} />
                          {service}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        <Button onClick={handleSearch} disabled={!selectedCity} className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-3 h-auto font-medium disabled:opacity-50 ml-1.5">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;


