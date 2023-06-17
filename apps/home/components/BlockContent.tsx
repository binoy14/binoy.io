import { PortableText, PortableTextProps } from "@portabletext/react";
import Link from "next/link";
import { Highlight, themes } from "prism-react-renderer";

import { Image } from "../components/Image";

export const BlockContent: React.FC<PortableTextProps> = ({ value }) => {
  return (
    <div className="prose prose-invert !max-w-md md:!max-w-2xl lg:!max-w-none">
      <PortableText
        value={value}
        components={{
          types: {
            image: (props) => {
              return (
                <Image
                  src={props.value}
                  alt={props.value.alt}
                  width={600}
                  height={400}
                  className="m-auto"
                  priority={false}
                  placeholder="blur"
                />
              );
            },
            code: (props) => {
              return (
                <Highlight theme={themes.vsDark} code={props.value.code} language={props.value.language}>
                  {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre className={className} style={style}>
                      {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span key={key} {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              );
            },
          },
          marks: {
            internalLink(props) {
              return <Link href={props.value.slug.current}>{props.text}</Link>;
            },
            link: (props) => {
              const { text, value } = props;
              const { href, blank } = value;

              return blank ? (
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {text}
                </a>
              ) : (
                <a href={href}>{props.text}</a>
              );
            },
          },
        }}
        onMissingComponent={(component) => {
          console.warn("Missing component", component);
          return null;
        }}
      />
    </div>
  );
};
