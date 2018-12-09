import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ErrorBoundary from './ErrorBoundary';

class Details extends React.Component {
    
    componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps) {
        this.setState(nextProps.details);
      }
    }
    
    render() {
      const textStyle = {fontFamily: 'Love Ya Like A Sister', padding: '1vw', color: '#1f1f2e'};
      const buttonStyle = {fontFamily: 'Poiret One', color: 'white', fontWeight: 'bold'};
      const stars = this.props.details.Stars.join(', ');
      return (
        <div className="box">
        <ErrorBoundary>
          <Typography variant='h5' gutterBottom style={textStyle}> <b>{this.props.details.Title} </b></Typography>
          <Typography variant='h5' gutterBottom style={textStyle}> Release year: <span> {this.props.details.Year} </span></Typography>
          <Typography variant='h5' gutterBottom style={textStyle}> Format: <span> {this.props.details.Format} </span></Typography>
          <Typography variant='h5' gutterBottom style={textStyle}>Stars: <span> {stars} </span></Typography>
        </ErrorBoundary>
          <button type="button" className="left"><Link to="/"><Typography variant="h6" style={buttonStyle}> Back to movies </Typography></Link></button>
        </div>
      );
    }
  }

export default Details;