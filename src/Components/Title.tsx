import React from 'react';
import {View, Text} from 'react-native';
import {BlurView} from '@react-native-community/blur';

interface props {
  title?: any;
}

const Title: React.FunctionComponent<props> = ({title}) => {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 10,
        backgroundColor: 'transparent',
      }}>
      <Text style={{fontSize: 24, fontWeight: '400', color: '#00000099'}}>
        {title}
      </Text>
    </View>
  );
};

export default Title;
