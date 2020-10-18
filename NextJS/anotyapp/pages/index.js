import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { loginWithGitHub } from 'firebase/client';

import useUser from 'hooks/useUser';

import { USER_STATES } from 'helper/const';

import styles from 'styles/pages/index';

import Button from 'components/Buttons';
import GitHub from 'components/Icons/GitHub';
import Avatar from 'components/Avatar';
import Logo from 'components/Icons/Logo';
import Waves from 'components/WaveBackground';

export default function App() {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    user && router.replace('init');
  }, [user]);

  const handleClick = async () => {
    loginWithGitHub().catch((e) => {
      console.log(e);
    });
  };

  return (
    <>
      <Head>
        <title>AnotiApp</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Waves>
        <section>
          <Logo width={100} height={100} fill={'white'} />
          <h1>AnotiApp</h1>
          {user === USER_STATES.NOT_KNOWN && 'Cargando ... '}
          {user === USER_STATES.NOT_LOGGER && (
            <Button onClick={handleClick}>
              <GitHub fill='#fff' width={24} height={24} />
              Ingresar con GitHub
            </Button>
          )}
          {user && user.avatar && <Avatar src={user.avatar} text={user.name} />}
        </section>
        <style jsx>{styles}</style>
      </Waves>
    </>
  );
}
