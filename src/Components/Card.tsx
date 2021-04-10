import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface prop {
  data: any;
  index: any;
  navigation: NavigationProp<any>;
  route?: RouteProp<any, any>;
  onPress?: any;
}

const Card: React.FunctionComponent<prop> = ({
  data,
  navigation,
  route,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={true}
      onPress={onPress}
      blurType={'light'}
      style={{
        width: Dimensions.get('window').width * 0.45,
        height: Dimensions.get('window').height * 0.4,
        backgroundColor: '#f8edeb',
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
            width: Dimensions.get('window').width * 0.45,
            height: Dimensions.get('window').height * 0.3,
            resizeMode: 'cover',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
          }}
          source={{
            uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${data.poster_path}`,
          }}
        />
      </View>

      <View
        style={{
          height: 35,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '600',
            maxWidth: '100%',
            textAlign: 'center',
          }}>
          {data.title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 5,
          marginTop: 5,
        }}>
        <View>
          <Text style={{fontSize: 13, fontWeight: '500'}}>IMDB</Text>
          <Text style={{fontSize: 13, textAlign: 'center', marginTop: 5}}>
            {data.vote_average}
          </Text>
        </View>
        <View
          style={{
            height: 15,
            marginTop: 2,
            width: 1,
            backgroundColor: '#00000040',
          }}
        />
        <View>
          <Text style={{fontSize: 13, fontWeight: '500'}}>Popularity</Text>
          <Text style={{fontSize: 13, textAlign: 'center', marginTop: 5}}>
            {data.popularity.toFixed(0) / 10}
          </Text>
        </View>
        <View
          style={{
            height: 13,
            marginTop: 2,
            width: 1,
            backgroundColor: '#00000040',
          }}
        />
        <View>
          <Text style={{fontSize: 13, fontWeight: '500'}}>Kategori</Text>
          <Text style={{fontSize: 13, textAlign: 'center', marginTop: 5}}>
            8.1
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
