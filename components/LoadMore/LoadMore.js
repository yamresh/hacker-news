import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './LoadMore.module.css';

const isVisible = (currentPage, totalPages) => {
    return !!(totalPages && currentPage !== totalPages);
};

const LoadMore = ({ currentPage, totalPages }) => {
    const cp = currentPage + 1;
    return (
        isVisible(cp, totalPages) && (
            <div className={styles.loadMore}>
                <Link href={`/?page=${cp}`}>
                    <a>More</a>
                </Link>
            </div>
        )
    );
};

LoadMore.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
};

export default LoadMore;
