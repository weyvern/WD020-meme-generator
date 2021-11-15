import { useContext } from 'react';
import { MemeContext } from '../context/MemeContext';

const CurrentTemplate = () => {
  const { selectedTemplate } = useContext(MemeContext);
  return (
    <div className='col-md-6'>
      {selectedTemplate ? (
        <>
          <h2 className='text-center'>{selectedTemplate.name}</h2>
          <img src={selectedTemplate.url} alt={selectedTemplate.name} className='img-fluid' />
        </>
      ) : (
        <h2 className='text-center'>Please select an image from the left</h2>
      )}
    </div>
  );
};

export default CurrentTemplate;
