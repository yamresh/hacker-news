import { LocalStorageUtil } from './localStorage';
import { HIDE_FEED } from './constants';

export const filterNewsFeed = data => {
    const storage = new LocalStorageUtil();

    const hiddenFeedIds = JSON.parse(storage.getItem(HIDE_FEED) || '[]');

    if (hiddenFeedIds.length) {
        const { hits } = data;
        const filteredHits = hits.filter(hit => {
            return hiddenFeedIds.indexOf(hit.objectID) === -1;
        });

        return {
            ...data,
            hits: filteredHits,
        };
    }
    return data;
};


export const extractDomainFromUrl = (url = '') => {
    const nonEmptyUrl = url || '';
    const urlParts = nonEmptyUrl
        .replace('http://', '')
        .replace('https://', '')
        .split(/[/?#]/);
    return urlParts[0];
};
