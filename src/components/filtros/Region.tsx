"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";

type Props = {
  setNombreRegion: (v: string) => void;
  nombreRegion: string;
  filtradosRegion: string[];
};

export default function Region({
  setNombreRegion,
  nombreRegion,
  filtradosRegion,
}: Props) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold" id="region-label">Region</label>
      <div className="relative ">
        <div className="absolute h-full flex items-center right-10">
          <button className={`text-neutral-500 hover:text-neutral-950 cursor-pointer ${
                  nombreRegion == ""
                    ? "hidden"
                    : "block"
                }`}  onClick={()=> setNombreRegion("")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M18 6L6 18M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Select value={nombreRegion} onValueChange={setNombreRegion}>
          <SelectTrigger className="w-full overflow-hidden" aria-labelledby="region-label">
            <SelectValue placeholder="Filtrar" />
          </SelectTrigger>
          <SelectContent>
            {filtradosRegion.map((region) => (
              <SelectItem value={region} key={region}>
                {region}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
