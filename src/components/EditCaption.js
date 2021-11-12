const EditCaption = ({ inputs, setInputs }) => {
  const handleChange = ({ target: { value } }, elementIdx) =>
    setInputs(inputs.map((input, idx) => (idx === elementIdx ? value : input)));

  return (
    <div className='col-md-3'>
      {inputs.length > 0 && (
        <form>
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
