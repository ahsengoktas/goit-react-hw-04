import css from './ErrorMessage.module.css';

function ErrorMessage() {
  return (
    <p className={css.text}>Something went wrong. Please try again later.</p>
  );
}

export default ErrorMessage;
