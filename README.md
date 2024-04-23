# cf-rpc-test

Cloudflare workers RPC bug reproduction.

Apparently you can't instantiate RPC from a test.
If so, how do you test RPC?

## Error

```
$ npx vitest

[...]

TypeError: Failed to construct 'WorkerEntrypoint': constructor parameter 1 is not of type 'ExecutionContext'.
 ❯ new MyClass src/worker.ts:3:8
      1| import { WorkerEntrypoint } from "cloudflare:workers";
      2|
      3| export class MyClass extends WorkerEntrypoint {
       |        ^
      4|   async fetch() {
      5|     return new Response("Hello from Worker B");
 ❯ tests/worker.spec.ts:11:11
```
