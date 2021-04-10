import React from 'react';
import {Dimensions, Image, Text, TouchableOpacity, View} from 'react-native';
import Carousel from 'react-native-snap-carousel';

interface props {
  items: any;
  onPress: any;
}

interface propsitem {
  onPress: any;
  item: any;
  index: any;
}

const data = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];
const RenderItem: React.FunctionComponent<propsitem> = ({item, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 10}}>
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
            justifyContent: 'space-between',
          }}>
          <View style={{height: '50%'}}>
            <Text
              style={{
                fontSize: item.title.length > 20 ? 17 : 24,
                width: '45%',
              }}>
              {item.title}
            </Text>
            <Text style={{fontSize: 13, marginTop: 10, color: '#00000090'}}>
              {item.release_date}
            </Text>
            <Text
              style={{
                fontSize: 11,
                marginTop: 10,
                width: '45%',
                maxHeight: '70%',
              }}>
              {item.overview}
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
                <Text style={{color: '#FFFFFF', fontWeight: '600'}}> 18+ </Text>
              ) : (
                <Text style={{color: '#FFFFFF', fontWeight: '600'}}> 13+ </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const HomeImageSlider: React.FunctionComponent<props> = ({items, onPress}) => {
  return (
    <View>
      <Carousel
        data={items}
        autoplay={true}
        loop={true}
        renderItem={RenderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        enableSnap={true}
      />
    </View>
  );
};

export default HomeImageSlider;
