const TemplateItem = ({ template, handleSelect }) => {
  return (
    <div className='col-md-4' onClick={() => handleSelect(template)} style={{ cursor: 'pointer' }}>
      <img src={template.url} alt={template.name} width='80px' height='80px' style={{ objectFit: 'cover' }} />
    </div>
  );
};

export default TemplateItem;
