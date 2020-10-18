import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { USER_STATES } from 'helper/const';

import { onAuthStateChanged } from 'firebase/client';

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  useEffect(() => {
    user === USER_STATES.NOT_LOGGER && router.push('/');
  }, [user]);

  return user;
}
