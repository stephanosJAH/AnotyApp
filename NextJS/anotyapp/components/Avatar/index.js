import styles from './styles';

export default function Avatar({ src, text }) {
  return (
    <>
      <div>
        <img src={src} alt={name || 'avatar'}></img>
        {text && <strong>{text}</strong>}
      </div>
      <style jsx>{styles}</style>
    </>
  );
}
