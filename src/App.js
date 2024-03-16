import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';
import NotFound from './components/pages/notFound';
import { title, descriptionList, gallery, priceData } from './components/store/homeData';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={'/'} element={
          <Home
            title={title}
            descriptionList={descriptionList}
            gallery={gallery}
            priceData={priceData}
          />
        }/>
        <Route path={'*'} element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
