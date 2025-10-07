import { Metadata } from "next";
import Client from "./client";
import { getCountries } from "@/lib/countries";

export const metadata: Metadata = {
  title: 'Favoritos',
};

export default async function Favoritos() {
  const dataApi = await getCountries();

  return <Client dataApi={dataApi}></Client>;
}
