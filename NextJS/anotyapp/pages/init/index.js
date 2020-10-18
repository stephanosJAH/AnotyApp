import Head from 'next/head';

import { useEffect, useState } from 'react';

import useUser from 'hooks/useUser';
import { USER_STATES } from 'helper/const';

import { colors } from 'styles/theme';
import { addOpacityToColor } from 'styles/utils';

import Waves from 'components/WaveBackground';
import Publicacion from 'components/publicacion';
import Nav from 'components/AppLayout/Nav';

export default function Home() {
  const user = useUser();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/previewLink')
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {user === USER_STATES.NOT_KNOWN || user === USER_STATES.NOT_LOGGER ? (
        <Waves>Cargando ...</Waves>
      ) : (
        <>
          <header>
            <h4>Linea de tiempo </h4>
          </header>
          <section>
            {data.map((d) => (
              <Publicacion user={user} data={d} />
            ))}
          </section>
          <Nav />
        </>
      )}

      <style jsx>{`
        header {
          background: ${addOpacityToColor(colors.white, 0.5)};
          border-bottom: 1px solid ${colors.border};
          backdrop-filter: blur(5px);
          width: 100%;
          height: 50px;
          display: flex;
          top: 0;
          position: sticky;
          border-radius: 0px 0px 8px 8px;
          z-index: 1;
           {
            /* centro vertical */
          }
          place-items: center;
           {
            /* centro horizontal */
          }
          place-content: center;
        }

        .mmm {
          height: 150px;
        }

        section {
          min-height: 800px;
        }
      `}</style>
    </>
  );
}
