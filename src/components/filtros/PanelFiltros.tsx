"use client";
import Card from "../ui/Card";
import Pagination from "../ui/Pagination";
import OrdenarPais from "./ordenarPais";
import Pais from "./Pais";
import Poblacion from "./Poblacion";
import Region from "./Region";
import { Country, Orden } from "@/lib/types";
import { norm } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";

export default function PanelFiltros({ dataApi }: { dataApi: Country[] }) {
  const [nombrePais, setNombrePais] = useState("");
  const [nombreRegion, setNombreRegion] = useState("");
  const [max, setMax] = useState(0);
  const [min, setMin] = useState(0);
  const [orden, setOrden] = useState<Orden>("");
  const [paginaActual, setPaginaActual] = useState(1);

  const NUMERO_CARDS = 6;

  useEffect(() => {
    setPaginaActual(1);
  }, [nombrePais, nombreRegion, min, max, orden, dataApi]);

  const filtrosCard = useMemo<{dataPage: Country[];numeroPaginas: number}>(() =>
     {
    const nombreNorm = norm(nombrePais);
    const regionNorm = norm(nombreRegion);

    const minPoblacion = Math.abs(min);
    const maxPoblacion = Math.abs(max);

    const esMin = Number.isFinite(minPoblacion) && minPoblacion > 0;
    const esMax = Number.isFinite(maxPoblacion) && maxPoblacion > 0;

    let limiteMin = esMin ? minPoblacion : -Infinity;
    let limiteMax = esMax ? maxPoblacion : Infinity;

    const data = dataApi.filter((data) => {
      const filtroPais = nombreNorm
        ? norm(data.name.common).includes(nombreNorm)
        : true;
      const filtroRegion = regionNorm
        ? norm(data.region).includes(regionNorm)
        : true;
      const filtroRango =
        data.population >= limiteMin && data.population <= limiteMax;

      return filtroPais && filtroRegion && filtroRango;
    });

    const countData = data.length;
    const numeroPaginas = Math.ceil(countData / NUMERO_CARDS);
    const dataPage = data.slice(paginaActual * NUMERO_CARDS - NUMERO_CARDS, paginaActual * NUMERO_CARDS);

    if (orden == "") {
      return {dataPage:dataPage, numeroPaginas};
    }

    const coll = new Intl.Collator("es", { sensitivity: "base" });

    if (orden === "asc") {
      const ordenAsc = [...data].sort((a, b) =>
        coll.compare(a.name.common, b.name.common)
      );
      return {dataPage: ordenAsc.slice(paginaActual * 6 - 6, paginaActual * 6), numeroPaginas};
    }

    if (orden === "desc") {
      const ordenDesc = [...data].sort((a, b) =>
        coll.compare(b.name.common, a.name.common)
      );
      return {dataPage:ordenDesc.slice(paginaActual * 6 - 6, paginaActual * 6), numeroPaginas};
    }

    return { dataPage:dataPage, numeroPaginas };
  }, [dataApi, nombrePais, nombreRegion, min, max, orden, paginaActual]);

  const filtrosRegion = useMemo(
    () => [...new Set(dataApi.map((p) => p.region).filter(Boolean))],
    [dataApi]
  );

  return (
    <div className="flex flex-col xl:flex-row xl:items-start items-center justify-center w-full flex-1">
      <div className="min-xl:sticky min-xl:top-17 py-5">
        <h1 className="text-4xl font-bold pb-5">Paises</h1>
        <div className="flex flex-col gap-5 rounded-md max-[300px]:p-5 p-10 h-fit bg-royal-blue-200 border border-royal-blue-100 shadow-md shadow-royal-blue-400 w-full max-w-80">
          <Pais nombrePais={nombrePais} setNombrePais={setNombrePais}></Pais>
          <Region
            nombreRegion={nombreRegion}
            filtradosRegion={filtrosRegion}
            setNombreRegion={setNombreRegion}
          ></Region>
          <Poblacion
            min={min}
            max={max}
            setMin={setMin}
            setMax={setMax}
          ></Poblacion>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 h-full w-full">
        <OrdenarPais orden={orden} setOrden={setOrden}></OrdenarPais>

        <div className="flex justify-center h-full self-stretch w-full flex-wrap gap-10">
          {filtrosCard.dataPage.length === 0 ? (
            <div className="bg-royal-blue-200 rounded-md flex flex-col justify-center items-center gap-2 border border-royal-blue-100 shadow-md shadow-royal-blue-400 cursor-pointer self-stretch w-full max-w-80 aspect-[3/3.2]">
              Sin resultados.
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5em"
                height="5em"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8 12l2-1.5L8 9m8 3l-2-1.5L16 9m0 7l-1.333-1l-1.334 1L12 15l-1.333 1l-1.334-1L8 16"
                  />
                </g>
              </svg>
            </div>
          ) : (
            filtrosCard.dataPage.map((x,i) => (
              <div
                className="h-full max-w-80 w-full"
                key={x.cca3 ?? x.name.common} 
              >
                <Card paises={x} priority={i === 0}  />
              </div>
            ))
          )}
        </div>
        <Pagination
          numeroPaginas={filtrosCard.numeroPaginas}
          paginaActual={paginaActual}
          setPaginaActual={setPaginaActual}
        ></Pagination>
      </div>
    </div>
  );
}
