import IconLink from 'components/Icons/IconLink';

export default function LinkPreview({ data, viewDescription }) {
  return (
    <>
      <a href={data.link} target='_blank'>
        <section>
          <div className='box-img'>{/* <img src={data.img} alt='imagen' /> */}</div>
          <div className='box-description'>
            <div className='title'>{data.title}</div>
            {viewDescription && (
              <div className='description'>
                <small>{data.description}</small>
              </div>
            )}
            <div className='domain'>
              <IconLink fill={'#fdfdfd00'} /> {data.domain}
            </div>
          </div>
        </section>
      </a>
      <style jsx>{`
        section {
          border-radius: 10px;
          border: 1px solid #ccc;
          display: flex;
          background: white;
        }

        a {
          text-decoration: none;
        }

        a:visited {
          color: black;
        }

        .box-img {
          background-image: url(${data.img});
          width: 30%;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center center;
          border-radius: 8px 0px 0px 8px;
        }

        .box-img img {
          width: 100%;
          border-radius: 8px 0px 0px 8px;
        }

        .box-description {
          width: 70%;
          padding: 8px;
          place-items: center;
          place-content: center;
          font-size: small;
          text-align: left;
          position: relative;
        }

        .title {
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          margin-bottom: ;
        }
        .description {
          height: 85px;
        }

        .box-description .domain {
          display: flex;
          bottom: 0;
          position: absolute;
        }
      `}</style>
    </>
  );
}
