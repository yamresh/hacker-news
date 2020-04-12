import Header from './Header/Header';

const layoutStyle = {
    margin: 20,
    padding: 20,
};

const App = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default App;
