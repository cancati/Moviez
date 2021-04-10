import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import Icon from 'react-native-ionicons';
import {navigate} from 'ionicons/icons';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface props {
  PopularPress: any;
  HomePress: any;
  SearchPress: any;
  style?: any;
}

const TabNavigate: React.FunctionComponent<props> = ({
  PopularPress,
  HomePress,
  SearchPress,
  style,
}) => {
  return (
    <View style={{width: '100%'}}>
      <BlurView
        blurType={'light'}
        style={[
          style,
          {
            position: 'absolute',
            width: '80%',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#00000060',
            height: 60,
            borderRadius: 30,
            flexDirection: 'row',
            paddingHorizontal: '10%',
            marginHorizontal: '15%',
          },
        ]}>
        <TouchableOpacity onPress={HomePress}>
          <View>
            <Icon name={'home'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={PopularPress}>
          <View>
            <Icon name={'ios-flame'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={SearchPress}>
          <View>
            <Icon name={'search'} />
          </View>
        </TouchableOpacity>
      </BlurView>
    </View>
  );
};

export default TabNavigate;
