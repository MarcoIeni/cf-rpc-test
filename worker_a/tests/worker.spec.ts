import {
  createExecutionContext,
  env,
  waitOnExecutionContext,
} from "cloudflare:test";
import { describe, expect, it } from "vitest";
import { MyClass } from "../src/worker";

it("responds with Hello World!", async () => {
  const ctx = createExecutionContext();
  let c = new MyClass(ctx, env);
});
