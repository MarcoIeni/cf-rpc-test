import { WorkerEntrypoint } from "cloudflare:workers";

export class MyClass extends WorkerEntrypoint {
  async fetch() {
    return new Response("Hello from Worker A");
  }

  add(a: number, b: number) {
    return a + b;
  }
}
