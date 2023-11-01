"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _BackIcon = _interopRequireDefault(require("./icons/BackIcon.js"));
var _Link = _interopRequireDefault(require("./Link.js"));
var _NavbarBackLinkClasses = require("../../../shared/cjs/classes/NavbarBackLinkClasses.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const NavbarBackLink = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'a',
    className,
    text = 'Back',
    showText = 'auto',
    ios,
    material,
    onClick,
    // Children
    children,
    // Rest
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
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
  const shouldShowText = showText === 'auto' && theme === 'ios' || showText === true;
  const c = themeClasses((0, _NavbarBackLinkClasses.NavbarBackLinkClasses)(), className);
  return /*#__PURE__*/_react.default.createElement(_Link.default, _extends({
    ref: elRef,
    component: component,
    className: c.base,
    navbar: true
  }, attrs, {
    onClick: onClick
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: c.icon
  }, /*#__PURE__*/_react.default.createElement(_BackIcon.default, {
    theme: theme
  })), shouldShowText && /*#__PURE__*/_react.default.createElement("span", null, text), children);
});
NavbarBackLink.displayName = 'NavbarBackLink';
var _default = exports.default = NavbarBackLink;