// Single source of truth for mapping a document to its front-end path.
// Used by both the Presentation `resolve` locations and the in-document
// Preview pane so the two never drift apart.
export function getPreviewPath(type?: string, slug?: string): string | null {
  switch (type) {
    case 'homepage':
      return '/';
    case 'blog':
      return slug ? `/blogs/${slug}` : null;
    case 'project':
      return slug ? `/project/${slug}` : null;
    default:
      return null;
  }
}
