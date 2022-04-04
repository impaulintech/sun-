
import "../style/article.css"

function Article({ article, upvote, downvote, setUpvote, setDownvote }) {



    return (
        <main className="articleContainer">

            <div className="header">
                <h1 className="title">{article.title}</h1>
                <h2 className="subTitle">{article.body.slice(0, 36)}</h2>
                <span>{Date()}</span>
            </div>
            <div className="content">
                <p>{article.body}</p>
            </div>
            <div className="votes">
                {upvote === 0 ? null : <div className='downvote'>
                    <button

                        onClick={() => {
                            setDownvote(downvote + 1)
                        }}>downvote</button>
                    <span>{downvote}</span>
                </div>}
                <div className='upvote'>
                    <button onClick={() => {
                        setUpvote(upvote + 1)
                    }}>upvote</button>
                    <span>{upvote}</span>
                </div>
            </div>

        </main>
    )
}

export default Article