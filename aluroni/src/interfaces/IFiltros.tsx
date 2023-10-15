import React from "react";

export default interface IFiltros {
  filtro: number | null,
  setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}