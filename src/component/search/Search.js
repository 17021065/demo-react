import database from "../../database/database";
import React from "react";
import useSemiPersistentState from '../hook/useSemiPersistentState';
import SearchForm from "./username/SearchForm";

function fetchReducer(state, action) {
  switch (action.type) {
    case 'NO_SEARCH_TERM':
      return {
        ...state,
        doPrint: false,
      };
    case 'NO_RESULT':
      return {
        doPrint: true,
        result: [],
      };
    case 'HAVE_RESULT':
      return {
        doPrint: true,
        result: action.payload,
      };
    default:
      throw new Error();
  }
}

const Search = ({match}) => {

  const [username, setUsername] = useSemiPersistentState("username", "");
  const [searchTerm, setSearchTerm] = useSemiPersistentState("searchTerm", "");

  const [state, dispatchFetch] = React.useReducer(fetchReducer, {doPrint: false, result: []});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleUsernameSubmit = () => {
    setSearchTerm(username);
  }

  React.useEffect(() => {
      const result = database.user.filter((item) => item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
      searchTerm === "" ? 
      dispatchFetch({type: "NO_SEARCH_TERM"}) 
      :
      (result.length === 0 ?
        dispatchFetch({type: "NO_RESULT"})
      :
        dispatchFetch({type: "HAVE_RESULT", payload: result})  
      )
    },
    [searchTerm],
  )

  return <div className="w3-col m4 l4 w3-container">
    <SearchForm result={state} value={username} handleChange={handleUsernameChange} handleSubmit={handleUsernameSubmit}/>
  </div>
}

export default Search;