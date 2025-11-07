# AI Agent Workflow Log

## Agents Used
- **ChatGPT (GPT-5 Thinking)** — architecture planning, hexagonal refactors, TypeScript/ESM fixes, Windows/Docker troubleshooting.
- **GitHub Copilot (inline)** — boilerplate (props, Tailwind classes), small refactors.

## Prompts & Outputs
- Asked for hexagonal backend skeleton; adopted and refined ports + use-cases.
- Generated frontend ports/use-cases; tightened types for comparison outputs.
- Banking/Pooling use-cases drafted; validated ΣCB ≥ 0 and documented trade-offs.

## Validation / Corrections
- TypeScript strict, runtime checks with `tsx` and Vite.
- Unit tests for `computeCB`, `createPool`; integration tests for routes, banking, pool.
- Replaced ts-node-dev with **tsx** for ESM; ensured explicit `.ts` imports.

## Observations
- Agents accelerate scaffolding and UI boilerplate.
- ESM/Node nuances required manual patches.
- Keep iterations small: generate → compile → run → test.

## Best Practices
- Core independent of frameworks (hexagonal).
- Adapters implement ports; Prisma/Express contained in adapters/infrastructure.
- Keep DTOs predictable between FE/BE.
