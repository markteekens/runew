import { mailRouter } from "./routers/mail";
import { createTRPCRouter } from "~/server/api/trpc";
import { blogRouter } from "./routers/blogs";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  mail: mailRouter,
  blogs: blogRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
