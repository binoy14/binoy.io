import { getContacts, type GetContacts } from '$lib/groq/getContacts';
import { sanityClient } from '$lib/sanityClient';

export async function load() {
  const contacts = await sanityClient.fetch<GetContacts>(getContacts);

  return {
    contacts,
  };
}
