import { SANITY_READ_TOKEN } from '$env/static/private';
import { dev } from '$app/environment';
import { sanityClient } from '$lib/sanityClient';

// Without a token the preview client can only read published content, so
// Presentation will silently show no drafts. Fail loudly in dev instead.
if (dev && !SANITY_READ_TOKEN) {
  console.warn(
    '\n[sanity] SANITY_READ_TOKEN is empty — preview/drafts will NOT work (published content only).\n' +
      '         Run `direnv reload` so the root .env is loaded, then restart the dev server.\n',
  );
}

// Preview client: reads drafts (token), bypasses CDN, and embeds content
// source maps (stega) so the Presentation tool can resolve click-to-edit.
export const serverClient = sanityClient.withConfig({
  token: SANITY_READ_TOKEN,
  useCdn: false,
  stega: true,
});
