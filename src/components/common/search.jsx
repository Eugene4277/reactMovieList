import React, { Component } from "react";

class Search extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div className="form-group">
        <input
          type="text"
          name="query"
          value={value}
          onChange={(e) => onChange(e.currentTarget.value)}
          placeholder="Search..."
          className="form-control my-3"
        />
      </div>
    );
  }
}

export default Search;
