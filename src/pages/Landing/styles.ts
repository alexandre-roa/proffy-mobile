import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8257E5',
    flex: 1,
    justifyContent: 'center',
    padding: 40
  },

  banner: {
    width: ' 100%',
    resizeMode: 'contain'
  },

  title: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    marginTop: 30
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },

  button: {
    height: 150,
    width: '48%',
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between'
  },

  studyButton: {
    backgroundColor: '#9871f5'
  },

  giveClassesButton: {
    backgroundColor: '#04d361',
    
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 18,
  },
  footerTitle: {
    color: '#d4c2ff',
    fontFamily: 'Poppins_400Regular',
    marginTop: 30,
    fontSize: 12,
    maxWidth: 140,
  }
});

export default styles;
