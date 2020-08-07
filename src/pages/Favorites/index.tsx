import React from 'react';
import { View, Text } from 'react-native';

import PageHeader from '../../components/Pageheader';
import styles from './styles';
import TeacherItem from '../../components/TeacherItem';
import { ScrollView } from 'react-native-gesture-handler';

function Favorites() {
  return (
    <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos' />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </ScrollView>
    </View>
  );
}

export default Favorites;
