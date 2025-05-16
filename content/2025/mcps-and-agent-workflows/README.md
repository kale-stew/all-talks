---
title: 'MCPs: Going Beyond Task Execution'
category: 'ai'
---

In this lightning demo, I discuss the Model Context Protocol's Host > Client > Server relationship, how we as an industry need to embrace agentic workflows and expand beyond the current 1:1 client:server mental model, and how Cloudflare is the platform making all of this possible.

On May 1, Cloudflare [launched](https://blog.cloudflare.com/thirteen-new-mcp-servers-from-cloudflare) thirteen new public, remote MCP servers for developer use. Some of those servers enable Developer Platform functionality, including:

- [sandbox-container](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/sandbox-container), which can create sandboxed developer environments once authenticated to your Cloudflare account
- [workers-bindings](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/workers-bindings), a control a plane for Workers in your account; create new or modify existing
- [workers-observability](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/workers-observability), which can be used to glean insight about Workers already in your account
- [docs-vectorize](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/docs-vectorize), an autoRAG server that has indexed the Cloudfare developer docs

Any of these remote servers can be accessed from the [Cloudflare AI Playground](https://playground.ai.cloudflare.com) for immediate use, accessed from another client like Claude AI, or leveraged in your local agentic development.

---

## Seen At

**[MCP Night by WorkOS](https://lu.ma/quvg7kzs?tk=hC0BvS)** on May 14th, 2025.
