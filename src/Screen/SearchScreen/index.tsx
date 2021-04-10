import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native';
import SearchTab from '../../Components/SearchTab';
import Icon from 'react-native-ionicons';
import Card from '../../Components/Card';
import HomeCard from '../../Components/HomeCard';
import TabNavigate from '../../Components/TabNavigate';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface props {
  navigation: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

const SearchScreen: React.FunctionComponent<props> = ({navigation, route}) => {
  const [SearchItem, setSearchItem] = useState();
  const [Loading, setLoading] = useState(true);
  const [PopularMovie, setPopularMovie] = useState([]);
  const [PMovie, setPMovie] = useState([]);

  const searchFilterFunction = (text) => {
    const newData = PMovie.filter((item) => {
      const itemData = `${item.title.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    setPopularMovie(newData);
  };

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=36985281c49f2c5d722cf3dacc711874&language=en-US&page=1',
    )
      .then((res) => res.json())
      .then((res) => {
        setPopularMovie(res.results);
        setPMovie(res.results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(PMovie);
  return (
    <>
      <SafeAreaView style={{backgroundColor: 'white'}} />
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          width: '100%',
          height: 44,
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            backgroundColor: '#00000020',
            width: '100%',
            height: Dimensions.get('window').height * 0.04,
            borderRadius: 7,
            flexDirection: 'row',
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon name={'search'} size={28} color={'#00000060'} />
            <TextInput
              style={{
                width: '95%',
                height: '100%',
                paddingLeft: 10,
              }}
              onChangeText={(text) => searchFilterFunction(text)}
              placeholder={'Buraya Yazınız :'}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          minHeight: '94.5%',
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
              data={PopularMovie}
              numColumns={2}
              style={{paddingTop: 26.4, width: '100%', minHeight: '100%'}}
              showsVerticalScrollIndicator={false}
              keyExtractor={({id}, index) => id}
              renderItem={({item}) => (
                <View style={{marginBottom: 30, marginHorizontal: 8}}>
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
          style={{bottom: 135}}
          HomePress={() => navigation.navigate('Home')}
          PopularPress={() => navigation.navigate('Popular')}
          SearchPress={() => navigation.navigate('Search')}
        />
      </View>
    </>
  );
};

export default SearchScreen;
