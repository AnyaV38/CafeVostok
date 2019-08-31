import React from 'react';

import {style} from './styleApp.css';
import Header from './components/Header.js';
import Text from './components/Text.js';
import Phone from './components/Phone.js';
import Rezhim from './components/Rezhim.js';
import Photo from './components/Photo.js';


const App = () => {
    return(
        <div className='app-wrapper' > 

            <Header />
            <Text />
            <Phone />
            <Rezhim />
            <Photo />

        </div>
    
    );
    
}
export default App;
