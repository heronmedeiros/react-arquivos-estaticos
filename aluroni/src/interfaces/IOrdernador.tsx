import React from "react";

export default interface IOrdernador{
  ordenador: string,
  setOrdenador: React.Dispatch<React.SetStateAction<string>>
}