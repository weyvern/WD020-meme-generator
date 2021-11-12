import axios from 'axios';

const EditCaption = ({ inputs, setInputs, selectedTemplate, setSelectedTemplate }) => {
  const handleChange = ({ target: { value } }, elementIdx) =>
    setInputs(inputs.map((input, idx) => (idx === elementIdx ? value : input)));

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
