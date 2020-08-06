import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import lnadingImage from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing() {
  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={lnadingImage} />
      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={[styles.button, styles.studyButton]}>
            <Image source={studyIcon}/>
            <Text style={styles.buttonText}>Estudar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.giveClassesButton]}>
            <Image source={giveClassesIcon}/>
            <Text style={styles.buttonText}>Dar aulas</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerTitle}>
          Total de 285 conexões, {'\n'}
          já realizadas{' '}
          <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
