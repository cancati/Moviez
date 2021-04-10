import React, {useEffect, useState} from 'react';
import {
  Image,
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Dimensions,
  FlatList,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Header from '../../Components/Header';
import Title from '../../Components/Title';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import Card from '../../Components/Card';
import HomeCard from '../../Components/HomeCard';
import HomeImageSlider from '../../Components/HomeImageSlider';
import TabNavigate from '../../Components/TabNavigate';

interface props {
  navigation: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

const HomeScreen: React.FunctionComponent<props> = ({navigation, route}) => {
  const [Loading, setLoading] = useState(true);
  const [PopularMovie, setPopularMovie] = useState([]);
  const [TrendMovie, setTrendMovie] = useState([]);
  const [UpComing, setUpComing] = useState([]);
  const [TopRated, setTopRated] = useState([]);
  const [NowPlaying, setNowPlaying] = useState([]);
  const [Images, SetImages] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=36985281c49f2c5d722cf3dacc711874&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((json) => setPopularMovie(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=36985281c49f2c5d722cf3dacc711874',
    )
      .then((response) => response.json())
      .then((json) => setTrendMovie(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/upcoming?api_key=36985281c49f2c5d722cf3dacc711874&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((json) => setUpComing(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=36985281c49f2c5d722cf3dacc711874&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((json) => setTopRated(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/now_playing?api_key=36985281c49f2c5d722cf3dacc711874&language=en-US&page=1',
    )
      .then((response) => response.json())
      .then((json) => setNowPlaying(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  console.log(PopularMovie);
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#FFFFFF'}} />
      <StatusBar />
      <View style={{width: '100%', height: '100%'}}>
        <Header />
        <View style={{backgroundColor: '#e9ecef', width: '100%'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{height: '94.5%'}}>
            <View style={{justifyContent: 'center', width: '100%'}}>
              <HomeImageSlider
                items={PopularMovie.results}
                onPress={() => console.log('Can')}
              />
            </View>

            <View style={{marginTop: 5}}>
              <Title title={'Popular Movies'} />
              <View style={{flexDirection: 'row'}}>
                <FlatList
                  data={PopularMovie.results}
                  showsHorizontalScrollIndicator={false}
                  style={{paddingTop: 0, width: '100%'}}
                  horizontal
                  keyExtractor={({id}, index) => id}
                  renderItem={({item}) => (
                    <View style={{marginBottom: 30, marginHorizontal: 8}}>
                      <HomeCard
                        data={item}
                        navigate={() => navigation.navigate('Details', {item})}
                      />
                    </View>
                  )}
                />
              </View>
            </View>

            <View>
              <Title title={'Top Rated'} />
              <FlatList
                data={TopRated.results}
                showsHorizontalScrollIndicator={false}
                style={{paddingTop: 0, width: '100%'}}
                horizontal
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  <View style={{marginBottom: 30, marginHorizontal: 8}}>
                    <HomeCard
                      data={item}
                      navigate={() => navigation.navigate('Details', {item})}
                    />
                  </View>
                )}
              />
            </View>

            <View style={{marginTop: 0}}>
              <Title title={'Trending Movies'} />
              <FlatList
                data={TrendMovie.results}
                showsHorizontalScrollIndicator={false}
                style={{paddingTop: 0, width: '100%'}}
                horizontal
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  <View style={{marginBottom: 30, marginHorizontal: 8}}>
                    <HomeCard
                      data={item}
                      navigate={() => navigation.navigate('Details', {item})}
                    />
                  </View>
                )}
              />
            </View>

            <View>
              <Title title={'Up Coming'} />
              <FlatList
                data={UpComing.results}
                showsHorizontalScrollIndicator={false}
                style={{paddingTop: 0, width: '100%'}}
                horizontal
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  <View style={{marginBottom: 30, marginHorizontal: 8}}>
                    <HomeCard
                      data={item}
                      navigate={() => navigation.navigate('Details', {item})}
                    />
                  </View>
                )}
              />
            </View>

            <View>
              <Title title={'Now Playing'} />

              <FlatList
                data={NowPlaying.results}
                showsHorizontalScrollIndicator={false}
                style={{paddingTop: 0, width: '100%'}}
                horizontal
                keyExtractor={({id}, index) => id}
                renderItem={({item}) => (
                  <View style={{marginBottom: 100, marginHorizontal: 8}}>
                    <HomeCard
                      data={item}
                      navigate={() => navigation.navigate('Details', {item})}
                    />
                  </View>
                )}
              />
            </View>
          </ScrollView>

          <TabNavigate
            style={{bottom: 80}}
            HomePress={() => navigation.navigate('Home')}
            PopularPress={() => navigation.navigate('Popular')}
            SearchPress={() => navigation.navigate('Search')}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
