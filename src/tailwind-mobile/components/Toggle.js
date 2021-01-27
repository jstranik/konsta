import React from 'react';
import { cls } from '../shared/cls';
import { useTheme } from '../shared/use-theme';

const Toggle = (props) => {
  const {
    tag = 'label',
    className,
    colors: colorsProp,

    defaultChecked,
    checked,
    name,
    value,
    disabled,
    readOnly,
    onChange,

    // Theme
    ios,
    material,

    // Children
    children,

    // Rest
    ...rest
  } = props;

  const Component = tag;

  const attrs = {
    ...rest,
  };

  const { themeClasses } = useTheme({ ios, material });

  const colors = {
    bg: 'bg-primary',
    ...colorsProp,
  };

  const state =
    checked || (defaultChecked && !onChange) ? 'checked' : 'notChecked';

  const c = {
    base: {
      initial: `cursor-pointer inline-block align-middle relative duration-300 rounded-full`,
      ios: 'h-8 w-13 p-0.5',
      material: 'w-9 h-3',
      notChecked: {
        ios: 'bg-gray-200',
        material: 'bg-gray-300',
      },
      checked: {
        ios: `${colors.bg}`,
        material: `${colors.bg} bg-opacity-50`,
      },
    },
    inner: {
      ios: 'w-full h-full bg-white rounded-full block duration-300 transform',
      checked: {
        ios: 'scale-0',
      },
    },
    knob: {
      initial: 'rounded-full absolute duration-300 transform',
      ios: 'w-7 h-7 shadow left-0.5 top-0.5 bg-white',
      material: 'w-5 h-5 shadow-md left-0 -top-1',
      checked: {
        ios: 'translate-x-5',
        material: `${colors.bg} translate-x-4`,
      },
      notChecked: {
        material: 'bg-white',
      },
    },
    input: {
      initial: 'hidden',
    },
  };

  const classes = cls(themeClasses(c.base, state), className);
  const inputClasses = themeClasses(c.input);
  const innerClasses = themeClasses(c.inner, state);
  const knobClasses = themeClasses(c.knob, state);

  return (
    <Component className={classes} {...attrs}>
      <input
        type="checkbox"
        name={name}
        value={value}
        disabled={disabled}
        readOnly={readOnly}
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
        className={inputClasses}
      />
      <span className={innerClasses} />
      <span className={knobClasses} />
      {children}
    </Component>
  );
};

export default Toggle;