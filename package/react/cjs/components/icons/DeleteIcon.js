"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const DeleteIcon = _ref => {
  let {
    theme,
    ...rest
  } = _ref;
  return theme === 'ios' ? /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    viewBox: "0 0 28 28",
    fill: "currentcolor"
  }, rest), /*#__PURE__*/_react.default.createElement("path", {
    d: "M14,0 C21.7319865,0 28,6.2680135 28,14 C28,21.7319865 21.7319865,28 14,28 C6.2680135,28 0,21.7319865 0,14 C0,6.2680135 6.2680135,0 14,0 Z M18.9393398,6.93933983 L14,11.8786797 L9.06066017,6.93933983 L6.93933983,9.06066017 L11.8786797,14 L6.93933983,18.9393398 L9.06066017,21.0606602 L14,16.1213203 L18.9393398,21.0606602 L21.0606602,18.9393398 L16.1213203,14 L21.0606602,9.06066017 L18.9393398,6.93933983 Z"
  })) : /*#__PURE__*/_react.default.createElement("svg", _extends({
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, rest), /*#__PURE__*/_react.default.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12 10.59L15.59 7L17 8.41L13.41 12L17 15.59L15.59 17L12 13.41L8.41 17L7 15.59L10.59 12L7 8.41L8.41 7L12 10.59Z",
    fill: "currentcolor"
  }));
};
var _default = exports.default = DeleteIcon;