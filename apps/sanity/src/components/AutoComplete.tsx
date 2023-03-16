import { Autocomplete as SanityAutocomplete, Card, Flex, Box, Text } from "@sanity/ui";
import * as AllFaIcons from "react-icons/fa";
import * as AllMdIcons from "react-icons/md";
import { useCallback, useMemo } from "react";
import { MdSearch } from "react-icons/md";
import { set, StringInputProps, unset } from "sanity";

export const AutoComplete = (props: StringInputProps) => {
  const { onChange, value } = props;
  const options = useMemo(() => {
    return (
      props.schemaType?.options?.list?.map((v) => ({
        value: v as string,
      })) ?? []
    );
  }, [props.schemaType?.options]);

  const handleChange = useCallback(
    (nextValue: string) => {
      onChange(nextValue ? set(nextValue) : unset());
    },
    [onChange]
  );

  return (
    <SanityAutocomplete
      value={value}
      onChange={handleChange}
      fontSize={[2, 2, 3]}
      icon={MdSearch}
      id="icon-autocomplete"
      options={options}
      placeholder="Search Icons"
      renderOption={(option) => {
        const Icon = (AllMdIcons as any)[option.value] ?? (AllFaIcons as any)[option.value];
        return (
          <Card as="button">
            <Flex align="center">
              <Box paddingLeft={3} paddingY={2}>
                <Icon size={40} />
              </Box>
              <Box flex={1} padding={3}>
                <Text size={[2, 2, 3]}>{option.value}</Text>
              </Box>
            </Flex>
          </Card>
        );
      }}
    />
  );
};
