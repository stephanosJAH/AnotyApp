import styles from './styles';
import Avatar from 'components/Avatar';
import LinkPreview from 'components/LinkPreview';

console.log('------');
export default function Publicacion({ user, data }) {
  return (
    <>
      <article>
        <div>
          <Avatar src={user.avatar} />
        </div>
        <div>
          <header>
            <strong>{user.name}</strong>
          </header>
          <section>
            <div className='description'>{data.message}</div>
            {data.preview.title && (
              <LinkPreview data={data.preview} viewDescription={true} />
            )}
          </section>
        </div>
      </article>
      <style jsx>{styles}</style>
    </>
  );
}
