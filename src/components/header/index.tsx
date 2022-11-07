import { View, Text, TouchableOpacity } from 'react-native';
import { indexStyles as styles } from './styles';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
  canGoBack?: boolean;
}

export const Header = ({ title, canGoBack }: Props) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {canGoBack && (
        <TouchableOpacity
          style={styles.btnGoback}
          onPress={() => navigation.goBack()}>
          <Text style={styles.textBtn}>{'<-'} </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
