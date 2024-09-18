import { View, Text,ScrollView,TouchableOpacity, TextInput,Image } from 'react-native'
import { Card, Button,  } from 'react-native-elements';
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { Calendar } from 'react-native-calendars';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  Landing: undefined;
  Appointment:undefined;
  Prescription:undefined;
  MedicalTest:undefined;
  
};

type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Landing'
>;



export default function Dashboard() {

    const navigation = useNavigation<LandingScreenNavigationProp>();
    const [selectedMethod, setSelectedMethod] = useState('creditCard');
    
    const Logout = ()=>{
      navigation.navigate('Landing');
    }

    const Appointment = () => {
      
      navigation.navigate('Appointment'); // Navigate to Appointment screen
    };
  
    const Prescription = () => {
      
      navigation.navigate('Prescription'); // Navigate to Prescription screen
    };
  
    const MedicalTest = () => {
      
      navigation.navigate('MedicalTest'); // Navigate to MedicalTest screen
    };


  const onDayPress = (day: { dateString: React.SetStateAction<string>; }) => {
    setSelectedDate(day.dateString);
  };
  const [selectedDate, setSelectedDate] = useState('');
  const [upiID, setUpiID] = useState('');


  return (
    <View style={{ flex: 1, backgroundColor: '#E9F6FF' }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{padding:10}}>
        
          {/* header section */}
          <View style={{ paddingVertical: 20 }}>
              
              <View style={{ flexDirection:'row', justifyContent: 'space-between',alignItems: 'center', }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold',color:'#000000' , marginLeft: 10,}}>HealthNexus</Text>
                
                <View style={{flexDirection:'row',paddingRight:10,alignItems: 'center',}}>
                  
                  <TouchableOpacity style={{backgroundColor: '#CAF0F8', borderRadius: 50,padding: 10,marginRight: 10,}}>
                    <Icon name="bell" size={21} color="#1B4965"/>
                  </TouchableOpacity >
                  <TouchableOpacity style={{backgroundColor: '#CAF0F8', borderRadius: 50,padding: 10,marginRight: 10, }}>
                    <Icon name="user" size={21} color="#1B4965"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={{backgroundColor:'#1B4965',borderRadius:40, paddingVertical: 15,paddingHorizontal: 20,}} 
                      onPress={Logout} >
                    <Text style={{color:'#fff',fontSize:10}}>LOGOUT</Text>
                  </TouchableOpacity>

                </View>
              </View>
            </View>
          </View>

          {/* white section */}
          <View style={{ padding: 10}}>
          
            <View  style={{ flex: 1, backgroundColor: '#FFF',padding: 10 }}>
              {/* Calender section */}
              <Calendar 
                style={{elevation: 3, // For shadow effect on Android
                      shadowColor: '#000', // For shadow effect on iOS
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                  }}
                onDayPress={onDayPress}
                markedDates={{
                  [selectedDate]: { selected: true, selectedColor: '#1B4965' }
                }}
              />
              <Text style={{color:'#000',fontSize:22, paddingTop:20,marginLeft:'32%'}}>Pay Bill Amount</Text>
                {/* UPI ID Input */}
              <Text style={{fontSize: 16,marginVertical: 10,color:'#000',marginHorizontal:15}}> UPI ID
              </Text>
              <View style={{paddingHorizontal:20}}>
                <Image 
                  style={{
                    width: 30,
                    height: 30,
                    position: 'absolute',
                    top: 10,
                    left: 35,
                  }}
                  source={require('./images/Paymentmethod.png')} />
                <TextInput
                  style={{height: 50,borderColor: '#ddd', color:'#000',borderWidth: 2, borderRadius: 10,paddingHorizontal: 10, marginBottom: 20, paddingLeft: 65, }}
                  value={upiID}
                  onChangeText={setUpiID}
                  placeholder="1234 1234 1234 1234"
                  keyboardType="numeric"
                />
              </View>
              <View style={{flexDirection:'row',margin:10}}>
                <TouchableOpacity 
                 style={{
                  height: 20,
                  width: 20,
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#4CAF50',
                  alignItems: 'center',
                  justifyContent: 'center',
                 }}
                   onPress={()=>setSelectedMethod('creditcards')}>
                  { selectedMethod=='creditcards'&& <View style={{
                       width: 10,
                       height: 10,
                       borderRadius: 5,
                       backgroundColor: '#4CAF50',
                    }}>

                  </View>}
      
                </TouchableOpacity>
                <Text style={{color:'#000',fontSize:15,paddingHorizontal:5}}>Pay by Credit Card</Text>
                <Icon name="lock" size={18} color="#000" style={{ marginLeft: 10,}} />
              </View>
              <View style={{flexDirection:'row',marginLeft:50}}>
                <TouchableOpacity>
                  <Image style={{marginVertical:10,marginHorizontal:5,height:32,width:50}}source={ require('./images/Paymentmethod.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={{marginVertical:10,marginHorizontal:5,height:32,width:50}}source={ require('./images/Possiblepayments.png')}/>
                </TouchableOpacity> 

                <TouchableOpacity> 
                  <Image style={{marginVertical:10,marginHorizontal:5,height:32,width:50}}source={ require('./images/Visa.png')}/>
                </TouchableOpacity>

                <TouchableOpacity>  
                  <Image style={{marginVertical:10,marginHorizontal:5,height:32,width:50}}source={ require('./images/Discover.png')}/>
                </TouchableOpacity>
              </View>
              
              {/* Pay Now Button */}
              <Button
                title="Pay Now"
                buttonStyle={{ backgroundColor: '#1B4965',   borderRadius: 10,paddingHorizontal:10,paddingVertical:10,width:122,height:44, marginLeft: '35%',marginTop:10}}
                onPress={() => alert('Payment Successful!')}
              />
              
              {/* Bill History */}
              <View>
                <Text style={{color:'#000',marginLeft:135,fontSize:20,fontWeight:'bold',marginVertical:10}}>Bill History</Text>
              </View>
              <ScrollView  contentContainerStyle={{ paddingBottom: 100 }} >
                {[1, 2, 3, ].map((_, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#D9D9D9',
                      borderRadius: 5,
                      marginBottom: 20,
                      padding: 15,
                      height:63,
                      // width:369,
                      elevation: 3,
                      shadowColor: '#000', 
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                      }}
                    >
                    <View style={{flex:1}}>
                      <Text style={{color:'#000',fontFamily:'Kameron-Bold',fontSize:16,}}>Services Name</Text>
                      <Text style={{color:'#000',fontFamily:'Kameron-Medium',fontSize:10}}>Transition Id</Text>
                      <Text style={{color:'#000',fontFamily:'Kameron-Medium',fontSize:10}}>Date</Text>
                      
                    </View>
                    <View>
                      <Text style={{color:'#000',fontSize:16,fontFamily:'Kameron-Medium'}}>Amount</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
            </View>
        </View>
      </ScrollView>
         <View
              style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              backgroundColor: '#1B4965',
              paddingVertical: 15,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
              }}
            >
              {/* Appointment */}
              <TouchableOpacity style={{ alignItems: 'center' }}
                onPress={Appointment}  >
              <Icon name="calendar" size={24} color="#fff" />
              <Text style={{ color: '#fff', marginTop: 5, fontFamily:'Kameron-SemiBold',}}>Appointment</Text>
              </TouchableOpacity>

              {/* Dashboard */}
              <TouchableOpacity style={{ alignItems: 'center' }} 
              onPress={Dashboard}    >
              <Icon name="th-large" size={24} color="#fff" />
              <Text style={{ color: '#fff', marginTop: 5 ,fontFamily:'Kameron-SemiBold'}}>Dashboard</Text>
              </TouchableOpacity>

              {/* Prescription */}
              <TouchableOpacity style={{ alignItems: 'center' }}
              onPress={Prescription}  >
              <Icon name="file-text-o" size={24} color="#fff" />
              <Text style={{ color: '#fff', marginTop: 5,fontFamily:'Kameron-SemiBold', }}>Prescription</Text>
              </TouchableOpacity>

              {/* Medical Test */}
              <TouchableOpacity style={{ alignItems: 'center' }}
              onPress={MedicalTest}  >
              <Icon name="flask" size={24} color="#fff" />
              <Text style={{ color: '#fff', marginTop: 5 ,fontFamily:'Kameron-SemiBold',}}>Medical Test</Text>
              </TouchableOpacity>
         </View> 


    </View>
  )
}