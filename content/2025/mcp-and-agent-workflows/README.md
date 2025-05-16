---
title: 'MCP: Going Beyond Task Execution'
category: 'ai'
---

Anthropic's [Model Context Protocol](https://modelcontextprotocol.io/) is having a moment right now. Launched in October 2024, it introduces a standard protocol for enabling LLMs to do more things on the internet.

This protocol also introduces the concept of an MCP host, client, and server:

![The MCP host, client, and model](https://raw.githubusercontent.com/kale-stew/all-talks/refs/heads/main/content/2025/mcp-and-agent-workflows/slides/assets/mcp_model.png)

- The MCP host in this model is the session provider, ideally containing the context and LLM connections on behalf of the agent system.
- The MCP client is created by the host and substantiates a connection to the MCP servers a.k.a. resources.
- The MCP server provides access to a tool or collection of tools.

## Remote Servers

MCP servers introduced a new layer that can be placed over an existing API to enable the underlying functionality for a LLM that may want to access it. Put simply, consider the MCP server to be a set of toddler-friendly keys we provide the model to enable a predetermined set of APIs. Instead of expecting the LLM to know how to navigate every publicly-available API, we are providing the framework by which it can access a set of tools that have clear boundaries and capability.

A lot of companies have been introducing MCP servers, but until ~April 2025 they were primarily focused on locally-enabled functionality. The guides relied on a reader's technical comprehension to get started as most local MCP configurations are discovered in an MCP client application's dotfiles. (_Want to talk to your Notion database from Claude? Just follow these nine brief steps to enable the Notion Integration API for your downloaded instance of Claude AI!_ /s)

Then, the natural next progression of this technology hit: Remote MCP servers. Hosted, already-on servers that enable standard functionality - hot and ready for you to authenticate against your account and use. This made MCP servers even easier to get started with, allowing their use to expand even further.

Right around this time (on May 1, 2025), we at Cloudflare [launched thirteen new public, remote MCP servers](https://blog.cloudflare.com/thirteen-new-mcp-servers-from-cloudflare) for developer use. These servers enable core Workers functionality, including:

- [sandbox-container](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/sandbox-container) ‒ Can provision sandboxed developer environments once authenticated to your Cloudflare account.
- [workers-bindings](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/workers-bindings) ‒ A control a plane for Workers in your account. You can both create new and access or modify existing resources.
- [workers-observability](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/workers-observability) ‒ Can be used to glean insight about Workers already in your account.
- [docs-vectorize](https://github.com/cloudflare/mcp-server-cloudflare/tree/main/apps/docs-vectorize) - An autoRAG server that has indexed the Cloudfare developer docs. Particularly useful in making sure your MCP-capable client knows how to leverage the core Workers APIs it now has access to.

Any of these remote servers can be accessed from the usual suspects: Cloudflare's in-browser [AI Playground](https://playground.ai.cloudflare.com), a downloaded client like Claude AI, or leveraged directly in your agentic development.

## Agentic Workflows

While these MCP servers are great, effective, and did unlock functionality that was necessary to get us to the next stage of agentic development... I fear we still haven't gone quite far enough.

A lot of "agentic" implementations I've seen recently rely on a near 1:1 mapping of server-client functionality. I call this model "task execution" a.k.a. the next generation of API calls. It's not very complex and I don't personally feel it brings anything special to developer tooling. Frankly, MCP servers are just an expensive `curl` when used this way.

A visual of that 1:1 mapping:

![Task execution model: One MCP server to one MCP client](https://raw.githubusercontent.com/kale-stew/all-talks/refs/heads/main/content/2025/mcp-and-agent-workflows/slides/assets/mcp_tasks.png)

We need to start thinking about _true_ agentic experiences— client applications that support agent-to-agent orchestration and are capable of creating effective, functional agent workflows where one agent is able to trigger actions from another. One MCP client can map to many MCP servers, creating a true "agent" that is capable of many functions and has access to more than one set of tools. Even further, we'll soon need to start seeing applications that introduce new agentic communications patterns, like system-to-agent or agent-to-user protocols.

I like this model a lot better:

![Agentic model: One MCP client can map to make MCP servers](https://raw.githubusercontent.com/kale-stew/all-talks/refs/heads/main/content/2025/mcp-and-agent-workflows/slides/assets/mcp_host_client_server_agent.png)

I'm looking forward to following the next iteration of agent implementation— we have a lot to learn in the way of AuthZ/AuthN, IAM roles as they apply to LLM access, and session enforcement.

## Resources

To get started developing your own agent applications, use the [agents SDK](https://github.com/cloudflare/agents).

- [Cloudflare AI Playground](https://playground.ai.cloudflare.com)
- [Guide: Build a Remote MCP server](https://developers.cloudflare.com/agents/guides/remote-mcp-server/)

---

## Seen At

**[MCP Night by WorkOS](https://lu.ma/quvg7kzs?tk=hC0BvS)** on May 14th, 2025
