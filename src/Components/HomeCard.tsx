import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';

import {NavigationProp, RouteProp} from '@react-navigation/native';

interface prop {
  data: any;
  index: any;
  onPress: any;
  navigation: NavigationProp<any>;
  route?: RouteProp<any, any>;
  navigate?: any;
}

const Card: React.FunctionComponent<prop> = ({
  data,
  index,
  navigation,
  onPress,
  route,
  navigate,
}) => {
  return (
    <TouchableOpacity onPress={navigate}>
      <View
        style={{
          width: Dimensions.get('window').width * 0.3,
          height: Dimensions.get('window').height * 0.25,

          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
        }}>
        <View>
          <Image
            style={{
              width: Dimensions.get('window').width * 0.3,
              height: Dimensions.get('window').height * 0.2,
              resizeMode: 'cover',
              borderRadius: 10,
            }}
            source={{
              uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`,
            }}
          />
          <View style={{alignItems: 'flex-start'}}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 14,
                fontWeight: '500',
                maxWidth: '80%',
                textAlign: 'left',
              }}>
              {data.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#00000080',
                fontWeight: '500',
                maxWidth: '100%',
                textAlign: 'right',
              }}>
              {data.release_date.split('-', 1)}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
