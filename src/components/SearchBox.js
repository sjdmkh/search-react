import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBox = (probs) => {
    return (
        <div className="col col-sm-4">
            <input className="form-control"
                   value={probs.value}
                   onChange={(event)=> probs.setSearchValue(event.target.value)}
                   placeholder="Type to search...">

            </input>
        </div>
    );
};

export default SearchBox;