import './Loader.css';

export default function Loader() {
  return (
    <div className='loader'>
      <span class='loader__spinner'></span>
      <p className='loader__text'>Loading scene...</p>
    </div>
  );
}
