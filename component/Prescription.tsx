import { View, Text,ScrollView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Landing: undefined;
  Appointment:undefined;
  Dashboard:undefined;
  MedicalTest:undefined;
  
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
  
    const Dashboard = () => {
      
      navigation.navigate('Dashboard'); // Navigate to Prescription screen
    };
  
    const MedicalTest = () => {
      
      navigation.navigate('MedicalTest'); // Navigate to MedicalTest screen
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
                Your Digital Prescriptions
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
              Access and download your prescriptions anytime,anywhere with our secure and convenient digital storage system.
            </Text>
          </View>

        </View>
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
                  {/* Doctor Profile  */}
                  <Image
                    source={{ uri: 'https://img.freepik.com/premium-photo/medical-concept-indian-beautiful-female-doctor-white-coat-with-stethoscope-waist-up-medical-student-woman-hospital-worker-looking-camera-smiling-studio-blue-background_185696-621.jpg' }} // Replace with your image URL
                    style={{ width: 71, height: 65, borderRadius: 15, marginRight: 15 }}
                  />

                  {/*  Info */}
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#1B4965',fontFamily:'Kameron-SemiBold', }}>Doctor Name</Text>
                    <Text style={{ fontSize: 10, color: '#1B4965',fontFamily:'Kameron-SemiBold' }}>Disease</Text>
                    <Text style={{ fontSize: 10, color: '#1B4965',fontFamily:'Kameron-SemiBold' }}>Date</Text>
                  </View>

                  

                  {/*  Button */}
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#1B4965',
                      borderRadius: 20,
                      paddingVertical: 10,
                      paddingHorizontal: 25,
                    }}
                  >
                    <Text style={{ color: '#fff' ,fontSize:8}}>Download</Text>
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
            onPress={MedicalTest}  >
            <Icon name="flask" size={24} color="#fff" />
            <Text style={{ color: '#fff', marginTop: 5 ,fontFamily:'Kameron-SemiBold',}}>Medical Test</Text>
            </TouchableOpacity>
        </View> 


    </View>
  )
}