"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _ImageCircle = _interopRequireDefault(require("./ImageCircle"));

var _styles = require("@material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const styles = {
  root: {
    width: '100%',
    height: 870,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
    color: '#000000',
    paddingTop: 110
  },
  circle: {
    marginTop: 110
  }
};

class TwocircleSection extends _react.default.PureComponent {
  render() {
    const {
      classes
    } = this.props;
    return _react.default.createElement("div", {
      className: classes.root
    }, _react.default.createElement("div", {
      className: classes.title
    }, "All The Products are Available in", _react.default.createElement("br", null), "SAYA Now & SAYA Next Technologies."), _react.default.createElement("div", {
      className: classes.circle
    }, _react.default.createElement(_ImageCircle.default, {
      linkText: "Explore this Technology"
    })));
  }

}

var _default = (0, _styles.withStyles)(styles)(TwocircleSection);

exports.default = _default;