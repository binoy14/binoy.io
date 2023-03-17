import { PortableText, PortableTextProps } from "@portabletext/react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

import { Image } from "../components/Image";

export const BlockContent: React.FC<PortableTextProps> = ({ value }) => {
  return (
    <div className="prose prose-invert !max-w-none">
      <PortableText
        value={value}
        components={{
          types: {
            image: (props) => {
              return <Image src={props.value} alt={props.value.alt} width={800} height={400} className="m-auto" />;
            },
            code: (props) => {
              return (
                <Highlight {...defaultProps} theme={theme} code={props.value.code} language={props.value.language}>
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
        }}
        onMissingComponent={(component) => {
          console.warn("Missing component", component);
          return null;
        }}
      />
    </div>
  );
};
