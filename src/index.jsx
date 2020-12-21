import React, { Component } from 'react';
import { measureText } from '@josephuspaye/svg-text';
import TextOnSvg from './TextOnSvg';
class Text2Svg extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
  }

  render() {
    const { fontSize = 12, color, fontWeight = 400, children, className, style, onClick } = this.props;
    const measures = measureText([children], {
      fontWeight,
      fontSize,
    });
    return <div className={className} style={style} onClick={onClick}>
      <TextOnSvg
        className="text-on-svg"
        text={(children).toString()}
        width={measures[0].width}
        height={measures[0].height}
        textWidth={1}
        fontSize={fontSize}
        fontWeight={fontWeight}
        backgroundColor="transparent"
        color={color}
      />
    </div>
  }
}

export default Text2Svg;

module.exports = exports.default;