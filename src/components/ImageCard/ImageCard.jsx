import css from './ImageCard.module.css';

function ImageCard({ image, onClick }) {
  return (
    <div className={css.card} onClick={() => onClick(image)}>
      <img
        className={css.image}
        src={image.urls.small}
        alt={image.alt_description || 'Unsplash image'}
      />
    </div>
  );
}

export default ImageCard;
