const ImageComponent = ({ src, alt = '', className = '' }) => {
    const imgElement = new Image();
    imgElement.src = src;
    imgElement.alt = alt ? alt : '';
    imgElement.className = className ? className : '';
    return imgElement;
  };
  
  export default ImageComponent;
  