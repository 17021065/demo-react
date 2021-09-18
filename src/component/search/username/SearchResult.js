const SearchResult = ({doPrint, result}) => {
    const num = result.length > 0 ? result.length : "no";
    return doPrint ? 
    <div className="w3-margin-top">
        <h3 className="w3-margin-top">Result</h3>
        <p className="w3-text-blue w3-margin-top">There are {num} matching records</p>
        {result.length > 0 && result.map(item => 
        <a className="w3-button w3-green w3-block w3-left-align" key={item.id} href={`/search/${item.id}`}>
            {item.name}
        </a>)}
    </div>
    :
    <div className="w3-margin-top">Please enter username.</div>
}

export default SearchResult;