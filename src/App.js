
import { useState } from 'react';
import Hero from './components/Hero';
import { MenuMobile } from './components/MenuMobile';
import Navbar from './components/Navbar';

import './index.css';

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)
  return (
    <div>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible} />
      <Navbar setMenuIsVisible={setMenuIsVisible} />
      <Hero />
    </div>
  );
}

export default App;
