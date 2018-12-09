import React from 'react';
import Dropzone from 'react-dropzone';
import DropzoneErrorBoundary from './DropzoneErrorBoundary';
import ErrorBoundary from './ErrorBoundary';
import Loader from 'react-loader-spinner';
import BACKEND_URL from './backendURL';

export default class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadng: false
    }
  }
    onDrop = (files) => {
      let file = files[0];

      if (file) {
      this.setState({
        loadng: true
      });
        let data = new FormData();
        data.append('file', file);

        fetch(`${BACKEND_URL}/upload`, {
          method: 'POST',
          body: data
        })
        .then(response => response.json())
        .then(json => {
          console.log(json);
          this.setState({
            loadng: false
          });
          // this.props.getMovies();  - doesn't work
          window.location.reload();
        })
        .catch(error => {
          console.log(error.message);
          this.setState({
            loadng: false
          });
          window.location.reload();
        });
      }
    }
  
  render() {
    const s = {
      width: '300px', 
      height: '250px',
      borderWidth: '2px',
      borderColor: '#33334d',
      borderStyle: 'dashed',
      borderRadius: '5px',
      marginTop: '1vw',
      marginLeft: '2vw'
    };
    return (
      (this.state.loading) 
      ? <div className="box spinner">
          <Loader 
            type="ThreeDots"
            color="#29293d"
            height="90"	
            width="90"
          />  
          </div>
      :
    <div>
    <ErrorBoundary>
    <DropzoneErrorBoundary>
      <Dropzone
        id="dropzone"
        name="movies"
        style={s}
        onDrop={this.onDrop}
        accept='.txt'
      > 
      </Dropzone>
    </DropzoneErrorBoundary>
    </ErrorBoundary>
    </div>
    );
  }
}
