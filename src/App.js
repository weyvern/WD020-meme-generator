import CurrentTemplate from './components/CurrentTemplate';
import EditCaption from './components/EditCaption';
import TemplateSelector from './components/TemplateSelector';
import MemeState from './context/MemeContext';

const App = () => {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <MemeState>
          <TemplateSelector />
          <CurrentTemplate />
          <EditCaption />
        </MemeState>
      </div>
    </div>
  );
};

export default App;
