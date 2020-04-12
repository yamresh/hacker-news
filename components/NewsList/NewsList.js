import React from 'react';
import LoadMore from '../LoadMore/LoadMore';
import NewsFeed from '../NewsFeed/NewsFeed';

const NewsList = props => {
    const { hits = [] } = props.newsData || {};
    return (
        <React.Fragment>
            <div className="feedList">
                {hits.map((news, index) => (
                    <NewsFeed
                        key={index}
                        newsDetail={news}
                    />
                ))}
                <LoadMore
                    currentPage={props.newsData.page}
                    totalPages={props.newsData.nbPages}
                />
            </div>
            <style jsx>{`
                .feedList { 
                    padding-top: 16px;
                    background-color: rgb(246, 246, 239);
                }
            `}</style>
        </React.Fragment>
    )
}

export default NewsList;
