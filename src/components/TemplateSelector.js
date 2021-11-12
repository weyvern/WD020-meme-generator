import { useEffect, useState } from 'react';
import axios from 'axios';
import TemplateItem from './TemplateItem';

const TemplateSelector = ({ setSelectedTemplate, setInputs }) => {
  const [templates, setTemplates] = useState([]);

  const handleSelect = template => {
    setSelectedTemplate(template);
    setInputs(Array(template.box_count).fill(''));
  };

  useEffect(() => {
    const getTemplates = async () => {
      try {
        const {
          data: {
            data: { memes }
          }
        } = await axios.get('https://api.imgflip.com/get_memes');
        setTemplates(memes);
      } catch (error) {
        console.error(error);
      }
    };
    getTemplates();
  }, []);

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
