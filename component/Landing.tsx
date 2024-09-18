import React,{useState} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ScrollView } from 'react-native';
import Footer from './Footer'; 

import Collapsible from 'react-native-collapsible';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  
};
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;

export default function Landing() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [isFAQ1Collapsed, setIsFAQ1Collapsed] = useState(true);
  const [isFAQ2Collapsed, setIsFAQ2Collapsed] = useState(true);
  const [isFAQ3Collapsed, setIsFAQ3Collapsed] = useState(true);
  const [isFAQ4Collapsed, setIsFAQ4Collapsed] = useState(true);
  const [isFAQ5Collapsed, setIsFAQ5Collapsed] = useState(true);

  const toggleFAQ1 = () => setIsFAQ1Collapsed(!isFAQ1Collapsed);
  const toggleFAQ2 = () => setIsFAQ2Collapsed(!isFAQ2Collapsed);
  const toggleFAQ3 = () => setIsFAQ3Collapsed(!isFAQ3Collapsed);
  const toggleFAQ4 = () => setIsFAQ4Collapsed(!isFAQ4Collapsed); 
  const toggleFAQ5 = () => setIsFAQ5Collapsed(!isFAQ5Collapsed);
  
  

  return (
    
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topContainer}>{/* Top Section with title and buttons */}
          <Text style={styles.headerText}>Health Nexus</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>ADMIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.centerTitle}>Health{"\n"}Nexus </Text>
        

        {/* Content text */}
        <Text style={styles.contentText}>EFFORTLESSLY MANAGE YOUR CLINICS APPOINTMENTS,PRESCRIPTIONS{"\n"}MEDICALS RECORDS,BILLING,AND PATIENT INFORMATION WITH A{"\n"}STREAMLINED,USER-FRIENDLY APPLICATION.</Text>

        
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        
        <Image 
          style={styles.image} 
          source={require('./images/OBJECTS.png')} 
        />
        <View style={styles.infoRow}>
          <View>
            
            <MaskedView maskElement={<Text style={[styles.infoText ]}>1000+</Text>}>
              <LinearGradient
                colors={['#6DDCFF', '#7F60F9']} // Define your gradient colors
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}
                
              >
                <Text style={[{opacity:0,fontSize:32}]}>1000+</Text>
              </LinearGradient>
            </MaskedView>

           
           <Text style={styles.infoText}>Clients</Text>

          </View>
          
          
          <Image
            style={styles.separator}
            source={{uri:'https://www.freepnglogos.com/uploads/line-png/straight-vertical-line-transparent-27.png'}}
          />

          <View>
            <MaskedView maskElement={<Text style={[styles.infoText, ]}>60+</Text>}>
                <LinearGradient
                  colors={['#6DDCFF', '#7F60F9']} // Define your gradient colors
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ flex: 1 }}
                  
                >
                  <Text style={[{opacity:0,fontSize:32}]}>60+</Text>
                </LinearGradient>
              </MaskedView>
            
            <Text style={styles.infoText}>Doctors</Text>

          </View>
        </View>
        <View style={{marginTop:90}}>
          <View>
            <Text style={{fontSize:40,fontFamily:'Kameron-SemiBold',color:'#1B4964',marginTop:40,paddingLeft:65}}>Our Services</Text>
          </View>

          <View style={styles.cardContainer}>
            {/* First row */}
            <View style={styles.cardRow}>
              <View style={styles.card}>
                <Image 
                  style={styles.cardImage} 
                  source={require('./images/image14.png')} 
                />
                <Text style={styles.cardText}>DENTIST</Text>
              </View>
              <View style={styles.card}>
                <Image 
                  style={styles.cardImage} 
                  source={require('./images/image2.png')} 
                />
                <Text style={styles.cardText}>DENTIST</Text>
              </View>
            </View>

            {/* Second row */}
            <View style={styles.cardRow}>
              <View style={styles.card}>
                <Image 
                  style={styles.cardImage} 
                  source={require('./images/image3.png')} 
                />
                <Text style={styles.cardText}>DENTIST</Text>
              </View>
              <View style={styles.card}>
                <Image 
                  style={styles.cardImage} 
                  source={require('./images/image4.png')} 
                />
                <Text style={styles.cardText}>DENTIST</Text>
              </View>
            </View>

            {/* Third row */}
            <View style={styles.cardRow}>
              <View style={styles.card}>
                <Image 
                  style={styles.cardImage} 
                  source={require('./images/image5.png')} 
                />
                <Text style={styles.cardText}>DENTIST</Text>
              </View>
              <View style={styles.card}>
                <Image 
                  style={styles.cardImage} 
                  source={require('./images/image5.png')} 
                />
                <Text style={styles.cardText}>DENTIST</Text>
              </View>
            </View>
          </View>

        </View>

        <View>
          <Text style={styles.meetSection}>Meet Our{"\n"}   Expert{"\n"}  Doctors</Text>
          <View style={{marginLeft:20}}>
            <Text style={{fontSize:15,fontFamily:'Kameron-Medium',color:'#000'}}>   A Dedicated team of expericed proffesionals,{"\n"}committed to providing the highest quality care{"\n"}      and personalized attentionfor every patient</Text>
          </View>
        
        </View>

        <View style={styles.columnContainer}>
            {/* First Column  */}
            <View style={{marginTop:90}}>
              <View style={styles.column}>
                <View style={{backgroundColor:'#1B4965',borderRadius: 10,width: 107,height: 145,  alignItems: 'center',    padding: 10,marginBottom: 15,}}>
                  <Image style={{height:115,width:90,marginTop:20}} source={require('./images/image7.png')} />
                  
                </View>
                <View style={{backgroundColor:'#1B4965',borderRadius: 10,width: 107,height: 145,  alignItems: 'center',    padding: 10,marginBottom: 15,}}>
                  <Image style={{height:115,width:100,marginTop:20}} source={require('./images/image6.png')} />
                 
                </View>
              </View>
            </View>
            {/* Second Column */}
            <View style={styles.column}>
              <View style={{backgroundColor:'#1B4965',borderRadius: 10,width: 122,height: 145,  alignItems: 'center',padding: 10,marginBottom: 15,}}>
                <Image style={{height:115,width:100,marginTop:20}} source={require('./images/image6.png')} />
                
              </View>
              <View style={{backgroundColor:'#1B4965',borderRadius: 10,width: 120,height: 145,  alignItems: 'center', padding: 10,marginBottom: 15,}}>
              <Image style={{height:115,width:100,marginTop:20}} source={require('./images/image9.png')} />
                
              </View>
              <View style={{backgroundColor:'#1B4965',borderRadius: 10,width: 107,height: 145,  alignItems: 'center',    padding: 10,marginBottom: 15,}}>
                <Image style={{height:124,width:95,marginTop:10}} source={require('./images/image8.png')} />
               
              </View>
            </View>

            {/* Third Column  */}
            <View style={styles.column}>
              <View style={{marginTop:90}}>
                <View style={{backgroundColor:'#1B4965',borderRadius: 10,width: 107,height: 145,  alignItems: 'center',    padding: 10,marginBottom: 15,}}>
                  <Image style={{height:115,width:100,marginTop:20}} source={require('./images/image9.png')} />
                  
                </View>
                <View style={{backgroundColor:'#1B4965',borderRadius: 10,width: 122,height: 145,  alignItems: 'center', padding: 10,marginBottom: 15,}}>
                  <Image style={{height:125,width:108,marginTop:10}} source={require('./images/image10.png')} />

                </View>
              </View>
            </View>
          </View>

        {/* FAQ SECTION */}

        <View>
          <View style={{margin:15}}>
            <Text style={{color:'#1B4965',fontSize:60,fontFamily:'Kameron-Medium',marginLeft:120}}>FAQ</Text>
          </View>

          {/* Accordion 1 */}
          <TouchableOpacity onPress={toggleFAQ1} style={styles.accordionHeader}>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionTitle}>What services do you offer?</Text>
              <View style={{borderRadius:10,borderColor:'white'}}>
                <Text style={styles.accordionSign}>{isFAQ1Collapsed ? '+' : '-'}</Text>
              </View>
              
            </View>
            <Collapsible collapsed={isFAQ1Collapsed}>
            <View >
              <Text style={{padding:10,color:'white'}}>We offer a wide range of healthcare services including general practice, dentistry, and more.</Text>
            </View>
          </Collapsible>
          </TouchableOpacity>
          
          
          
          {/* Accordion 2 */}
          <TouchableOpacity onPress={toggleFAQ2} style={styles.accordionHeader}>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionTitle}>What services do you offer?</Text>
              <View style={{borderRadius:10,borderColor:'white'}}>
                <Text style={styles.accordionSign}>{isFAQ2Collapsed ? '+' : '-'}</Text>
              </View>
              
            </View>
            <Collapsible collapsed={isFAQ2Collapsed}>
            <View >
              <Text style={{padding:10,color:'white'}}>We offer a wide range of healthcare services including general practice, dentistry, and more.</Text>
            </View>
          </Collapsible>
          </TouchableOpacity>
          {/* Accordion 3 */}
          <TouchableOpacity onPress={toggleFAQ3} style={styles.accordionHeader}>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionTitle}>What services do you offer?</Text>
              <View style={{borderRadius:10,borderColor:'white'}}>
                <Text style={styles.accordionSign}>{isFAQ3Collapsed ? '+' : '-'}</Text>
              </View>
              
            </View>
            <Collapsible collapsed={isFAQ3Collapsed}>
            <View >
              <Text style={{padding:10,color:'white'}}>We offer a wide range of healthcare services including general practice, dentistry, and more.</Text>
            </View>
          </Collapsible>
          </TouchableOpacity>

          {/* Accordion 4 */}
          <TouchableOpacity onPress={toggleFAQ4} style={styles.accordionHeader}>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionTitle}>What services do you offer?</Text>
              <View style={{borderRadius:10,borderColor:'white'}}>
                <Text style={styles.accordionSign}>{isFAQ4Collapsed ? '+' : '-'}</Text>
              </View>
              
            </View>
            <Collapsible collapsed={isFAQ4Collapsed}>
            <View >
              <Text style={{padding:10,color:'white'}}>We offer a wide range of healthcare services including general practice, dentistry, and more.</Text>
            </View>
          </Collapsible>
          </TouchableOpacity>

          {/* Accordion 5 */}
          <TouchableOpacity onPress={toggleFAQ5} style={styles.accordionHeader}>
            <View style={styles.accordionRow}>
              <Text style={styles.accordionTitle}>What services do you offer?</Text>
              <View style={{borderRadius:10,borderColor:'white'}}>
                <Text style={styles.accordionSign}>{isFAQ5Collapsed ? '+' : '-'}</Text>
              </View>
              
            </View>
            <Collapsible collapsed={isFAQ5Collapsed}>
            <View >
              <Text style={{padding:10,color:'white'}}>We offer a wide range of healthcare services including general practice, dentistry, and moreWe offer a wide range of healthcare services including general practice, dentistry, and more..</Text>
            </View>
          </Collapsible>
          </TouchableOpacity>
        
        </View>

        
      
      </View>
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8C8E3',
    justifyContent: 'center',
    padding: 10,
  },
  topContainer: {
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
   
  },
  headerText: {
    color: '#1B4965',
    fontSize: 18,
    fontWeight: 'bold',
    
    
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: '#1B4965',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
    // fontWeight: 'bold',
    fontFamily:'Kodchasan-Bold'
  },
  centerTitle: {
    color: '#1B4965',
    fontSize: 90,
    textAlign: 'center',
    marginTop:  130,
    // marginBottom: 20,
    textTransform:'uppercase',
    fontFamily:'Kameron-SemiBold',
    
  },
  contentText: {
    color: 'black',
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 30,
    fontFamily:'Kameron-Regular',
  },
  loginButton: {
    backgroundColor: '#1B4965',
    paddingVertical: 8,
    paddingHorizontal: 50,
    borderRadius:25,
    alignSelf: 'center',
    marginBottom: 12,
   
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 400,
    height: 300,
    alignSelf: 'center',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'center', // Center everything horizontally
    marginTop: 2,
  },
  infoText: {
    fontSize: 32,
    marginHorizontal: 20,
    textAlign: 'center',
    color: '#1B4965',

  },
 
  separator: {
    height: 102,
    width: 5,
    alignSelf: 'center',
  },
  
  cardContainer: {
    marginVertical: 20,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 162,
    height:149,
    alignItems: 'center',
    padding: 10,
    marginTop:40,
    // marginLeft:40,
    shadowColor: '#000',
    shadowOffset: { width: 20, height: 5 },
    shadowOpacity: 2.50,
    shadowRadius: 7.84,
    elevation: 9,
  },
  cardImage: {
    width: 120,
    height: 90,
    // marginBottom: 2,
  },
  cardText: {
    color: '#1B4965',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  meetSection:{
    fontSize:75,
    fontFamily:'Kameron-Medium',
    color:'#1B4965',
    paddingLeft:30,
  },
  columnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 90,
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  accordionHeader: {
    backgroundColor: '#1B4965',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  accordionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accordionContent: {
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  accordionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  accordionSign: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    
  },
});
