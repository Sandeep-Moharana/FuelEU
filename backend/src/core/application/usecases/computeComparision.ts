import { Route } from "../../domain/Route.ts".ts"";

export function computeComparison(baseline: Route, others: Route[]) {
  return others.map(route => {
    const percentDiff = ((route.ghgIntensity / baseline.ghgIntensity) - 1) * 100;
    const compliant = route.ghgIntensity <= 89.3368; // 2% below 91.16

    return {
      routeId: route.routeId,
      baselineIntensity: baseline.ghgIntensity,
      comparisonIntensity: route.ghgIntensity,
      percentDiff,
      compliant
    };
  });
}
