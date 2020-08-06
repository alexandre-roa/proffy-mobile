import React from 'react'
import { View, Text } from 'react-native'

import PageHeader from '../../components/Pageheader'
import styles from './styles'


function Favorites() {
    return (
        <View style={styles.container}>
      <PageHeader title='Meus Proffys favoritos'/>
    </View>
    )
}

export default Favorites