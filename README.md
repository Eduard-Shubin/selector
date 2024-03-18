# Project Overview

This project includes a React component named `Selector` designed for selecting one or multiple options from a list. The component supports searching through the options and allows for multiple selections.

## Installation

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Start the project using `npm run dev` or `yarn dev`.

## Features

- **Selector Component**: Enables users to select options from a dropdown list. It supports searching and multiple selections.
- **Customizable Themes**: Comes with pre-defined themes (primary, secondary, light, dark) and sizes (sm, md, lg) for customization.

## Selector Component

### Props

- `options`: An array of option objects, where each object must include a `label` and can optionally include an `icon`.
- `onChange`: A function that is called when the selected options change. It receives an array of the selected options as its parameter.
- `theme`: Optionally, the styling theme of the component. Defaults to `light`.
- `size`: Optionally, the size of the component. Defaults to `md`.

### Styling

The Selector component utilizes SCSS for styling. You can customize the appearance by modifying the theme and size variables.

#### Themes

- `primary`: The primary (Blue) theme.
- `secondary`: The secondary (Gray) theme.
- `light`: A light theme (default).
- `dark`: A dark theme.

#### Sizes

- `sm`: Small size.
- `md`: Medium size (default).
- `lg`: Large size.

### Usage Example

```jsx
import Selector from './components/Selector/Selector';

function App() {
  const options = [{ label: 'Option 1' }, { label: 'Option 2', icon: 'assets/icons/icon.svg }];
  const onChange = (selectedOptions) => console.log(selectedOptions);

  return &lt;Selector options={options} onChange={onChange} theme="primary" size="sm" /&gt;;
}
