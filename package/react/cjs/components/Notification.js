"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _NotificationsClasses = require("../../../shared/cjs/classes/NotificationsClasses.js");
var _NotificationsColors = require("../../../shared/cjs/colors/NotificationsColors.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useTheme = require("../shared/use-theme.js");
var _DeleteIcon = _interopRequireDefault(require("./icons/DeleteIcon.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Notification = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    button,
    icon,
    title,
    titleRightText,
    subtitle,
    text,
    translucent = true,
    opened,
    onClose,
    ios,
    material,
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
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _NotificationsColors.NotificationsColors)(colorsProp, dark);
  const c = themeClasses((0, _NotificationsClasses.NotificationsClasses)({
    ...props,
    translucent
  }, colors, className), className);
  if (theme === 'ios') return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("div", {
    className: c.header
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: c.icon
  }, icon), title && /*#__PURE__*/_react.default.createElement("div", {
    className: c.title
  }, title), titleRightText && /*#__PURE__*/_react.default.createElement("div", {
    className: c.titleRightText
  }, titleRightText), button && /*#__PURE__*/_react.default.createElement("div", {
    className: c.button,
    role: "button",
    tabIndex: "0",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    theme: theme,
    className: c.deleteIcon
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: c.content
  }, subtitle && /*#__PURE__*/_react.default.createElement("div", {
    className: c.subtitle
  }, subtitle), text && /*#__PURE__*/_react.default.createElement("div", {
    className: c.text
  }, text), children));
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base
  }, attrs), /*#__PURE__*/_react.default.createElement("div", {
    className: c.header
  }, icon && /*#__PURE__*/_react.default.createElement("div", {
    className: c.icon
  }, icon), /*#__PURE__*/_react.default.createElement("div", {
    className: c.contentWrapper
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: c.contentTitle
  }, title && /*#__PURE__*/_react.default.createElement("div", {
    className: c.title
  }, title), titleRightText && /*#__PURE__*/_react.default.createElement("div", {
    className: c.titleRightText
  }, titleRightText)), /*#__PURE__*/_react.default.createElement("div", {
    className: c.content
  }, subtitle && /*#__PURE__*/_react.default.createElement("div", {
    className: c.subtitle
  }, subtitle), text && /*#__PURE__*/_react.default.createElement("div", {
    className: c.text
  }, text), children)), button && /*#__PURE__*/_react.default.createElement("div", {
    className: c.button,
    role: "button",
    tabIndex: "0",
    onClick: onClose
  }, /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    theme: theme,
    className: c.deleteIcon
  }))));
});
Notification.displayName = 'Notification';
var _default = exports.default = Notification;