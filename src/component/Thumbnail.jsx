import React from 'react'
import Article from './Article'

function Thumbnail({ article, upvote, downvote, setUpvote, setDownvote }) {
    return (
        <>
            {article.slice(0, 1).map((each, index) => {
                return <Article
                    key={each.id}
                    article={each}
                    upvote={upvote}
                    downvote={downvote}
                    setUpvote={setUpvote}
                    setDownvote={setDownvote} />

            })}
        </>
    )
}

export default Thumbnail