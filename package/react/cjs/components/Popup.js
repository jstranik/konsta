"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _PopupClasses = require("../../../shared/cjs/classes/PopupClasses.js");
var _useDarkClasses = require("../shared/use-dark-classes.js");
var _useThemeClasses = require("../shared/use-theme-classes.js");
var _PopupColors = require("../../../shared/cjs/colors/PopupColors.js");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Popup = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    component = 'div',
    className,
    colors: colorsProp,
    size = 'w-screen h-screen md:w-160 md:h-160',
    opened,
    backdrop = true,
    onBackdropClick,
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
  const state = opened ? 'opened' : 'closed';
  const Component = component;
  const attrs = {
    ...rest
  };
  const themeClasses = (0, _useThemeClasses.useThemeClasses)({
    ios,
    material
  });
  const dark = (0, _useDarkClasses.useDarkClasses)();
  const colors = (0, _PopupColors.PopupColors)(colorsProp, dark);
  const c = themeClasses((0, _PopupClasses.PopupClasses)({
    ...props,
    size
  }, colors, className), className);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, backdrop && /*#__PURE__*/_react.default.createElement("div", {
    className: c.backdrop[state],
    onClick: onBackdropClick
  }), /*#__PURE__*/_react.default.createElement(Component, _extends({
    ref: elRef,
    className: c.base[state]
  }, attrs), children));
});
Popup.displayName = 'Popup';
var _default = exports.default = Popup;