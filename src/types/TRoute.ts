import { ReactNode } from "react";

export {};

declare global {
  type TRoute = {
    path: string;
    component: ReactNode;
    layout?: ReactNode;
  };
}
