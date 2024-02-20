import { Image, StyleSheet } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import mobiLogo from '../../assets/images/mobi.png'

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={mobiLogo}/>
      <Text style={styles.title}>Mobi</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
