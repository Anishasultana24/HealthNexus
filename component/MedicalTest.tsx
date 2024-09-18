import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Landing: undefined;
  Appointment:undefined;
  Prescription:undefined;
  Dashboard:undefined;
  
};

type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Landing'
>;

export default function Dashboard() {

  const navigation = useNavigation<LandingScreenNavigationProp>();
  
    const Logout = ()=>{
      navigation.navigate('Landing');
    }

    const Appointment = () => {
      
      navigation.navigate('Appointment'); // Navigate to Appointment screen
    };
  
    const Prescription = () => {
      
      navigation.navigate('Prescription'); // Navigate to Prescription screen
    };
  
    const Dashboard = () => {
      
      navigation.navigate('Dashboard'); // Navigate to MedicalTest screen
    };

    return (
      <View style={{ flex: 1, backgroundColor: '#E9F6FF' }}>
        <ScrollView style={{ flex: 1 }}>
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
                <TouchableOpacity style={{backgroundColor:'#1B4965',borderRadius:40, paddingVertical: 13,paddingHorizontal: 20,}} 
                    onPress={Logout} >
                  <Text style={{color:'#fff',fontSize:10}}>LOGOUT</Text>
                </TouchableOpacity>
  
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 30,
                }}
              >
              <Text style={{ fontSize: 30,fontFamily:'Kameron-SemiBold', fontWeight: 'bold', color: '#1B4965' }}>
                  Your Health,Our Test
              </Text> 
  
              <Text
                style={{
                  fontSize: 10,
                  fontFamily:'Kameron-Regular',
                  color: '#000',
                  textAlign: 'center',
                  marginTop: 10,
                  paddingHorizontal: 20,
                }}
              >
                Explore a wide range of medical test available at our clinic.view and download your test reports securely from anywhere,anytime,and stay infomed about your health.
              </Text>
            </View>
  
          </View>

          {/* White Section */}
          <View >
            <View  style={{ flex: 1, backgroundColor: '#FFF', padding: 10 }}>
            <ScrollView >
                {[1, 2,].map((_, index) => (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#E9F6FF',
                      borderRadius: 10,
                      marginBottom: 20,
                      padding: 15,
                      height:88,
                      width:367,
                      elevation: 3, // For shadow effect on Android
                      shadowColor: '#000', // For shadow effect on iOS
                      shadowOffset: { width: 0, height: 1 },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                    }}
                  >
                    {/*  Profile  */}
                    <View style={{height:56,width:71,borderRadius:15,backgroundColor:'#1B4965',marginRight:20}}>
                      
                    </View>
  
                    {/*  Info */}
                    <View style={{ flex: 1 }}>
                      <Text style={{ fontSize: 15,  color: '#1B4965',fontFamily:'Kameron-Bold', }}>Test Name</Text>
                      <Text style={{ fontSize: 10, color: '#1B4965',fontFamily:'Kameron-SemiBold' }}>Price</Text>
                      
                    </View>
  
                    
  
                    {/*  Button */}
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#1B4965',
                        borderRadius: 10,
                        paddingVertical: 10,
                        paddingHorizontal: 25,
                      }}
                    >
                      <Text style={{ color: '#fff' ,fontSize:8}}>Book Test</Text>
                    </TouchableOpacity>
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
               >
              <Icon name="file-text-o" size={24} color="#fff" />
              <Text style={{ color: '#fff', marginTop: 5,fontFamily:'Kameron-SemiBold', }}>Prescription</Text>
              </TouchableOpacity>
  
              {/* Medical Test */}
              <TouchableOpacity style={{ alignItems: 'center' }}
                >
              <Icon name="flask" size={24} color="#fff" />
              <Text style={{ color: '#fff', marginTop: 5 ,fontFamily:'Kameron-SemiBold',}}>Medical Test</Text>
              </TouchableOpacity>
          </View> 
  
  
      </View>
    )
  }