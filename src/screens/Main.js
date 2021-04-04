import {transform} from '@babel/core';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const {height, width} = Dimensions.get('screen');
const Circle = ({Top, Left, handleChange}) => {
  return (
    <View
      style={{
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'red',
        position: 'absolute',
        top: parseInt(Top),
        left: parseInt(Left),
        zIndex: 100,
      }}>
      <TouchableOpacity
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleChange}>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#fff'}}>
          HIT ME
        </Text>
      </TouchableOpacity>
    </View>
  );
};

let points = 0;
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      pT: 0,
      pL: 0,
      timer: 0,
    };
  }

  componentDidMount() {
    this.getRandomNumber();
  }

  startTimer = () => {
    this.setState({timer: 0});
    setInterval(() => {
      if (this.state.timer < 10) {
        this.setState({timer: this.state.timer + 1});
      } else {
        this.endGame();
      }
    }, 1000);
  };

  endGame = () => {
    this.setState({timer: 0});
    this.props.navigation.navigate('Result', {points: points});
    clearInterval(this.startTimer());
  };
  getRandomNumber() {
    points++;
    var pt = Math.floor((Math.random() * height) / 2) + 1;
    var pl = Math.floor((Math.random() * width) / 2) + 1;
    this.setState({pT: pt, pL: pl});
    this.startTimer();
  }

  render() {
    const {pL, pT} = this.state;
    return (
      <View style={style.container}>
        <Circle
          Top={pT}
          Left={pL}
          handleChange={() => this.getRandomNumber()}
        />
      </View>
    );
  }
}

export default Main;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
