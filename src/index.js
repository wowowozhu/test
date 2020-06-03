import React, { useEffect } from "react";
import ReactDOM from "react-dom";

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
    return () => (document.title = "前端精读");
  }, [title]);
}

function App() {
  useDocumentTitle("个人中心");

  return <div>aaaaaa</div>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
