import { View, Text, TouchableOpacity, Linking } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Footer() {

    const Call = () => {
        Linking.openURL('tel:+9330018461');
    }

    const handleWebsite = async () => {
        try {
            await Linking.openURL('https://www.youtube.com/');
        } catch (err) {
            console.error("Failed to open URL:", err);
        }
    };

    const Email = () => {
        Linking.openURL('mailto:anishasultana24@gmail.com'); 
    }

    const WhatsApp = () => {
        Linking.openURL('https://web.whatsapp.com/'); 
    }

    const Twitter = () => {
        Linking.openURL('mailto:anishasultana24@gmail.com'); 
    }

    return (
        <View style={{ backgroundColor: '#0F172A', padding: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                {/* Left Section & Logo and Description */}
                <View style={{ flex: 1, marginRight: 50 }}>
                    <View>
                        <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Kameron-Medium' }}>HealthNexus</Text>
                    </View>
                    <Text style={{ color: 'white', padding: 8 }}>
                        Laarem ipsum dolor sit amet, elit. Ipsam facere nemo molestiae? Odio rerum laboriosam illo repudiandae esse, hic quaerat quod? Vel, natus rerum
                    </Text>
                </View>

                {/* Right Section :- Contact Details */}
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'white', fontSize:19,paddingLeft:19, fontFamily: 'Kameron-Medium' }}>Contact Details</Text>

                    <TouchableOpacity onPress={Call}>
                        <Text style={{ color: 'white', fontSize: 16, marginTop: 10 }}>
                            <Icon name="phone" size={16} color="white" />: +91 9330018461
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={Call}>
                        <Text style={{ color: 'white', fontSize: 16, marginTop: 4 }}>
                            Tel: +91 9153422439
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={handleWebsite}>
                        <Text style={{ color: 'white', fontSize: 11, marginTop: 4 }}>
                            <Icon name="globe" size={13} /> https://www.youtube.com/
                        </Text>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                        <TouchableOpacity onPress={Email}>
                            <Icon name="envelope" size={22} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={WhatsApp}>
                            <Icon name="whatsapp" size={24} color="white" />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={Twitter}>
                            <Icon name="twitter" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                  
                </View>
                
            </View>
            <Text style={{ color: 'white', marginTop: 10 }}>
                        <Icon name="copyright" size={17} color="white" /> Copyright 2022, All Rights Reserved by Anisha
                    </Text>
        </View>
    )
}
