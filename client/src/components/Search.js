import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import ErrorBoundary from './ErrorBoundary';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
library.add( faTrashAlt, faSearch );

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      foundMovie: []
    };

    this.handleActorSearch = this.handleActorSearch.bind(this);
    this.handleTitleSearch = this.handleTitleSearch.bind(this);
  }
  handleTitleSearch(e) {
    let title = e.label;
    let found = this.props.moviesArr.find(el => el.Title === title);
    this.setState({
      foundMovie: [found]
    });
  }

  handleActorSearch(opt) {
    let name = opt.label;
    let arr = this.props.moviesArr.filter(el => el.Stars.indexOf(name) !== -1);
    this.setState({
      filtered: arr
    });
  }
    render() {
      let json = this.props.actors;
      let options = json.map(el => {return {value: el.Id.toString(), label: el.Name};});
      let opts = this.props.moviesArr.map(el => {return {value: el.Id.toString(), label: el.Title};});
      let count1 = 1;
      let count2 = 1;
      let styling = {fontFamily: 'Love Ya Like A Sister', marginTop: '1vw'};

      return (
      <div>
        <div className="small-box">
          <Typography variant='h5' gutterBottom style={styling}>
            Search by movie title
          </Typography>
          <ErrorBoundary>
            <Select
              name="byTitle"
              isClearable
              placeholder="start typing"
              options={opts}
              onChange={(e) => this.handleTitleSearch(e)}  
            />
          </ErrorBoundary>
          {!this.state.foundMovie.length 
          ? <p></p>
          : <div>
            <table>
            <tbody>    
              {this.state.foundMovie.map(el => 
                  <tr key={el.Id}> 
                    <td className="count">
                      {count1++}
                    </td>
                    <td> 
                      {el.Title} 
                    </td> 
                    <td>        
                      <button type="button" className="d" onClick={() => this.props.showDetails(el)}><Link to="/details"><FontAwesomeIcon className="search" icon="search" /></Link></button>
                    </td>
                    <td>
                      <button type="button" className="d" onClick={() => this.props.del(el)}><FontAwesomeIcon className="fa-del clear" icon="trash-alt" /></button>
                    </td>
                  </tr>)
              }
             </tbody>
            </table> 
          </div>
          }
        </div>
      
        <div className="small-box">
          <Typography variant='h5' gutterBottom style={styling}>
            Search by actor
          </Typography>
          <ErrorBoundary>
            <Select
              name="byStar"
              isClearable
              placeholder="start typing"
              options={options}
              onChange={(opt) => this.handleActorSearch(opt)}  
            />
          </ErrorBoundary>
          {!this.state.filtered.length 
          ? <p></p> 
          : <div>
            <table id="table">
             <tbody>    
              {this.state.filtered.map(el => 
                  <tr key={el.Id}> 
                    <td className="count">
                      {count2++}
                    </td>
                    <td> 
                      {el.Title} 
                    </td> 
                    <td>        
                      <button type="button" className="d" onClick={() => this.props.showDetails(el)}><Link to="/details"><FontAwesomeIcon className="search" icon="search" /></Link></button>
                    </td>
                    <td>
                      <button type="button" className="d" onClick={() => this.props.del(el)}><FontAwesomeIcon className="fa-del clear" icon="trash-alt" /> </button>
                    </td>
                  </tr>)
              }
             </tbody>
            </table> 
          </div>
          }
        </div>
      </div>
      );
    }
  }

  export default Search;