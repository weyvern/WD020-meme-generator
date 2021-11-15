import { useContext } from 'react';
import { MemeContext } from '../context/MemeContext';
import TemplateItem from './TemplateItem';

const TemplateSelector = () => {
  const { templates, handleSelect } = useContext(MemeContext);

  return (
    <div className='col-md-3' style={{ height: '600px', overflowY: 'scroll' }}>
      <div className='row'>
        {templates.map(template => (
          <TemplateItem key={template.id} template={template} handleSelect={handleSelect} />
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;
