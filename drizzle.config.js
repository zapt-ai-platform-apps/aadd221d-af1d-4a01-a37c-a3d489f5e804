import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./drizzle/schema.js",
  out: "./drizzle",
});