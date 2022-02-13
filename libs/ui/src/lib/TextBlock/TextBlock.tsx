import { Maybe } from "@binoy14/cms-types";

export interface TextBlockProps {
  header: string;
  subtext?: Maybe<string>;
}

export function TextBlock({ header, subtext }: TextBlockProps) {
  return (
    <div className="my-5">
      <h1 className="mb-1 text-3xl">{header}</h1>
      <span>{subtext}</span>
    </div>
  );
}
