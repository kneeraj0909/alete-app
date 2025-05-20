import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface ContactDetailsProps {
  icon?: React.ReactNode;
  image?: any;
  text: string;
  subText: string;
}

const ContactDetails: React.FC<ContactDetailsProps> = ({
  icon,
  image,
  text,
  subText,
}) => {
  return (
    <View style={styles.ContactDetailsContainer}>
      {image ? (
        <Image source={image} style={styles.image} />
      ) : (
        icon && <View>{icon}</View>
      )}
      <View>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.subText}>{subText}</Text>
      </View>
    </View>
  );
};

export default ContactDetails;

const styles = StyleSheet.create({
  ContactDetailsContainer: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    paddingBottom:20,
    borderRadius:4
  },
  text: {
    fontFamily: 'Inter-VariableFont_opsz,wght',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 10,
    color: '#ffffff',
    paddingBottom: 6,
  },
  subText: {
    fontFamily: 'Inter-VariableFont_opsz,wght',
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 10,
    color: '#ffffff',
  },
  image: {
    width: 13,
    height: 13,
  },
});
