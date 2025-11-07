import { RoutesPort } from "../../ports/RoutesPort";

export function fetchComparisonUseCase(routesPort: RoutesPort) {
  return () => routesPort.fetchComparison();
}
