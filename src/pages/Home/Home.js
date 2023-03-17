import React from 'react';
import { Container } from 'components';
import css from './Home.module.css';
import phonebookImg from 'img/phonebook.png';

export const Home = () => {
  return (
    <Container
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'space-evenly',
        height: '100%',
      }}
    >
      <div className={css.Title_block}>
        <h1 className={css.Hero_title}>All contacts in one place</h1>
        <p className={css.Hero_text}>
          Stay in touch with people and don't loose your contacts when you
          decide to change your device!
        </p>
      </div>
      <div className={css.Image_block}>
        <img src={phonebookImg} width={350} height={350} />
      </div>
    </Container>
  );
};
