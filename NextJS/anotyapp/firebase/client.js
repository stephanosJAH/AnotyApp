import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyA8T5hF56kG3Bbo5N98jfgv-1Vvx9cCZN4',
  authDomain: 'anotiapp.firebaseapp.com',
  databaseURL: 'https://anotiapp.firebaseio.com',
  projectId: 'anotiapp',
  storageBucket: 'anotiapp.appspot.com',
  messagingSenderId: '32429786548',
  appId: '1:32429786548:web:db49813775be727d601ee1',
  measurementId: 'G-X5YW243EB0',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFromFirebaseAuth = (user) => {
  console.log(user);

  const { displayName, email, photoURL, uid } = user;
  return {
    id: uid,
    email,
    name: displayName,
    avatar: photoURL,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserFromFirebaseAuth(user) : null;
    onChange(normalizeUser);
  });
};

export const loginWithGitHub = async () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return await firebase.auth().signInWithPopup(githubProvider);
};
