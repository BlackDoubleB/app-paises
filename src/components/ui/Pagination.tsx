"use client";

import { Dispatch, SetStateAction, useMemo } from "react";

type Props = { numeroPaginas: number; paginaActual: number; setPaginaActual: Dispatch<SetStateAction<number>>;};

export default function Pagination({
  numeroPaginas,
  paginaActual,
  setPaginaActual,
}: Props) {
  const MAXIMO_PAGINA = 3;
  if (numeroPaginas < 1) return null;

  const paginas = useMemo(() => {
    const bloqueActual = Math.floor((paginaActual - 1) / MAXIMO_PAGINA);
    const paginaInicio = bloqueActual * MAXIMO_PAGINA + 1;
    const paginaFin = Math.min(paginaInicio + MAXIMO_PAGINA - 1, numeroPaginas);
    return Array.from(
      { length: Math.max(0, paginaFin - paginaInicio + 1) },
      (_, i) => paginaInicio + i
    );
  }, [paginaActual, numeroPaginas]);

  function anterior() {
    if (paginaActual === 1) return;
    setPaginaActual((p) => Math.max(1, p - 1));
  }

  function proximo() {
    if (paginaActual === numeroPaginas) return;
    setPaginaActual((p) => Math.min(numeroPaginas, p + 1));
  }

  return (
    <div className="flex gap-2 w-full justify-center flex-wrap ">
      <button
      type="button"
        disabled={paginaActual === 1}
        className={`rounded-md px-3 py-1 sm:px-5 sm:py-3 shadow-md ${
          paginaActual == 1
            ? "bg-royal-blue-100 text-royal-blue-200 border shadow-md shadow-gray-500 border-royal-blue-50"
            : "bg-royal-blue-200 border border-royal-blue-100 hover:bg-royal-blue-250 cursor-pointer shadow-md shadow-royal-blue-500"
        }`}
        onClick={anterior}
        aria-label="Anterior"
         onMouseDown={(e) => e.preventDefault()} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M17 2L7 12l10 10"
          />
        </svg>
      </button>
      <div>
        <div className="flex gap-1 sm:gap-2">
          {paginas.map(
            (page) =>
              page <= numeroPaginas && (
                <button
                  type="button"
                  key={page}
                  onClick={() => setPaginaActual(page)}
                  onMouseDown={(e) => e.preventDefault()} // no pone focus con click
                  aria-current={page === paginaActual ? "page" : undefined}
                  disabled={page === paginaActual}
                  className={ `cursor-pointer hover:bg-royal-blue-250 rounded-md border border-royal-blue-100 shadow-md shadow-royal-blue-500 px-3 py-1 sm:px-5 sm:py-3 ${
                    paginaActual === page
                      ? "bg-royal-blue-300 hover:bg-royal-blue-300"
                      : "bg-royal-blue-200"
                  }`}
                >
                  {page}
                </button>
              )
          )}
        </div>
      </div>
      <button
        className={`rounded-md px-3 py-1 sm:px-5 sm:py-3 shadow-md ${
          paginaActual == numeroPaginas
            ? "bg-royal-blue-100 text-royal-blue-200 border shadow-md shadow-gray-500 border-royal-blue-50"
            : "bg-royal-blue-200 border border-royal-blue-100 hover:bg-royal-blue-250 cursor-pointer shadow-md shadow-royal-blue-500"
        }`}
        onClick={proximo}
        disabled={paginaActual === numeroPaginas}
        aria-label="Posterior"
        type="button"
         onMouseDown={(e) => e.preventDefault()} 
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="m7 2l10 10L7 22"
          />
        </svg>
      </button>
    </div>
  );
}
