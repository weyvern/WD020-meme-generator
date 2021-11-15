import { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const MemeContext = createContext();

const MemeState = ({ children }) => {
  const [selectedTemplate, setSelectedTemplate] = useState();
  const [inputs, setInputs] = useState([]);
  const [templates, setTemplates] = useState([]);

  const handleChange = ({ target: { value } }, elementIdx) =>
    setInputs(inputs.map((input, idx) => (idx === elementIdx ? value : input)));

  const handleSelect = template => {
    setSelectedTemplate(template);
    setInputs(Array(template.box_count).fill(''));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const params = new URLSearchParams({
      template_id: selectedTemplate.id,
      username: process.env.REACT_APP_IMG_FLIP_USER,
      password: process.env.REACT_APP_IMG_FLIP_PASSWORD
    });

    inputs.map((input, i) => params.append(`boxes[${i}][text]`, input));

    try {
      const {
        data: {
          data: { url }
        }
      } = await axios.post(`${process.env.REACT_APP_IMG_FLIP_URL}/caption_image?${params}`);
      setSelectedTemplate(prev => ({ ...prev, url }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getTemplates = async () => {
      try {
        const {
          data: {
            data: { memes }
          }
        } = await axios.get(`${process.env.REACT_APP_IMG_FLIP_URL}/get_memes`);
        setTemplates(memes);
      } catch (error) {
        console.error(error);
      }
    };
    getTemplates();
  }, []);

  return (
    <MemeContext.Provider
      value={{
        templates,
        handleSelect,
        handleSubmit,
        handleChange,
        selectedTemplate,
        inputs
      }}
    >
      {children}
    </MemeContext.Provider>
  );
};

export default MemeState;
