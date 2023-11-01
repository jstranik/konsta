"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _ActionsButtonClasses = require("../../../shared/cjs/classes/ActionsButtonClasses.js");
var _ActionsButtonColors = require("../../../shared/cjs/colors/ActionsButtonColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ActionsButton = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'button',
    className,
    colors: colorsProp,
    ios,
    material,
    bold,
    boldIos = false,
    boldMaterial = false,
    fontSizeIos = 'text-xl',
    fontSizeMaterial = 'text-base',
    // Anchor props
    href,
    touchRipple = true,
    dividers = undefined,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: rippleElRef.current
  }));
  let Component = component;
  if (typeof props.component === 'undefined' && (href || href === '')) {
    Component = 'a';
  }
  const attrs = {
    href,
    ...rest
  };
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  (0, _useTouchRipple.useTouchRipple)(rippleElRef, theme === 'material' && touchRipple);
  const colors = (0, _ActionsButtonColors.ActionsButtonColors)(colorsProp, dark);
  const isDividers = typeof dividers === 'undefined' ? theme === 'ios' : dividers;
  const isBold = typeof bold === 'undefined' ? theme === 'ios' ? boldIos : boldMaterial : bold;
  const c = themeClasses((0, _ActionsButtonClasses.ActionsButtonClasses)({
    fontSizeIos,
    fontSizeMaterial,
    bold: isBold,
    dividers: isDividers,
    ...props
  }, colors, dark), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: rippleElRef,
    role: "button",
    tabIndex: "0",
    className: c.base
  }, attrs), children);
});
ActionsButton.displayName = 'ActionsButton';
var _default = exports.default = ActionsButton;