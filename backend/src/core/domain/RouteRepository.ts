import { Route } from "../domain/Route";

export interface RouteRepository {
  getAll(): Promise<Route[]>;
  setBaseline(routeId: number): Promise<void>;
  getBaseline(): Promise<Route | null>;
}

