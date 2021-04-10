import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  StatusBar,
  FlatList,
  Dimensions,
} from 'react-native';

import Card from '../../Components/Card';
import Header from '../../Components/Header';
import TabNavigate from '../../Components/TabNavigate';
import {NavigationProp, RouteProp} from '@react-navigation/native';

declare const global: {HermesInternal: null | {}};

interface props {
  navigation: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

const PopularMovies: React.FunctionComponent<props> = ({navigation, route}) => {
  const [Loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=36985281c49f2c5d722cf3dacc711874&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <StatusBar barStyle="dark-content" />
      <Header backpress={() => navigation.navigate('Home')} />
      <View
        style={{
          height: '94.5%',
          width: '100%',
        }}>
        <View
          style={{
            marginHorizontal: Dimensions.get('window').width * 0.015,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          />
          <View style={{flexDirection: 'column'}}>
            <FlatList
              data={data.results}
              numColumns={2}
              style={{paddingTop: 20, width: '100%'}}
              showsVerticalScrollIndicator={false}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <View style={{marginBottom: 100, marginHorizontal: 8}}>
                  <Card
                    data={item}
                    onPress={() => navigation.navigate('Details', {item})}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <TabNavigate
          style={{bottom: 80}}
          HomePress={() => navigation.navigate('Home')}
          PopularPress={() => navigation.navigate('Popular')}
          SearchPress={() => navigation.navigate('Search')}
        />
      </View>
    </>
  );
};

export default PopularMovies;
