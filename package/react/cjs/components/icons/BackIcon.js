"use strict";

exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const BackIcon = _ref => {
  let {
    theme,
    ...rest
  } = _ref;
  return theme === 'ios' ? /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "currentcolor"
  }, rest), /*#__PURE__*/_react.default.createElement("path", {
    d: "M0.18261596,9.4221638 C0.21783626,9.37068075 0.25835058,9.32165682 0.30416276,9.27584463 L9.1425872,0.4374202 C9.7256776,-0.14567018 10.6691555,-0.1475686 11.2590259,0.44230183 C11.8448123,1.02808827 11.8502479,1.97240019 11.2639075,2.55874056 L3.82594417,9.9967039 L11.2578297,17.4285894 C11.8409201,18.0116798 11.8428185,18.9551577 11.252948,19.5450281 C10.6671616,20.1308146 9.7228497,20.1362501 9.13650932,19.5499097 L0.2980849,10.7114853 C-0.0545897,10.3588107 -0.0959125,9.8144953 0.18261596,9.4221638 Z"
  })) : /*#__PURE__*/_react.default.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentcolor"
  }, rest), /*#__PURE__*/_react.default.createElement("polygon", {
    points: "16 7 3.83 7 9.42 1.41 8 0 0 8 8 16 9.41 14.59 3.83 9 16 9"
  }));
};
var _default = exports.default = BackIcon;