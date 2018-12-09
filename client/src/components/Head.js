import React from 'react';
import { Link } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faSearch, faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faSearch, faPlus);

class Head extends React.Component {
    render() {
      return (
        <div>
          <header>
            <h1>
              MooWiz
            </h1>
            <nav>
              <ul>
                <li><Link id="home" to="/"> my movies </Link></li>
                <li><Link to="/add"> <FontAwesomeIcon className="fa" icon="plus" /> </Link></li>
                <li><Link to="/search"> <FontAwesomeIcon className="fa" icon="search" /> </Link></li>
                <li><Link to="/clear"> <FontAwesomeIcon className="fa" icon="trash-alt" /> </Link></li>
              </ul>
            </nav>
          </header>
        </div>
      );
    }
  }

export default Head;