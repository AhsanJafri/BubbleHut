import {Button} from 'native-base';
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
var {height, width} = Dimensions.get('window');
const Datum = [
  {id: 1, rule: 'Each correct tap will give you 10 points'},
  {id: 2, rule: 'Only have 10 second to score as much as you can'},
];
const Start = props => {
  return (
    <>
      <StatusBar backgroundColor="tomato" />
      <View style={{flex: 1, alignItems: 'center', backgroundColor: '#25a0a8'}}>
        <View
          style={{
            height: '80%',
            width: '90%',
            marginTop: '15%',
          }}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'serif',
                fontSize: height * 0.08,
                marginBottom: '5%',
                color: '#fff',
              }}>
              Bubble Hut
            </Text>
            <Text
              style={{
                fontFamily: 'serif',
                fontSize: height * 0.05,
                color: '#fff',
              }}>
              Games Rules
            </Text>
            <FlatList
              data={Datum}
              keyExtractor={item => item.id}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <Text
                      style={{
                        fontFamily: 'serif',
                        fontSize: height * 0.032,
                        marginTop: '5%',
                        color: '#fff',
                      }}>
                      {index + 1}- {item.rule}
                    </Text>
                  </View>
                );
              }}
            />

            <Text
              style={{
                fontFamily: 'serif',
                fontSize: height * 0.04,
                marginBottom: '10%',
                marginTop: '10%',
                color: '#fff',
              }}>
              Happy Gaming
            </Text>
          </View>

          <View style={{flex: 1}}></View>
          <View
            style={{
              height: '10%',
              width: '100%',
              borderRadius: 100,
              backgroundColor: '#2D2926',
            }}>
            <TouchableOpacity
              style={{
                height: '100%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => props.navigation.navigate('Main')}>
              <Text style={{color: '#FFFF', fontSize: 16}}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Start;
