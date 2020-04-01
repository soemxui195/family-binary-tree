"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import "./TextInput.css";

var TextInput = function TextInput(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? "text" : _ref$type,
      label = _ref.label,
      placeholder = _ref.placeholder,
      value = _ref.value,
      _onChange = _ref.onChange,
      helpText = _ref.helpText;
  return _react2.default.createElement(
    "div",
    { className: "simple-form-group" },
    label && _react2.default.createElement(
      "label",
      { className: "simple-text-label" },
      label,
      _react2.default.createElement(
        "span",
        null,
        "No need to build"
      )
    ),
    _react2.default.createElement("input", {
      type: type,
      className: "simple-text-input",
      value: value,
      onChange: function onChange(e) {
        return _onChange && _onChange(e.target.value);
      },
      placeholder: placeholder
    }),
    helpText && _react2.default.createElement(
      "small",
      { className: "simple-form-text" },
      helpText
    )
  );
};

exports.default = TextInput;