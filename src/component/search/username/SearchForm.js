import SearchResult from './SearchResult'

const SearchForm = ({result, value, handleChange, handleSubmit}) => {
  return <fieldset className="w3-padding-32" style={{ minHeight: 900}}>
    <legend>Search User</legend>
    <div className="w3-container">
      <label className=" w3-margin-top">Username</label>
      <input type="text" className="w3-input" value={value} onChange={handleChange}/>
      <button type="button" className="w3-button w3-green w3-margin-top" onClick={handleSubmit}>Search</button>
      <SearchResult doPrint={result.doPrint} result={result.result} />
    </div>
  </fieldset>
}

export default SearchForm;