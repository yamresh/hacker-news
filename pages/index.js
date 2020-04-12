import fetch from 'isomorphic-unfetch';
import App from '../components/app';
import NewsList from '../components/NewsList/NewsList';

const Index = props => (
    <App>
        <NewsList {...props} />
    </App>
);

Index.getInitialProps = async function (context) {
    const { page } = context.query || {};
    let url = 'https://hn.algolia.com/api/v1/search?tags=front_page';
    if (page) {
        url = `${url}&page=${page}`;
    }
    const res = await fetch(url);
    const data = await res.json();

    return {
        newsData: data || {},
    };
};

export default Index;
