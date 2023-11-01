"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ChipClasses = require("../../../shared/cjs/classes/ChipClasses.js");
var _ChipColors = require("../../../shared/cjs/colors/ChipColors.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _useTheme = require("../shared/use-theme.js");
var _DeleteIcon = _interopRequireDefault(require("./icons/DeleteIcon.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Chip = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    media,
    deleteButton,
    onDelete,
    ios,
    material,
    // Style
    outline,
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
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const theme = (0, _useTheme.useTheme)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const style = outline ? 'outline' : 'fill';
  const colors = (0, _ChipColors.ChipColors)(colorsProp, dark);
  const c = themeClasses((0, _ChipClasses.ChipClasses)(props, colors), className);
  return /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base[style]
  }, attrs), media && /*#__PURE__*/_react.default.createElement("div", {
    className: c.media
  }, media), children, deleteButton && /*#__PURE__*/_react.default.createElement("div", {
    className: c.deleteButton,
    role: "button",
    tabIndex: "0",
    onClick: onDelete
  }, /*#__PURE__*/_react.default.createElement(_DeleteIcon.default, {
    theme: theme,
    className: "h-4 w-4"
  })));
});
Chip.displayName = 'Chip';
var _default = exports.default = Chip;