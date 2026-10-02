#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remote3",
  boardId: "remote3-official",
  domain: "remote3.co",
  npmName: "zc-remote3-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
