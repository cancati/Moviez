import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Header from '../../Components/Header';
import {NavigationProp, RouteProp} from '@react-navigation/native';

interface props {
  navigation: NavigationProp<any>;
  route?: RouteProp<any, any>;
}

const Popularity = (Popularity) => {
  var newData = (Popularity * 100) / 5000;
  return newData;
};

const DetailScreen: React.FunctionComponent<props> = ({
  navigation,
  route,
}: any) => {
  const item = route.params?.item;
  console.log(item);
  return (
    <>
      <SafeAreaView style={{backgroundColor: '#FFFFFF'}} />
      <StatusBar barStyle={'dark-content'} />
      <Header backpress={() => navigation.navigate('Home')} />
      <View style={{flex: 1}}>
        <ScrollView pagingEnabled={true} showsVerticalScrollIndicator={false}>
          <View
            style={{
              width: '100%',
              height: Dimensions.get('window').height * 0.9,
            }}>
            <Image
              style={{
                width: Dimensions.get('window').width * 1,
                height: Dimensions.get('window').height * 0.65,
                resizeMode: 'cover',
              }}
              source={{
                uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                height: '10%',
                marginHorizontal: 15,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{fontSize: 20, fontWeight: '500', color: '#00000060'}}>
                {item.release_date}
              </Text>
              {item.adult ? (
                <Text style={{fontSize: 20, fontWeight: '500', color: 'red'}}>
                  Adult
                </Text>
              ) : (
                <Text
                  style={{fontSize: 20, fontWeight: '500', color: '#00000060'}}>
                  Family
                </Text>
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 10,
                alignItems: 'center',
                height: '14%',
                justifyContent: 'space-between',
              }}>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{marginBottom: 10, fontSize: 17, fontWeight: '500'}}>
                  IMDB
                </Text>
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 90,
                    justifyContent: 'center',
                    alignItems: 'center',

                    borderColor: 'orange',
                    borderWidth: 5,
                  }}>
                  <Text style={{fontSize: 20}}>{item.vote_average}</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{marginBottom: 10, fontSize: 17, fontWeight: '500'}}>
                  POPULARİTY
                </Text>
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 90,
                    justifyContent: 'center',
                    alignItems: 'center',

                    borderColor: 'orange',
                    borderWidth: 5,
                  }}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{fontSize: 20}}>
                      {Popularity(item.popularity.toFixed(0))}
                    </Text>
                    <Text style={{fontSize: 14}}>%</Text>
                  </View>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text
                  style={{marginBottom: 10, fontSize: 17, fontWeight: '500'}}>
                  VOTE
                </Text>
                <View
                  style={{
                    width: 90,
                    height: 90,
                    borderRadius: 90,
                    justifyContent: 'center',
                    alignItems: 'center',

                    borderColor: 'orange',
                    borderWidth: 5,
                  }}>
                  <Text style={{fontSize: 20}}>{item.vote_count}</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              height: 800,
              justifyContent: 'flex-start',
            }}>
            <View>
              <View style={{paddingHorizontal: 10}}>
                <View
                  style={{
                    height: 300,
                    marginVertical: 15,
                    borderRadius: 15,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 10,
                    },

                    flexDirection: 'row',
                    shadowOpacity: 0.51,
                    shadowRadius: 13.16,
                    elevation: 20,
                  }}>
                  <Image
                    style={{
                      height: 300,
                      width: '50%',
                      resizeMode: 'cover',
                      borderRadius: 15,
                    }}
                    source={{
                      uri: `https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`,
                    }}
                  />

                  <View
                    style={{
                      marginLeft: Dimensions.get('window').width * 0.05,
                      width: '100%',
                    }}>
                    <View style={{height: '30%'}}>
                      <Text
                        style={{
                          fontSize: item.title.length > 20 ? 17 : 24,
                          width: '45%',
                        }}>
                        {item.title}
                      </Text>
                      <Text
                        style={{
                          fontSize: 13,
                          marginTop: 10,
                          color: '#00000090',
                        }}>
                        {item.release_date}
                      </Text>
                    </View>
                    <View>
                      <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text>Language : </Text>
                        <Text>{item.original_language.toUpperCase()} </Text>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 10}}>
                        <Text>IMDB : </Text>
                        <Text>{item.vote_average} </Text>
                      </View>
                      <View
                        style={{
                          marginTop: 10,
                          width: 40,
                          height: 40,
                          borderRadius: 40,
                          justifyContent: 'center',
                          alignItems: 'center',
                          backgroundColor: item.adult ? 'red' : 'purple',
                        }}>
                        {item.adult ? (
                          <Text style={{color: '#FFFFFF', fontWeight: '600'}}>
                            {' '}
                            18+{' '}
                          </Text>
                        ) : (
                          <Text style={{color: '#FFFFFF', fontWeight: '600'}}>
                            {' '}
                            13+{' '}
                          </Text>
                        )}
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 20,
                marginHorizontal: 10,
                fontWeight: '400',
              }}>
              {item.overview}
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default DetailScreen;
