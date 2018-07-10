import React, { Component } from 'react';
import {
  View,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Explore extends Component {
  componentWillMount() {
    this.headerHeight = 80;

    if (Platform.OS === 'android') {
      this.headerHeight = 180 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{
            height: this.headerHeight,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#dddddd'
          }}>
            <View style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: 'white',
              marginHorizontal: 20,
              shadowOffset: {
                width: 0,
                height: 0
              },
              shadowColor: 'black',
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS === 'android' ? 40 : 20
            }}>
              <Icon name="ios-search" size={20} />
              <TextInput
                placeholder="Try Chiang Mai"
                placeholderTextColor="grey"
                underlineColorAndroid="transparent"
                style={{
                  flex: 1,
                  fontWeight: '700',
                  backgroundColor: 'white'
                }}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

export default Explore;
