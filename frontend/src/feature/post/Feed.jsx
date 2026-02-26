import React from 'react'
import './style/feed.scss'


const Feed = () => {

    return (
        <main className='feed-page'>
            <div className="feed">
                <div className="posts">
                <div className="post">
                    <div className="user">
                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="User-Profile" />
                        <p>username</p>
                    </div>
               

                    <img src="https://images.unsplash.com/photo-1638140481609-ec648a2edbea?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="post-img" />
                    <div className="bottom">
                        <div className="cation">Caption Caption</div>
                    </div>
                </div>
                </div>
            </div>
        </main>
    )
}

export default Feed
