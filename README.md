## Installation

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the project using `npm run dev` or `yarn dev`.

## Selector Component

The `Selector` component allows users to select one or multiple options from a list. It supports searching through the options and multiple selections.

### Props

- `options`: An array of option objects, each of which must have a `label` field and can have an `icon` field.
- `onChange`: A function that is called when the selected options change. It takes an array of selected options.
- `theme`: Optionally, the styling theme of the component. Default is `light`.
- `size`: Optionally, the size of the component. Default is `md`.

### Styling

The `Selector` component uses SCSS for styling. You can customize the appearance of the component by modifying the theme and size variables.

#### Themes

- `primary`: The primary(Blue) theme of the project.
- `secondary`: The secondary(Gray) theme of the project.
- `light`: A light theme.(default)
- `Dark`: A dark theme

#### Sizes

- `sm`: Small size.
- `md`: Medium size (default).
- `lg`: Large size

### Usage Example

```jsx
import Selector from './components/Selector/Selector';

function App() {
  const options = [{ label: 'Option 1' }, { label: 'Option 2', icon: 'assets/icons/icon.svg }];
  const onChange = (selectedOptions) => console.log(selectedOptions);

  return <Selector options={options} onChange={onChange} theme="primary" size="sm" />;
}
