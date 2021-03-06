"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _CardMedia = _interopRequireDefault(require("@material-ui/core/CardMedia"));

var _ImageContainer = _interopRequireDefault(require("../ImageContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useStyles = (0, _styles.makeStyles)(theme => ({
  root: {
    height: 590,
    textAlign: 'center',
    fontFamily: 'FilsonSoft-Bold'
  },
  firstTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 1.4,
    color: '#000000',
    paddingTop: 57
  },
  firstLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#000000',
    marginTop: 2
  },
  secondTitle: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#000000',
    paddingTop: 10
  },
  secondTitleBack: {
    fontWeight: 'normal',
    color: '#000000'
  },
  secondLine: {
    width: 220,
    height: 1,
    backgroundColor: '#000000',
    marginTop: 2
  },
  thirdTitle: {
    fontSize: 18,
    color: '#000000',
    paddingTop: 10
  }
}));

var _default = props => {
  const {
    firstTitle,
    secondTitle,
    secondTitleBack,
    thirdTitle,
    backgroundImage
  } = props;
  const classes = useStyles();
  return _react.default.createElement(_ImageContainer.default, {
    image: backgroundImage,
    className: classes.root,
    style: {
      height: 590
    }
  }, _react.default.createElement("div", {
    style: {
      position: 'absolute'
    }
  }, _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.firstTitle
  }, firstTitle, _react.default.createElement("div", {
    className: classes.firstLine
  }))), _react.default.createElement("div", {
    className: classes.secondTitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoft-Bold'
    }
  }, secondTitle), _react.default.createElement("a", {
    className: classes.secondTitleBack
  }, secondTitleBack)), _react.default.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, _react.default.createElement("div", {
    className: classes.secondLine
  })), _react.default.createElement("div", {
    className: classes.thirdTitle
  }, _react.default.createElement("pre", {
    style: {
      fontFamily: 'FilsonSoftRegular'
    }
  }, thirdTitle))));
};

exports.default = _default;