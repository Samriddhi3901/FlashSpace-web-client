import { useMemo } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type ListingFiltersProps = {
  service: string;
  onServiceChange: (value: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
};

const ListingFilters = ({ service, onServiceChange, sortBy, onSortByChange }: ListingFiltersProps) => {
  const services = useMemo(() => [
    "All Services",
    "Virtual Office",
    "Coworking Space",
    "On Demand",
    "Business Setup",
  ], []);

  const sorts = useMemo(() => [
    { value: "popularity", label: "Sort By: Popularity" },
    { value: "rating", label: "Sort By: Rating" },
    { value: "price_low", label: "Price: Low to High" },
    { value: "price_high", label: "Price: High to Low" },
  ], []);

  return (
    <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
      <Select value={service || "All Services"} onValueChange={onServiceChange}>
        <SelectTrigger className="w-full md:w-56">
          <SelectValue placeholder="All Services" />
        </SelectTrigger>
        <SelectContent>
          {services.map((s) => (
            <SelectItem key={s} value={s}>{s}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={sortBy} onValueChange={onSortByChange}>
        <SelectTrigger className="w-full md:w-56">
          <SelectValue placeholder="Sort By" />
        </SelectTrigger>
        <SelectContent>
          {sorts.map((s) => (
            <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ListingFilters;


