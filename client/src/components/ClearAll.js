import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export default class Clear extends React.Component {
    render() {
      const styles = {fontFamily: 'Love Ya Like A Sister', padding: '2vw', color: 'white'}
        return (
            <div className="box clear-box">
              <Typography variant='h5' style={styles}>
                Clear everything?
              </Typography>
              <button type="button" className="clear" onClick={() => this.props.clear()}> OK </button>
              <button type="button" className="clear"><Link to="/"> Cancel </Link></button>
            </div>
        );
    }
}