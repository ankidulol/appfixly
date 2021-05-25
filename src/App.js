// Components
import React from 'react';
import Landing from './components/wrappers/Landing/Landing';
import Projects from './components/wrappers/Projects/Projects';
import Contact from './components/wrappers/Contact/Contact';
import Footer from './components/wrappers/Footer/Footer';
import Banner from './components/utility/Banner/Banner';

// Redux
import { store } from './redux/index';
import { Provider } from 'react-redux';

// Logic
import { trackCampaign } from './logic/api';

trackCampaign();

function App() {
  return (
    <Provider store={store}>
      <div>
        <Banner />
        <Landing />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
