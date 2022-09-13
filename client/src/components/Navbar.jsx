import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Chat App</span>
            <div className="user">
                <img src="https://images.pexels.com/photos/11500401/pexels-photo-11500401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>Joshi</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar