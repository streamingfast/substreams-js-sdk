# @substreams/sdk

[![CI](https://github.com/substreams-js/substreams-js/actions/workflows/on-push-to-main.yaml/badge.svg)]()
[![License: MIT](https://img.shields.io/github/license/substreams-js/substreams-js)](/LICENSE)

Substreams SDK for writing [Substreams](https://substreams.streamingfast.io/) modules in **TypeScript/JavaScript**, suitable for running in the v8-powered JavaScript runtime inside Substreams.

This package provides decorators, handler registration, store abstraction, and runtime helpers to make writing Substreams modules in JS feel natural and type-safe.

> This is not for consuming Substreams outputs like `@substreams/core` — this is for **authoring** Substreams modules in JS.

---

## Quick Start

### 1. Install the SDK

```bash
# with pnpm
pnpm add @substreams/sdk

# or npm
npm install @substreams/sdk
```

2.  Write your Substreams module

```typescript
import { substreams, Store } from "@substreams/sdk";
import { Events, EventsSchema } from "./pb/proto/contract_pb";

export default class Substreams {
	@substreams.handlers.map([EventsSchema], EventsSchema)
	map_events(input: Events): Events {
		// Transform logic here
		return input;
	}

	@substreams.handlers.store(EventsSchema)
	store_events(store: Store<Events>, input: Events) {
		for (const event of input.usdtTransfers) {
			store.set(event.evtIndex, event.evtTxHash, event);
		}
	}
}
```
