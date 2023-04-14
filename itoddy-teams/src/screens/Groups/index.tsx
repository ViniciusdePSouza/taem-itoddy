import React from 'react';
import { Container } from './styles';
import { Header } from '../../Components/Header';
import { Highlight } from '../../Components/Highlight';
import { GroupCard } from '../..//Components/GroupCard';

export function Groups() {
  function handleOnPress() {
    console.log('chegando aqui')
  }

  return (
    <Container >
      <Header showBackButton/>
      <Highlight title="Turmas" subtitle="Jogue com a sua turma"/>
      <GroupCard title="Los Atiradores"/>
      <GroupCard title="Los Apostadores" onPress={handleOnPress}/>
    </Container>
  );
}

