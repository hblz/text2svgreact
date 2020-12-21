'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _svgTextWrap = require('svg-text-wrap');

var _svgTextWrap2 = _interopRequireDefault(_svgTextWrap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextOnSvg = function TextOnSvg(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === undefined ? 'text-on-svg' : _ref$className,
      _ref$text = _ref.text,
      text = _ref$text === undefined ? '' : _ref$text,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? 512 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? 448 : _ref$height,
      _ref$textWidth = _ref.textWidth,
      textWidth = _ref$textWidth === undefined ? 0.8 : _ref$textWidth,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === undefined ? 48 : _ref$fontSize,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === undefined ? 500 : _ref$fontWeight,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === undefined ? '' : _ref$fontFamily,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === undefined ? '#417505' : _ref$backgroundColor,
      _ref$color = _ref.color,
      color = _ref$color === undefined ? '#FFFFFF' : _ref$color;


  var lines = [];
  if (text) {
    lines = (0, _svgTextWrap2.default)(text, width * textWidth, {
      'letter-spacing': '1px',
      'style': 'font-size: ' + fontSize + 'px'
    }).map(function (line, index) {
      return _react2.default.createElement(
        'tspan',
        {
          key: index,
          x: width / 2,
          dy: fontSize },
        line
      );
    });
  }
  var linesNumber = lines.length;

  return _react2.default.createElement(
    'svg',
    {
      className: className,
      width: width + 'px',
      height: height + 'px',
      viewBox: '0 0 ' + width + ' ' + height,
      version: '1.1',
      xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement('rect', { fill: backgroundColor, x: '0', y: '0', width: width, height: height }),
      _react2.default.createElement(
        'text',
        _extends({}, fontFamily !== '' ? { fontFamily: fontFamily } : {}, {
          fontSize: fontSize,
          fontWeight: fontWeight,
          fill: color,
          y: 0,
          x: 0,
          textAnchor: 'middle',
          alignmentBaseline: 'middle' }),
        lines
      )
    )
  );
};

TextOnSvg.propTypes = {
  className: _propTypes.string,
  text: _propTypes.string,
  width: _propTypes.number,
  height: _propTypes.number,
  textWidth: _propTypes.number,
  fontSize: _propTypes.number,
  // fontWeight: string,
  fontFamily: _propTypes.string,
  backgroundColor: _propTypes.string,
  color: _propTypes.string
};

exports.default = TextOnSvg;