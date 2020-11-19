/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image} from 'react-native';

import {FONTS} from '../constants';
import {millisToMinutesAndSeconds} from '../utils/helperFunctions';
import styles from './ItemStyle';

const Item = (props) => {
  const item = props.route.params && props.route.params.item;
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageCover}>
        <Image source={{uri: item.artworkUrl100}} style={styles.image} />
      </View>
      <View>
        <Text style={[styles.name, FONTS.secondary]}>
          {item.trackName || item.wrapperType.toUpperCase()}
        </Text>
      </View>
      <View style={styles.box}>
        <View style={styles.details}>
          <Text style={styles.label}>Artist: </Text>
          <Text style={styles.labelDetail}>{item.artistName}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Genre: </Text>
          <Text style={styles.labelDetail}>{item.primaryGenreName}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.label}>Duration: </Text>
          <Text style={styles.labelDetail}>
            {millisToMinutesAndSeconds(item.trackTimeMillis)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Item;
