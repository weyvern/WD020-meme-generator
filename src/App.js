import { useState } from 'react';
import CurrentTemplate from './components/CurrentTemplate';
import EditCaption from './components/EditCaption';
import TemplateSelector from './components/TemplateSelector';

const App = () => {
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [inputs, setInputs] = useState([]);

  return (
    <div className='container mt-5'>
      <div className='row'>
        <TemplateSelector setSelectedTemplate={setSelectedTemplate} setInputs={setInputs} />
        <CurrentTemplate selectedTemplate={selectedTemplate} />
        <EditCaption inputs={inputs} />
      </div>
    </div>
  );
};

export default App;
