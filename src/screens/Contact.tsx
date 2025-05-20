import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ContactDetails from '../components/ContactDetails';
import {EmailIcon} from '../../assets/svg/Email';
import {AddressIcon} from '../../assets/svg/Address';

const {width, height} = Dimensions.get('window');

const Contact = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = () => {
    console.log('submit form', {name, email, message});
  };

  return (
    <ImageBackground
      source={require('../../assets/img/contact-banner.png')}
      style={styles.background}
      resizeMode="cover">
      <View>
        <Text style={styles.heading}>Contact Us</Text>
        <View style={{flex: 1}}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1, paddingBottom: 50}}
            keyboardShouldPersistTaps="handled">
            <View style={styles.formContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Name"
                placeholderTextColor="#888"
              />
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                placeholderTextColor="#888"
              />
              <TextInput
                style={[styles.input, styles.textArea]}
                onChangeText={setMessage}
                value={message}
                placeholder="Your Message"
                placeholderTextColor="#888"
                multiline
              />
              <View style={styles.button}>
                <Button
                  text="Send"
                  onPress={handleSubmit}
                  backgroundColor="#0D99FF"
                  style={{paddingVertical: 6, borderRadius: 0}}
                />
              </View>
            </View>
            <View style={styles.PersonDetail}>
              <ContactDetails
                image={require('../../assets/img/whatsapp-icon.png')}
                text="Call & Whatsapp"
                subText="9319 336 336"
              />
              <ContactDetails
                icon={<EmailIcon />}
                text="email"
                subText="contact@alete.in"
              />
              <ContactDetails
                icon={<AddressIcon />}
                text="Corporate Office"
                subText={
                  'Spring House, Rajsheel, 2nd Floor, Plot 530, \nSector 27, DLF Phase 4, Gurgaon - 122009.'
                }
              />
            </View>
          </ScrollView>
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </ImageBackground>
  );
};

export default Contact;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    fontFamily: 'PlayfairDisplay-VariableFont_wght',
    color: 'white',
    textAlign: 'center',
    paddingBottom: 16,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 4,
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft:10,
    borderRadius: 5,
    color: '#000',
    height: 40,
  },
  textArea: {
    height: 70,
    textAlignVertical: 'top',
  },
  button: {
    width: 100,
  },
  PersonDetail: {
    marginTop: 14,
    backgroundColor: '#0073E4',
    paddingHorizontal: 20,
    paddingTop: 15,
    borderRadius: 4,
    width: width * 0.8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom:10
  },
  footer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
