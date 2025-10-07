import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 text-center gap-4">
      <h1 className="text-5xl font-bold text-royal-blue-400">404</h1>
      <p className="text-lg text-gray-600">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="bg-royal-blue-400 text-white px-6 py-2 rounded-md hover:bg-royal-blue-500 transition-all"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
