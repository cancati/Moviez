import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ionicons';

interface props {
  backpress?: any;
}

const Header: React.FunctionComponent<props> = ({backpress}) => {
  return (
    <View
      style={{
        width: '100%',

        height: 44,
        paddingHorizontal: 16,
        borderBottomWidth: 0.25,
        borderColor: '#9a8c98',

        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        onPress={backpress}
        style={{
          width: '25%',
          alignItems: 'flex-start',
        }}>
        {backpress == null ? null : (
          <View>
            <Icon name={'arrow-back'} size={30} />
          </View>
        )}
      </TouchableOpacity>

      <View
        style={{
          width: '50%',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>
          M O V İ E <Text> </Text>/.\{' '}
        </Text>
      </View>

      <View
        style={{
          width: '25%',
          alignItems: 'flex-end',
          height: 30,
          justifyContent: 'center',
        }}>
        <TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            {/*<Icon
              name={'information-circle-outline'}
              color={'#0000070'}
              size={30}
            />*/}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
