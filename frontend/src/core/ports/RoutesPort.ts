import { Route } from "../domain/Route.ts";

export interface RoutesPort {
  fetchRoutes(): Promise<Route[]>;
  setBaseline(id: number): Promise<void>;
  fetchComparison(): Promise<Array<{
    routeId: string;
    baselineIntensity: number;
    comparisonIntensity: number;
    percentDiff: number;
    compliant: boolean;
  }>>;
}
