import { RoutesPort } from "../../ports/RoutesPort.ts";

export function fetchRoutesUseCase(routesPort: RoutesPort) {
  return () => routesPort.fetchRoutes();
}
