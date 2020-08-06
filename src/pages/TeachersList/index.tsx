import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/Pageheader'

import styles from './styles';

function TeachersList() {
  return (
    <View style={styles.container}>
      <PageHeader title='Proffys disponíveis'/>
    </View>
  );
}

export default TeachersList;
