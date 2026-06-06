# Erik Handeland Website

This folder contains the personal website for `www.handeland.dev`.

The root `README.md` is the GitHub profile README. The deployable website lives here, and the repository-root `wrangler.jsonc` configures Cloudflare Workers Static Assets.

## Local Development

```sh
npm install
npm run dev
```

## Deploy

```sh
npm run deploy
```

The Worker routes are configured in `wrangler.jsonc` for `www.handeland.dev/*` and `handeland.dev/*` in the `handeland.dev` zone.
