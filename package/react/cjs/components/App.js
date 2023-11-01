"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _KonstaProvider = require("../shared/KonstaProvider.js");
var _useAutoTheme = require("../shared/use-auto-theme.js");
var _AppClasses = require("../../../shared/cjs/classes/AppClasses.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const App = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    theme = 'material',
    dark = true,
    touchRipple = true,
    safeAreas = true,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const Component = component;
  const attrs = {
    ...rest
  };
  const currentTheme = (0, _useAutoTheme.useAutoTheme)(theme);
  const classes = (0, _AppClasses.AppClasses)({
    ...props,
    safeAreas
  }, currentTheme, className);
  return /*#__PURE__*/_react.default.createElement(_KonstaProvider.KonstaProvider, {
    theme: currentTheme,
    dark: dark,
    touchRipple: touchRipple,
    autoThemeDetection: false
  }, /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: classes
  }, attrs), children));
});
App.displayName = 'App';
var _default = exports.default = App;