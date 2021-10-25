import React from 'react';
import MainPage from "./pages"
import GlobalStyle from "./styles/global"
// import AnimatedCursor from "./components/atom/animated.cursor"
import ToastContainer from "./components/atom/toast.container"
function App() {
  return (
    <React.Fragment>
      <ToastContainer/>
      <GlobalStyle/>
      <MainPage/>
    </React.Fragment>
  );
}

export default App;
