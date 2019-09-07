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
export default class co8 extends React.Component {
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
                      }}>CODE IN THE DARK</Text>
                    </View>

                    <View style={{paddingBottom: 20}}>
                        <Text style={{fontSize: 17,
                          paddingBottom: 20,
                        fontWeight: '600',
                        fontWeight: 'semibold',
                        }}>
                         Code in the Dark is a front-end (HTML, CSS) competition where each contestant competes to
implement a website design given only a screenshot and assets displayed, pushing them to their
creative and intellectual limits.
                        </Text>
                        <View style={{padding:7,
                              backgroundColor: 'rgba(0,0,0,0.4)',
                            borderRadius: 4,
                            paddingLeft:10
                          }}>
                        <Text style={{fontSize: 15,
                          }}>
                           Participation: Team of 2
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Registration Fee: 150 INR
                        </Text>
                          <Text style={{fontSize: 15,
                                }}>
                           Prize money:1st-1500/-INR ; 2nd-1000/-INR
                        </Text>
                        <Text style={{fontSize: 15,
                            }}>
                         Date: 14/09/2019
                      </Text>
                          <Text style={{fontSize: 15,
                              }}>
                           Time: 12PM to 2PM
                        </Text>
                          <Text style={{fontSize: 15,
                            }}>
                           Venue: 402, New Building
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
1.All teams must compulsorily use the custom code in the dark text editor provided by us on the day of the competition.
  </Text>
                                               <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
2. Each team has to bring their own laptops.
  </Text>
                                 <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
3. Each team under any case is allowed only to use 1 system during the course of the competition.
  </Text>
                                 <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
4.The competition will be 2 hours long, with the contestants trying their best to recreate a given sample web page without previews during coding, and can only use a screenshot of the sample web page as a reference.
  </Text>
                                 <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
5. HTML and CSS Frameworks (Bootstrap, TailwindCSS, etc) are allowed to be used for the competition. The CDN links will be provided.
  </Text>
                                 <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
6. The contestant should have the editor in full-screen mode, and is never allowed to exit out of it or use any measurement tools. They can view the documentation on their mobiles if they wish.
  </Text>
                                 <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
7. Any team caught previewing their page before the time is up will be immediately disqualified.
  </Text>
                                 <Text style={{paddingBottom: 20,
                        fontSize: 15,
                      }}>
8. After the time is up, all contestants should press the download button on the editor and keep their hands off their systems.
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
                              1.Aditya N - 9739610005
                        </Text>
                        <Text style={{fontSize: 15,
                          }}>
                             2.	Akshay - 9449528069
                        </Text>
                       <Text style={{fontSize: 15,
                        }}>
                              3.Nikhil - 9611969900
                        </Text>
                    </View>
                  </View>

        </ScrollView>
        </SafeAreaView>
      </Fragment>


    );
  }
}