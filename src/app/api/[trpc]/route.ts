import { createNextApiHandler } from "@trpc/server/adapters/next";
import { env } from "@/env.mjs";
import { appRouter } from "@/server/api/root";
import { createTRPCContext } from "@/trpc";

// export API handler
const handler = () => {
    createNextApiHandler({
        router: appRouter,
        createContext: createTRPCContext,
        onError:
            env.NODE_ENV === "development"
                ? ({ path, error }) => {
                    console.error(
                        `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
                    );
                }
                : undefined,
    });
}


// this is the server RPC API handler
export const GET = handler;
export const POST = handler;