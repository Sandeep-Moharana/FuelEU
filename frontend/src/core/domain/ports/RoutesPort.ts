import { Route } from "../domain/Route";

export interface RoutesPort {
  fetchRoutes(): Promise<Route[]>;
  setBaseline(id: number): Promise<void>;
  fetchComparison(): Promise<any>;
}
