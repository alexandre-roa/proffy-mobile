import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavorite from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles';

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          source={{ uri: 'http://github.com/alexandre-roa.png' }}
          style={styles.avatar}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Alexandre Roa</Text>
          <Text style={styles.subject}>História</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Giving life and changing the World with code ❤️💻 📱 🌎
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'  '}
          <Text style={styles.value}>R$ 80,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
            <RectButton style={[styles.favoriteButton, styles.gotFavorite]}>
                {/* <Image source={heartOutlineIcon} /> */}
                <Image source={unfavorite} />
            </RectButton>

            <RectButton style={styles.contactButton}>
                <Image source={whatsappIcon} />
                <Text style={styles.contactButtonText}>Entrar em contato</Text>
            </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
