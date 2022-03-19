import React from 'react';
import styles from './Home.module.css';
import {Link, useHistory} from 'react-router-dom';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

const Home = () => {
  const signInLinkStyle = {
      color: '#0077FF',
      fontWeight: 'bold',
      textDecoration: 'none',
      marginLeft: '10px',
  }

const history = useHistory();
  function startRegister() {
    history.push('/authenticate');
}

  return (
    <div className={styles.cardWrapper}>
        <Card title="Welcome to SocialMic !" icon="logo">
             <p className={styles.text}>
             Social Mic is a place to listen fascinating conversations, talk 🥂with the world's most amazing people, and make new friends from all walks of life.
            </p>
             <div>
                 <Button onClick={startRegister} text="Let's Go"/>
             </div>
             <div className={styles.signinWrapper}>
                 <span className={styles.hasInvite}>Have an invite text?</span>
             </div>
        </Card>
    </div>
  );
}

export default Home;