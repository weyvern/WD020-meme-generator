import { useRef } from 'react';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';
import CurrentTemplate from './components/CurrentTemplate';
import EditCaption from './components/EditCaption';
import TemplateSelector from './components/TemplateSelector';
import MemeState from './context/MemeContext';

const App = () => {
  const memeRef = useRef(null);
  const shareMeme = async () => {
    const blob = await domtoimage.toBlob(memeRef.current);
    saveAs(blob, `meme_${Date.now()}`);
  };

  return (
    <div className='container mt-5'>
      <div className='row'>
        <MemeState>
          <TemplateSelector />
          <CurrentTemplate ref={memeRef} />
          <EditCaption shareMeme={shareMeme} />
        </MemeState>
      </div>
    </div>
  );
};

export default App;
