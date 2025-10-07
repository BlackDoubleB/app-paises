"use client"
import { Input } from "@/components/ui/Input";
type Props = {
  nombrePais: string;
  setNombrePais: (v: string) => void;
};
export default function Pais({ nombrePais, setNombrePais }: Props){
   
    return(
        <div className="flex flex-col gap-2 ">
            <label className="font-bold">Pais</label>
            <Input placeholder="Nombre" value={nombrePais} onChange={e => setNombrePais(e.target.value)}></Input>
        </div>
    )
}