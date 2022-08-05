import "./index.css";

function MainContent({ children }) {
  return (
    <div className="MainContent">
      <img
        className="MainContent__img"
        src={
          "https://img.pixers.pics/pho(s3:700/PI/39/77/61/00/7/700_PI397761007_c6477604d480fc636d7f3c8f0ae337a0_5b7abe971ed59_.,700,467,jpg)/sheer-window-curtains-beautiful-beach-sand-and-sea-at-sunset-times-with-copy-space-for-background-vintage-filter-and-boost-up-color-processing.jpg.jpg"
        }
        alt="img"
      />{" "}
      {children}
    </div>
  );
}

export default MainContent;
