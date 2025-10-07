"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Orden } from "@/lib/types";

type Props = {
  orden: Orden;
  setOrden: (v: Orden) => void;
};

export default function OrdenarPais({ orden, setOrden }: Props) {
  return (
    <div className="flex gap-2  pt-5 w-full">
      <div className="flex flex-wrap justify-center   items-center gap-2 w-full">
        <div className="w-fit">
          <Select value={orden} onValueChange={setOrden}>
          <SelectTrigger>
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Pais (A-Z)</SelectItem>
            <SelectItem value="desc">Pais (Z-A)</SelectItem>
          </SelectContent>
        </Select>
        </div>
        <button
          className=" bg-royal-blue-900 border text-blue-50 border-royal-blue-100 hover:bg-gray-950 duration-200 ease-in-out cursor-pointer p-2.5 rounded-md shadow-md shadow-royal-blue-400 text-xs"
          type="button"
          onClick={() => setOrden("")}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}
