import React from 'react';
import MainPage from "./pages"
import GlobalStyle from "./styles/global"

function App() {
  document.title="Guides interpreters"
  return (
    <React.Fragment>
      <GlobalStyle/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
