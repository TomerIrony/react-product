function ImagePopup(props) {
  let description;
  switch (props.data.name) {
    case 'Folding Mountain Bicycle':
      description =
        '26 Inch Folding Mountain Bicycle 21 Speed Double Shock Absorption Off-Road Variable Speed Adult Student One-Wheeled Bike';
      break;
    case 'Kids Bike':
      description =
        '14-inch Foldable Ultra-lightweight Kids Bike Children Variable Speed Dual Brake Folding Bicycle For Student';
    case 'Chi Tong Children Bicycle':
      description =
        'Chi Tong Children Bicycle Boy 12 inches 2-9 year old Baby Bicycle Child Bicycle Boy and Girl Child Bicycle';
  }
  return (
    <div
      className={`popout ${
        Object.keys(props.data).length === 0 ? '' : `popout_opened`
      }`}
      id="imageOpened"
    >
      <div className="popout__images">
        <button
          type="button"
          className="popout__close-btn"
          id="popoutImageCloseButton"
          onClick={props.onClose}
        ></button>
        <img
          id="popoutImage"
          src={props.data.link}
          alt={props.data.name}
          className="popout__image"
        />
        <h2 id="popoutImageCaption" className="popout__caption">
          {description}
        </h2>
      </div>
    </div>
  );
}
export default ImagePopup;
