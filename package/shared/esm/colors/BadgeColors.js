export const BadgeColors = function (colorsProp) {
  if (colorsProp === void 0) {
    colorsProp = {};
  }
  return {
    bg: 'bg-primary',
    text: 'text-white',
    ...colorsProp
  };
};