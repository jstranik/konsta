"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _TabbarLinkClasses = require("../../../shared/cjs/classes/TabbarLinkClasses.js");
var _TabbarLinkColors = require("../../../shared/cjs/colors/TabbarLinkColors.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _Link = _interopRequireDefault(require("./Link.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const TabbarLink = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    className,
    active,
    ios,
    material,
    colors: colorsProp,
    linkProps = {},
    icon,
    label,
    children,
    ...rest
  } = props;
  const elRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, () => ({
    el: elRef.current
  }));
  const attrs = {
    ...linkProps,
    ...rest
  };
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _TabbarLinkColors.TabbarLinkColors)(colorsProp, dark);
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const hasIcon = !!icon;
  const hasLabel = label || children && children.length;
  const c = themeClasses((0, _TabbarLinkClasses.TabbarLinkClasses)({
    hasLabel,
    hasIcon,
    active
  }, colors));
  return /*#__PURE__*/_react.default.createElement(_Link.default, _extends({
    ref: elRef,
    tabbar: true,
    tabbarActive: active,
    className: className
  }, attrs), /*#__PURE__*/_react.default.createElement("span", {
    className: c.content
  }, icon && /*#__PURE__*/_react.default.createElement("span", {
    className: c.iconContainer
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: c.iconBg
  }), icon), (label || children && children.length) && /*#__PURE__*/_react.default.createElement("span", {
    className: c.label
  }, label, children)));
});
TabbarLink.displayName = 'TabbarLink';
var _default = exports.default = TabbarLink;