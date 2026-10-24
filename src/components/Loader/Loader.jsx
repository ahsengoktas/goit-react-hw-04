import { RotatingLines } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.wrapper}>
      <RotatingLines strokeColor="#3f51b5" width="48" visible={true} />
    </div>
  );
}

export default Loader;
