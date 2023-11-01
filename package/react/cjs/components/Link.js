"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _cls = require("../../../shared/cjs/cls.js");
var _useTheme = require("../shared/use-theme.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useTouchRipple = require("../shared/use-touch-ripple.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _LinkClasses = require("../../../shared/cjs/classes/LinkClasses.js");
var _LinkColors = require("../../../shared/cjs/colors/LinkColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Link = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'a',
    className,
    colors: colorsProp,
    // Toolbar/navbar link
    navbar,
    toolbar,
    iconOnly,
    linkProps = {},
    tabbar,
    tabbarActive,
    touchRipple = undefined,
    ios,
    material,
    onClick,
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
    ...linkProps,
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
  const needsTouchRipple = theme === 'material' && (touchRipple || (toolbar || tabbar || navbar) && typeof touchRipple === 'undefined');
  (0, _useTouchRipple.useTouchRipple)(rippleElRef, needsTouchRipple);
  const colors = (0, _LinkColors.LinkColors)(colorsProp, dark);

  // prettier-ignore
  const themeTextColor = props.navbar ? theme === 'material' ? colors.navbarTextMaterial : colors.navbarTextIos : theme === 'material' ? colors.textMaterial : colors.textIos;
  const textColor = tabbar && !tabbarActive ? colors.tabbarInactive : themeTextColor;
  const tabbarState = tabbarActive ? 'active' : 'inactive';
  const c = themeClasses((0, _LinkClasses.LinkClasses)(props, {
    textColor,
    needsTouchRipple
  }, className));
  const classes = (0, _cls.cls)(
  // base
  c.base[tabbar ? 'default' : 'notTabbar'], toolbar && c.toolbar, navbar && c.navbar, tabbar && c.tabbar[tabbarState], className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: rippleElRef,
    className: classes
  }, attrs, {
    role: "link",
    tabIndex: "0",
    onClick: onClick
  }), children);
});
Link.displayName = 'Link';
var _default = exports.default = Link;