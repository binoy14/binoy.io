import { getContacts } from '$lib/groq/getContacts';
import type { GetContactsResult } from '$lib/groq/sanity.types';

export async function load({ locals }) {
  const initial = await locals.sanity.loadQuery<GetContactsResult>(getContacts);

  return { query: getContacts, options: { initial } };
}
