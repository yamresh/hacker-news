import React from 'react';
import classNames from 'classnames';
import styles from './NewsFeed.module.css';
import { extractDomainFromUrl } from '../../utils/common';
import timeSince from '../../utils/timeUtil';

class NewsFeed extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { newsDetail = {} } = this.props;
        return (
            <div className={styles.newsItem}>
                <div className={classNames(styles.newsReaction, styles.pr25)}>
                    <div className={styles.comment}>{newsDetail.num_comments || 0}</div>
                    <div className={styles.flex}>
                        {newsDetail.points || 0}
                        <a href="" target="_self">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20">
                                <path skroke="#999999" fill="#999999" d="M9 6l-4 4h8z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={styles.flex}>
                    <div className={styles.pr25}>{newsDetail.title}</div>
                    <div className={classNames(styles.greyFont, styles.pr25)}>({extractDomainFromUrl(newsDetail.url)})</div>
                    <div>
                        <span className={classNames(styles.greyFont, styles.pr25)}>by</span>
                        <span className={styles.pr25}>{newsDetail.author}</span>
                        <span className={classNames(styles.greyFont, styles.pr25)}>{timeSince(newsDetail.created_at_i)}</span>
                        <span className={styles.greyFont}>[</span>
                        <a href="" target="_self">
                            hide
                        </a>
                        <span className={styles.greyFont}>]</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsFeed;