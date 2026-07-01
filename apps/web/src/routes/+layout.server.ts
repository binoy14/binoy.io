import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ locals }) => {
  const { previewEnabled } = locals.sanity;
  return { previewEnabled };
};
