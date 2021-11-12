const EditCaption = ({ inputs }) => {
  return (
    <div className='col-md-3'>
      {inputs.length > 0 && (
        <form>
          {inputs.map((input, i) => (
            <div className='form-group' key={i}>
              <input type='text' value={input} />
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default EditCaption;
