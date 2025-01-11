import { render } from '@testing-library/svelte/svelte5';

import ButtonInput from '../ButtonInput.svelte';

test('renders the button input', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component = render(ButtonInput as any, {
    props: {
      items: [1],
      label: 'button',
      title: 'Button',
      value: 1,
      placeholder: '%',
      formatter: (value: number) => `${value}`,
      inputChange: () => {},
    },
  });

  expect(component.container).toMatchSnapshot();
});
