import { getContacts } from '$lib/groq/getContacts';
import type { GetContactsResult } from '$lib/groq/sanity.types';
import { sanityClient } from '$lib/sanityClient';

export async function load() {
  const contacts = await sanityClient.fetch<GetContactsResult>(getContacts);

  return {
    contacts,
  };
}
