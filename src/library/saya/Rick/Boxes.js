import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageContainer from '../ImageContainer';

const useStyles = makeStyles(theme => ({
  root: {
    height: 320,
    textAlign: 'center',
  },
  title: {
    fontSize: 33,
    paddingTop: 30,
  },
  secondLine: {
    width: '100%',
    height: 1,
    marginTop: 2,
  },
  subtitle: {
    fontSize: 18,
    paddingTop: 10,
  },
  content: {
    fontSize: 18,
    paddingTop: 10,
  },
}));

export default (props) => {
  const {
    title,
    subtitle,
    content,
    color,
    backgroundColor,
    children,
  } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <ImageContainer
        className={classes.root}
        style={{ width: '100%', height: 320, color, backgroundColor }}
      >
        <div
          style={{ position: 'absolute' }}
        >
          <div className={classes.title}>
            <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 10 }}>{title}</pre>
          </div>

          <div className={classes.subtitle}>
            <pre style={{ fontFamily: 'FilsonSoft-Bold', margin: 10 }}>{subtitle}</pre>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className={classes.secondLine} style={{ backgroundColor: color }} />
          </div>

          {/* <div style={{ flex: 0, height: 40, width: '100%' }} /> */}
          <div className={classes.content}>
            <pre style={{ fontFamily: 'FilsonSoftRegular' }}>{content}</pre>
          </div>
        </div>
      </ImageContainer>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', backgroundColor }}>
        {children}
      </div>
    </React.Fragment>
  );
};
