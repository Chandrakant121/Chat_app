import React from 'react'

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a user' />
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="userChatInfo">
                    <span>Joshi</span>
                </div>
            </div>
        </div>
    )
}

export default Search