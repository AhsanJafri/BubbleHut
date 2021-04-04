import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {StatusBar} from 'react-native';
import {Text, View, Dimensions, Animated, Image} from 'react-native';

const {height, width} = Dimensions.get('screen');
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      HEIGHT1: new Animated.Value(height / 4),
      HEIGHT2: new Animated.Value(height - height / 4),
    };
  }

  TimingFunc() {
    Animated.parallel([
      Animated.timing(this.state.HEIGHT1, {
        toValue: height - height / 4,
        duration: 3000,
      }),
      Animated.timing(this.state.HEIGHT2, {
        toValue: height / 4,
        duration: 3000,
      }),
    ]).start();
  }
  componentDidMount() {
    this.TimingFunc();
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#25a0a8'}}>
        <StatusBar color="tomato" />
        <Animated.View
          style={{
            height: this.state.HEIGHT2,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: 'rgb(255,0,0)',
            }}
          />
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: 'rgb(255,0,0)',
            }}
          />
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 50,
              backgroundColor: 'rgb(255,0,0)',
            }}
          />
        </Animated.View>
        <Animated.View
          style={{
            height: this.state.HEIGHT1,
            backgroundColor: '#25a0a8',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              height: '70%',
            }}>
            <Text
              style={{
                fontSize: height * 0.07,
                color: '#ffffff',
                fontFamily: 'serif',
              }}>
              BubbleHut
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                width: width / 1.5,
                borderRadius: 40,
                backgroundColor: 'rgba(230,0,0,0.2)',
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '15%',
              }}
              onPress={() => this.props.navigation.navigate('Start')}>
              <Text
                style={{
                  fontSize: height * 0.03,
                  color: '#ffffff',
                  fontFamily: 'serif',
                }}>
                Play Now
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default Main;
