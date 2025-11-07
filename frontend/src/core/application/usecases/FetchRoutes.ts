import { RoutesPort } from "../../ports/RoutesPort";

export function fetchRoutesUseCase(routesPort: RoutesPort) {
  return () => routesPort.fetchRoutes();
}
