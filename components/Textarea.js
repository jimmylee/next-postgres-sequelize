import React from 'react';
import PropTypes from 'prop-types';
import Label from '../components/Label';

export default class Textarea extends React.Component {
  static propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    fontSize: PropTypes.string,
    height: PropTypes.number,
    fontWeight: PropTypes.number,
  };

  static defaultProps = {
    onChange: () => {},
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '1.5',
    height: 24,
  };

  state = {
    height: this.props.height,
  };

  componentDidMount() {
    const { scrollHeight } = this.refs.textarea;
    this.setState({
      height: scrollHeight > this.props.height
        ? scrollHeight
        : this.props.height,
    });
  }

  _handleChange = e => {
    const { scrollHeight } = this.refs.textarea;
    this.setState({
      height: scrollHeight > this.props.height
        ? scrollHeight
        : this.props.height,
    });

    this.props.onChange(e);
  };

  render() {
    const style = {
      minHeight: this.state.height,
      fontSize: this.props.fontSize,
      fontWeight: this.props.fontWeight,
      lineHeight: this.props.lineHeight,
    };

    return (
      <div className="container">
        <style jsx>{`
          .container {
            width: 100%;
            position: relative;
          }

          .textarea {
            width: 100%;
            position: relative;
            box-sizing: border-box;
            white-space: pre-wrap;
            color: #24292e;
            background: transparent;
          }
        `}</style>
        <textarea
          style={style}
          ref="textarea"
          autoComplete="off"
          className="textarea"
          placeholder={this.props.placeholder}
          onChange={this._handleChange}
          value={this.props.value}
          name={this.props.name}
        />
      </div>
    );
  }
}
