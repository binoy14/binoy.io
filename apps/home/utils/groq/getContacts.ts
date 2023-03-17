import groq from "groq";

export const getContacts = groq`*[_type == "contact" && !(_id in path("drafts.**"))] {
  link,
  title
} | order(title asc)`;

export type GetContacts = GetContact[];

export interface GetContact {
  link: string;
  title: string;
}
