import { PortableText, PortableTextProps } from "@portabletext/react";

export const BlockContent: React.FC<PortableTextProps> = ({ value }) => {
  return (
    <div className="prose prose-invert !max-w-none">
      <PortableText value={value} />
    </div>
  );
};
