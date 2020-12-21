'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _svgText = require('@josephuspaye/svg-text');

var _TextOnSvg = require('./TextOnSvg');

var _TextOnSvg2 = _interopRequireDefault(_TextOnSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Text2Svg = function (_Component) {
  _inherits(Text2Svg, _Component);

  function Text2Svg(props) {
    _classCallCheck(this, Text2Svg);

    var _this = _possibleConstructorReturn(this, (Text2Svg.__proto__ || Object.getPrototypeOf(Text2Svg)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Text2Svg, [{
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$fontSize = _props.fontSize,
          fontSize = _props$fontSize === undefined ? 12 : _props$fontSize,
          color = _props.color,
          _props$fontWeight = _props.fontWeight,
          fontWeight = _props$fontWeight === undefined ? 400 : _props$fontWeight,
          children = _props.children,
          className = _props.className,
          style = _props.style,
          onClick = _props.onClick;

      var measures = (0, _svgText.measureText)([children], {
        fontWeight: fontWeight,
        fontSize: fontSize
      });
      return _react2.default.createElement(
        'div',
        { className: className, style: style, onClick: onClick },
        _react2.default.createElement(_TextOnSvg2.default, {
          className: 'text-on-svg',
          text: children.toString(),
          width: measures[0].width,
          height: measures[0].height,
          textWidth: 1,
          fontSize: fontSize,
          fontWeight: fontWeight,
          backgroundColor: 'transparent',
          color: color
        })
      );
    }
  }]);

  return Text2Svg;
}(_react.Component);

exports.default = Text2Svg;


module.exports = exports.default;