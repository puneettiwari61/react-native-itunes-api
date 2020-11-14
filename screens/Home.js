/* eslint-disable react-native/no-inline-styles */
import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import {SearchBar} from 'react-native-elements';
import LottieView from 'lottie-react-native';

import {COLORS, FONTS, SIZES} from '../constants';

import styles from './HomeStyle';

const Home = (props) => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    fetchResults('lil + pump');
  }, []);

  const updateSearch = (value) => {
    setSearch(value);
  };

  const handleSubmit = () => {
    let term = search ? search.split(' ').join('+') : '';
    if (!term) {
      return '';
    }
    setShowLoader(true);
    fetchResults(term);
  };

  const fetchResults = (term) => {
    Axios.get(`https://itunes.apple.com/search?term=${term}&limit=50`)
      .then((res) => {
        setResult(res.data.results);
        setShowLoader(false);
        console.log(res.data, 'data');
      })
      .catch((err) => console.log(err, 'err'));
  };

  const handleItemClick = (item) => {
    props.navigation.navigate('Description', {item});
  };

  const renderSearchedResults = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => handleItemClick(item)}
        style={[styles.container, styles.trendingShadow]}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: item.artworkUrl100}}
            // resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.textWrapper}>
          <Text style={{color: COLORS.black, ...FONTS.h1}}>
            {item.artistName.substring(0, 15)}
          </Text>
          <Text style={{...FONTS.body}}>{item.trackName}</Text>
          <Text style={{...FONTS.body2}}>{item.wrapperType.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const loader = () => (
    <View style={styles.loaderConatiner}>
      <LottieView
        source={require('../assets/lottie/tunes.json')}
        autoPlay
        loop
        style={styles.loader}
      />
    </View>
  );

  return showLoader ? (
    loader()
  ) : (
    <View style={styles.white}>
      <SearchBar
        placeholder="Search"
        onChangeText={updateSearch}
        value={search}
        platform="ios"
        showLoading={true}
        returnKeyType={'done'}
        onSubmitEditing={handleSubmit}
      />
      <View style={{paddingBottom: SIZES.padding}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={result}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => renderSearchedResults(item, index)}
          style={{marginBottom: 125}}
          // numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;
