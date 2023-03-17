import groq from "groq";

export const getContacts = groq`*[_type == "contact"] {
  link,
  title
} | order(title asc)`;

export type GetContacts = GetContact[];

export interface GetContact {
  link: string;
  title: string;
}
