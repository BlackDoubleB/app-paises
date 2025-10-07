"use client";
import Card from "@/components/ui/Card";
import { Country } from "@/lib/types";
import { useMemo, useState } from "react";
import { useFavorites } from "@/store/favorites";
import Pagination from "@/components/ui/Pagination";
import CardSinResultados from "@/components/ui/CardSinResultados";

export default function Client({ dataApi }: { dataApi: Country[] }) {
  const [paginaActual, setPaginaActual] = useState(1);
  const dataFavoritos = useFavorites((f) => f.items);
  const NUMERO_CARDS = 6;

  const filtroFavoritos = useMemo<{
    dataPage: Country[];
    numeroPaginas: number;
  }>(() => 
  {
    const data = dataApi.filter((c) => dataFavoritos.includes(c.name.common));
    const numeroPaginas = Math.ceil(data.length / NUMERO_CARDS);
    const dataPage = data.slice(paginaActual * NUMERO_CARDS - NUMERO_CARDS, paginaActual * NUMERO_CARDS);
    return { dataPage, numeroPaginas };
  }, [dataApi, dataFavoritos, paginaActual]);

  return (
    <div className="w-full flex flex-col gap-10 flex-1 items-center ">
      <h1 className="text-4xl font-bold pt-10 ">Paises Favoritos</h1>
      <div className="flex flex-wrap gap-10 flex-1 w-full justify-center">
        {filtroFavoritos.dataPage.length === 0 ? (
          <CardSinResultados></CardSinResultados>
        ) : (
          filtroFavoritos.dataPage.map((x, i) => (
            <div className="max-w-80 w-full h-fit" key={x.cca3 ?? x.name.common}>
              <Card paises={x} priority={i === 0}  />
            </div>
          ))
        )}
      </div>
      <Pagination
        numeroPaginas={filtroFavoritos.numeroPaginas}
        paginaActual={paginaActual}
        setPaginaActual={setPaginaActual}
      ></Pagination>
    </div>
  );
}
