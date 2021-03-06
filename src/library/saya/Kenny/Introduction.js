import React from 'react';
import { withStyles } from '@material-ui/styles';
import ImageContainer from '../ImageContainer';

const styles = {
  root: {
    paddingTop: 80,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: 'FilsonSoft-Bold',
  },
  line: {
    width: 420,
    height: 1,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20,
  },
  description: {
    fontSize: 14,
    fontFamily: 'FilsonSoftRegular',
    marginTop: 20,
  },
};

class Introduction extends React.PureComponent {
  render() {
    const {
      classes,
      height,
      backgroundImage,
      backgroundColor,
      title,
      titleWidth,
      titleBack,
      subtitle,
      description,
      descriptionWidth,
      fontColor,
      lineBorder,
      children,
    } = this.props;
    return (
      <ImageContainer
        className={classes.root}
        style={{
          height,
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor,
          color: fontColor,
        }}
      >
        <div
          className={classes.title}
          style={{
            width: titleWidth,
          }}
        >
          {title}
          <br />
          {titleBack}
        </div>

        <div
          className={classes.line}
          style={{
            border: lineBorder,
          }}
        />

        <div className={classes.subtitle}>
          {subtitle}
        </div>

        <div
          className={classes.description}
          style={{
            width: descriptionWidth,
          }}
        >
          {description}
        </div>

        <div>
          {children}
        </div>
      </ImageContainer>
    );
  }
}


export default withStyles(styles)(Introduction);
