import { RoutesPort } from "../../ports/RoutesPort.ts";

export function fetchComparisonUseCase(routesPort: RoutesPort) {
  return () => routesPort.fetchComparison();
}
