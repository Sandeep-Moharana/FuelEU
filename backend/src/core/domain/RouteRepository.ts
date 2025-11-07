import { Route } from "../domain/Route.ts".ts"";

export interface RouteRepository {
  getAll(): Promise<Route[]>;
  setBaseline(routeId: number): Promise<void>;
  getBaseline(): Promise<Route | null>;
}

