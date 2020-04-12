
const Header = () => (
    <div className="headerWrapper">
        <img src="https://news.ycombinator.com/y18.gif" className="imageStyle" />
        <div className="hTitle">
            <span>top</span>
            <span> | </span>
            <span> new</span>
        </div>
        <style jsx>{`
        .headerWrapper {
            display: flex;
            padding: 8px;
            background-color: rgb(255, 101, 2);
        }
        .imageStyle {
            width: 18px;
            height: 18px;
            border: 1px white solid;
        }
        .hTitle {
            margin-left: 16px;
        }
        .hTitle span {
            margin-right: 4px;
        }
        .hTitle span:first-child {
            color: white;
        }
      `}</style>
    </div>
);

export default Header;
