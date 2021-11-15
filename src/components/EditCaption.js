import { useContext } from 'react';
import { MemeContext } from '../context/MemeContext';

const EditCaption = () => {
  const { handleSubmit, handleChange, inputs } = useContext(MemeContext);

  return (
    <div className='col-md-3'>
      {inputs.length > 0 && (
        <form onSubmit={handleSubmit}>
          {inputs.map((input, i) => (
            <div className='form-group' key={i}>
              <input type='text' value={input} onChange={e => handleChange(e, i)} />
            </div>
          ))}
          <div className='mt-3'>
            <button className='btn btn-info'>Generate Meme</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EditCaption;
