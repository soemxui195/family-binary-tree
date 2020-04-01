"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const fakeUser = {
//   id: "null",
//   username: "Null",
//   left_child_id: null,
//   right_child_id: null,
//   image: "https://i.imgur.com/AFj9jns.png"
// };
var BinaryTreeNode = function (_React$Component) {
  _inherits(BinaryTreeNode, _React$Component);

  function BinaryTreeNode() {
    _classCallCheck(this, BinaryTreeNode);

    return _possibleConstructorReturn(this, (BinaryTreeNode.__proto__ || Object.getPrototypeOf(BinaryTreeNode)).apply(this, arguments));
  }

  _createClass(BinaryTreeNode, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          user = _props.user,
          allUsers = _props.allUsers,
          deep = _props.deep,
          _props$maxDeep = _props.maxDeep,
          maxDeep = _props$maxDeep === undefined ? 4 : _props$maxDeep,
          renderDetail = _props.renderDetail,
          renderNode = _props.renderNode,
          _onClick = _props.onClick,
          _props$colorText = _props.colorText,
          colorText = _props$colorText === undefined ? "#333" : _props$colorText,
          _props$imageFake = _props.imageFake,
          imageFake = _props$imageFake === undefined ? "https://i.imgur.com/AFj9jns.png" : _props$imageFake,
          _props$nameFake = _props.nameFake,
          nameFake = _props$nameFake === undefined ? "Null" : _props$nameFake;

      var fakeUser = {
        id: "null",
        username: nameFake,
        left_child_id: null,
        right_child_id: null,
        image: imageFake
      };
      var leftChild = allUsers.find(function (item) {
        return item.id === user.left_child_id;
      });
      if (!leftChild) {
        leftChild = fakeUser;
      }
      var rightChild = allUsers.find(function (item) {
        return item.id === user.right_child_id;
      });
      if (!rightChild) {
        rightChild = fakeUser;
      }
      return _react2.default.createElement(
        "li",
        null,
        colorText && _react2.default.createElement(
          "a",
          {
            onClick: function onClick() {
              _onClick && _onClick(user.id);
            },
            href: "javascript:void(0)"
          },
          renderNode ? renderNode(user) : _react2.default.createElement(
            "div",
            { className: "distributor-wrap" },
            _react2.default.createElement(
              "div",
              { className: "avatar" },
              _react2.default.createElement("img", { src: user.image })
            ),
            _react2.default.createElement(
              "span",
              { className: "name", style: { color: colorText } },
              user.username
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "distributor-details" },
            renderDetail ? renderDetail(user) : _react2.default.createElement(
              "div",
              { className: "details-wrap" },
              _react2.default.createElement(
                "div",
                { className: "details-title" },
                "Details In RenderDetail"
              ),
              _react2.default.createElement(
                "div",
                { className: "details-row" },
                _react2.default.createElement(
                  "div",
                  { className: "label" },
                  "NAME"
                ),
                _react2.default.createElement(
                  "div",
                  { className: "value" },
                  user.username
                )
              )
            ),
            _react2.default.createElement("div", { className: "horizontal-line" }),
            " ",
            _react2.default.createElement("div", { className: "sloping-line" })
          )
        ),
        deep < maxDeep && _react2.default.createElement(
          "ul",
          null,
          _react2.default.createElement(BinaryTreeNode, {
            deep: deep + 1,
            maxDeep: maxDeep,
            allUsers: allUsers,
            user: leftChild,
            renderDetail: renderDetail,
            renderNode: renderNode,
            onClick: _onClick,
            colorText: colorText,
            imageFake: imageFake,
            nameFake: nameFake
          }),
          _react2.default.createElement(BinaryTreeNode, {
            deep: deep + 1,
            maxDeep: maxDeep,
            allUsers: allUsers,
            renderDetail: renderDetail,
            renderNode: renderNode,
            user: rightChild,
            onClick: _onClick,
            colorText: colorText,
            imageFake: imageFake,
            nameFake: nameFake
          })
        )
      );
    }
  }]);

  return BinaryTreeNode;
}(_react2.default.Component);

exports.default = BinaryTreeNode;