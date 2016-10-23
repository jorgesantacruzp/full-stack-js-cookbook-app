'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AppBar = require('material-ui/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Drawer = require('material-ui/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _MenuItem = require('material-ui/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomAppBar = function (_React$Component) {
    _inherits(CustomAppBar, _React$Component);

    function CustomAppBar(props) {
        _classCallCheck(this, CustomAppBar);

        var _this = _possibleConstructorReturn(this, (CustomAppBar.__proto__ || Object.getPrototypeOf(CustomAppBar)).call(this, props));

        _this.handleClick = function () {
            return _this.setState({
                open: !_this.state.open
            });
        };

        _this.handleClose = function () {
            _this.setState({ open: false });
        };

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(CustomAppBar, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var styles = {
                appBarStyle: {
                    backgroundColor: '#F44336'
                }
            };
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_AppBar2.default, { title: this.props.title,
                    iconClassNameRight: 'muidocs-icon-navigation-expand-more',
                    style: styles.appBarStyle,
                    onLeftIconButtonTouchTap: this.handleClick }),
                _react2.default.createElement(
                    _Drawer2.default,
                    {
                        docked: false,
                        width: 200, open: this.state.open,
                        onRequestChange: function onRequestChange(open) {
                            return _this2.setState({ open: open });
                        } },
                    this.props.options.map(function (option, i) {
                        return _react2.default.createElement(
                            _MenuItem2.default,
                            {
                                key: i,
                                onTouchTap: _this2.handleClose,
                                containerElement: _react2.default.createElement(_reactRouter.Link, { to: option.path })
                            },
                            option.action
                        );
                    })
                )
            );
        }
    }]);

    return CustomAppBar;
}(_react2.default.Component);

exports.default = CustomAppBar;