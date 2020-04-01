"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _BinaryTreeNode = require("./BinaryTreeNode");

var _BinaryTreeNode2 = _interopRequireDefault(_BinaryTreeNode);

var _fa = require("react-icons/fa");

require("./BinaryTree.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryTree = function (_React$Component) {
  _inherits(BinaryTree, _React$Component);

  // goToTop() {
  //   this.setState({
  //     selectedUser: this.props.rootUser,
  //     selectedUserLevel: 0,
  //   });
  // };
  function BinaryTree(props) {
    _classCallCheck(this, BinaryTree);

    var _this = _possibleConstructorReturn(this, (BinaryTree.__proto__ || Object.getPrototypeOf(BinaryTree)).call(this, props));

    _this.state = {
      selectedUser: props.rootUser,
      selectedUserLevel: 0
    };
    return _this;
  }

  _createClass(BinaryTree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          _props$allUsers = _props.allUsers,
          allUsers = _props$allUsers === undefined ? [] : _props$allUsers,
          imageFake = _props.imageFake,
          nameFake = _props.nameFake,
          maxDeep = _props.maxDeep,
          renderDetail = _props.renderDetail,
          renderNode = _props.renderNode,
          _props$disableNavigat = _props.disableNavigation,
          disableNavigation = _props$disableNavigat === undefined ? false : _props$disableNavigat,
          _props$disableSideBar = _props.disableSideBar,
          disableSideBar = _props$disableSideBar === undefined ? false : _props$disableSideBar,
          _props$bgSideBar = _props.bgSideBar,
          bgSideBar = _props$bgSideBar === undefined ? '#00b6eb' : _props$bgSideBar,
          _props$colorSideBar = _props.colorSideBar,
          colorSideBar = _props$colorSideBar === undefined ? '#ffffff' : _props$colorSideBar,
          colorText = _props.colorText,
          _props$bgButton = _props.bgButton,
          bgButton = _props$bgButton === undefined ? '#808285' : _props$bgButton,
          _props$colorButton = _props.colorButton,
          colorButton = _props$colorButton === undefined ? '#ffffff' : _props$colorButton;

      var rootUser = this.state.selectedUser;
      var selectedUserLevel = this.state.selectedUserLevel;
      var goToTop = function goToTop() {
        _this2.setState({
          selectedUser: _this2.props.rootUser,
          selectedUserLevel: 0
        });
      };
      var goToBottomLeft = function goToBottomLeft() {
        var user = rootUser;
        var level = selectedUserLevel;
        while (user && user.left_child_id) {
          user = allUsers.find(function (item) {
            return item.id === user.left_child_id;
          });
          level++;
        }
        if (user) {
          _this2.setState({ selectedUser: user, selectedUserLevel: level });
        }
      };
      var goToBottomRight = function goToBottomRight() {
        var user = rootUser;
        var level = selectedUserLevel;
        while (user && user.right_child_id) {
          user = allUsers.find(function (item) {
            return item.id === user.right_child_id;
          });
          level++;
        }
        if (user) {
          _this2.setState({ selectedUser: user, selectedUserLevel: level });
        }
      };
      var upOneLevel = function upOneLevel() {
        var user = [].concat(_toConsumableArray(_this2.props.allUsers), [_this2.props.rootUser]).find(function (item) {
          return item.left_child_id === _this2.state.selectedUser.id || item.right_child_id === _this2.state.selectedUser.id;
        });
        console.log("up one level", user);
        if (user) {
          _this2.setState({
            selectedUser: user,
            selectedUserLevel: selectedUserLevel - 1
          });
        }
      };
      var onClickUser = function onClickUser(userId) {
        var user = allUsers.find(function (item) {
          return item.id === userId;
        });
        console.log('Click user', user);
        if (user) {
          (function () {
            var level = 0;
            var currentUser = user;
            while (currentUser) {
              currentUser = _this2.props.allUsers.find(function (user) {
                return user.left_child_id === currentUser.id || user.right_child_id === currentUser.id;
              });
              level++;
            }
            _this2.setState({
              selectedUser: user,
              selectedUserLevel: level
            });
          })();
        }
      };
      return _react2.default.createElement(
        "div",
        { id: "binary-tree", className: "Treant", style: { height: "800px" } },
        (selectedUserLevel, disableSideBar, bgSideBar, colorSideBar && _react2.default.createElement(
          "div",
          { className: "leftSidebar", style: { display: disableSideBar ? 'none' : 'block' } },
          _react2.default.createElement(
            "div",
            { className: "levels-wrap" },
            _react2.default.createElement(
              "div",
              { className: "level level-0", style: { backgroundColor: bgSideBar } },
              _react2.default.createElement(
                "span",
                { className: "level-label", style: { color: colorSideBar } },
                "Level ",
                selectedUserLevel
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "level level-1", style: { backgroundColor: bgSideBar } },
              _react2.default.createElement(
                "span",
                { className: "level-label", style: { color: colorSideBar } },
                "Level ",
                selectedUserLevel + 1
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "level level-2", style: { backgroundColor: bgSideBar } },
              _react2.default.createElement(
                "span",
                { className: "level-label", style: { color: colorSideBar } },
                "Level ",
                selectedUserLevel + 2
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "level level-3", style: { backgroundColor: bgSideBar } },
              _react2.default.createElement(
                "span",
                { className: "level-label", style: { color: colorSideBar } },
                "Level ",
                selectedUserLevel + 3
              )
            )
          )
        )),
        _react2.default.createElement(
          "div",
          { "class": "tree" },
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(_BinaryTreeNode2.default, {
              allUsers: allUsers,
              user: rootUser,
              deep: 1,
              maxDeep: maxDeep,
              renderDetail: renderDetail,
              renderNode: renderNode,
              onClick: onClickUser,
              colorText: colorText,
              imageFake: imageFake,
              nameFake: nameFake
            })
          ),
          (disableNavigation, bgButton, colorButton && _react2.default.createElement(
            "div",
            { className: "navigation-buttons", style: { display: disableNavigation ? 'none' : 'flex' } },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "button",
                {
                  type: "button",
                  className: "button-tree",
                  onClick: goToTop,
                  disabled: this.state.selectedUser === this.props.rootUser,
                  style: { backgroundColor: bgButton, color: colorButton }
                },
                _react2.default.createElement(
                  "i",
                  null,
                  _react2.default.createElement(_fa.FaChevronUp, null)
                ),
                _react2.default.createElement(
                  "span",
                  null,
                  "Go to top"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement(
                "button",
                {
                  type: "button",
                  className: "button-tree",
                  onClick: upOneLevel,
                  disabled: this.state.selectedUser === this.props.rootUser,
                  style: { backgroundColor: bgButton, color: colorButton }
                },
                _react2.default.createElement(
                  "i",
                  null,
                  _react2.default.createElement(_fa.FaAngleDoubleUp, null)
                ),
                _react2.default.createElement(
                  "span",
                  null,
                  "Up one level"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "buttons-bottom" },
              _react2.default.createElement(
                "button",
                {
                  className: "button-left button-tree",
                  type: "button",
                  onClick: goToBottomLeft,
                  disabled: !this.state.selectedUser.left_child_id,
                  style: { backgroundColor: bgButton, color: colorButton }
                },
                _react2.default.createElement(
                  "i",
                  null,
                  _react2.default.createElement(_fa.FaArrowDown, null)
                ),
                _react2.default.createElement(
                  "span",
                  null,
                  "Bottom left"
                )
              ),
              _react2.default.createElement(
                "button",
                {
                  className: "button-right button-tree",
                  type: "primary",
                  onClick: goToBottomRight,
                  disabled: !this.state.selectedUser.right_child_id,
                  style: { backgroundColor: bgButton, color: colorButton }
                },
                _react2.default.createElement(
                  "i",
                  null,
                  _react2.default.createElement(_fa.FaArrowDown, null)
                ),
                _react2.default.createElement(
                  "span",
                  null,
                  "Bottom right"
                )
              )
            )
          ))
        )
      );
    }
  }]);

  return BinaryTree;
}(_react2.default.Component);

exports.default = BinaryTree;