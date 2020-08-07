import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons'

import PageHeader from '../../components/Pageheader';

import styles from './styles';
import TeacherItem from '../../components/TeacherItem';

function TeachersList() {

  const [isFielterVisible, setIsFilterVisible] = useState(false)

  function handleToggleFiltersVisible(){
    isFielterVisible ? setIsFilterVisible(false) : setIsFilterVisible(true)
  }


  return (
    <View style={styles.container}>
      <PageHeader 
      title='Proffys disponíveis' 
      headerRight={
        <BorderlessButton onPress={handleToggleFiltersVisible}>
          <Feather name='filter' size={20} color='#fff' />
        </BorderlessButton>
      }>
        { isFielterVisible && (<View style={styles.searchForm}>
          <Text style={styles.label}>Matéria</Text>
          <TextInput style={styles.input} placeholder={'Qual a materia?'} placeholderTextColor='#c1bcc' />

          <View style={styles.inputGroup}>
            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da Semana</Text>
              <TextInput style={styles.input} placeholder={'Qual a dia?'} placeholderTextColor='#c1bcc'/>
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput style={styles.input} placeholder={'Qual a horário?'} placeholderTextColor='#c1bcc'/>
            </View>
            
          </View>

          <RectButton style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>
        </View>
        )}
      </PageHeader>
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

export default TeachersList;
