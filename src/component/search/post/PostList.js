import useSemiPersistentState from '../../hook/useSemiPersistentState';
import database from '../../../database/database'
import React from 'react';

const PostList = ({match}) => {
  const [uid, setUid] = useSemiPersistentState("uid", "");
  const [postList, setPostList] = React.useState([]);

  React.useEffect(() => {
    setUid(match.params.uid);
    const _result = database.post.filter(item => item.uid === uid);
    setPostList(_result);
  }, [uid, match, setPostList, setUid])

  return <div className="w3-col m4 l4 w3-container">
    <fieldset className="w3-padding-32" style={{ minHeight: 900}}>
      <legend>Post List</legend>
      <div className="w3-container">
        {postList.length === 0 ? 
          <p className="w3-text-blue w3-margin-top">This user has no posts</p>
          :
          postList.map(item => 
            <p className="w3-button w3-green w3-block w3-left-align" key={item.id} style={{margin: 0}}>
                {item.name}
            </p>
          )
        }
      </div>
    </fieldset>
  </div>
} 

export default PostList;