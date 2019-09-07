import React, {Fragment} from 'react';
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window');
export default class cr1 extends React.Component {
  render() {
    return (
      <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
      <ScrollView
          contentInsetAdjustmentBehavior="automatic">
          <View>
          <Image source={require('../assets/ww.jpeg')}
            style={{width:width,
            height:150}}/>
          </View>

            <View style={{paddingLeft:13,
                  paddingRight:13,
              }}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',

                  }}>
                      <Text style={{
                        fontSize: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'rgba(0,160,169,1)',
                        fontWeight: 'bold',
                        paddingTop:20,
                        paddingBottom:30,
                        paddingLeft: 7
                      }}>MARATHON MONKEYS</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                        A team of three participants who will be 3 monkeys (blind, deaf and dumb), should coordinate
amongst themselves in order to collect all the resources required to purify the contaminated water.
The participant who cannot talk will have to balance a round bottomed object on a see -saw using
only one leg. The participant who cannot hear will get clues to find the resources placed at various
locations in the room. It is his/her task to guide the blind folded person to those places and help find
the resources. Once all the resources are obtained the blind folded person should purify the
contaminated water using the directions given by the deafened person.
The game continues only till the person balancing the see- saw drops the object. Once he loses
balance and the object hits the floor, the game is OVER. Overcoming all these obstacles, the team
that purifies the maximum amount of water using optimum resources within minimum time wins the
game

                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 3
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 150/- INR per team
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-1500/-INR ; 2nd-1000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 15th September 2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 10AM to 4PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: Taylor hall, IEM Dept.
                        </Text>
                        </View>
                    </View>
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                      }} >
                    <View>

                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',
                          }}>Rules of the event:</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
1.  Players aren't supposed to remove their blindfold, hearing impairment and Player who isn't allowed to talk is not allowed to speak and will lead to disqualification.
   </Text>
                                                <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
          2. Blindfolded person is to purify water based on the instruction of the speaking person.
   </Text>
                                  <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
                     3. Team purifying most amount of water in the least amount of time wins.
   </Text>
                    </View>
                    </View>
                    <View style={{padding:10,
                    backgroundColor: '#00000000'}} />
                    <View style={{padding:7,
                          backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: 4,
                        paddingTop:10
                      }}>
                        <Text style={{
                          fontSize: 19,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          paddingBottom:10,
                          fontWeight: 'bold',
                          }}>Event Coordinators:</Text>
                        <Text style={{fontSize: 15,
                          }}>
                              1. Brunda P - 9663888411
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                              2. Halima Sadiya - 7337779362
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                              3.Shubha Deshpande - 9739064985
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}