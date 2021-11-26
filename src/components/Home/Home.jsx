import React from 'react'

import {useSelector} from 'react-redux';
function Home() {
    const state = useSelector(state => state.UserReducer);
    return (
        <div>
      {state.user.username}
        </div>
    )
}

export default Home;
