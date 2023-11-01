"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _FabClasses = require("../../../shared/cjs/classes/FabClasses.js");
var _FabColors = require("../../../shared/cjs/colors/FabColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Fab = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    href,
    text,
    textPosition = 'after',
    icon,
    ios,
    material,
    touchRipple = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const rippleElRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: rippleElRef.current
  }));
  const Component = component;
  const attrs = {
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
  const colors = (0, _FabColors.FabColors)(colorsProp, dark);
  const c = themeClasses((0, _FabClasses.FabClasses)(props, colors), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    className: text ? c.base.withText : c.base.iconOnly,
    href: href,
    ref: rippleElRef,
    role: "button",
    tabIndex: "0"
  }, attrs), text && textPosition === 'before' && /*#__PURE__*/_react.default.createElement("span", {
    className: c.text
  }, text), icon && /*#__PURE__*/_react.default.createElement("span", {
    className: c.icon
  }, icon), text && textPosition === 'after' && /*#__PURE__*/_react.default.createElement("span", {
    className: c.text
  }, text), children);
});
Fab.displayName = 'Fab';
var _default = exports.default = Fab;