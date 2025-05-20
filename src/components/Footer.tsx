import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>
        Insurance is offered by ECOMONEY INSURANCE BROKERS PVT. LTD (CIN:
        U65999DL1995PTC394974), Principal Place of Business: 530, Rajsheel,
        Sector 27, DLF Phase-4, Gurugram, Haryana -122009. Registered Office:
        A-47, Lower Ground Floor, Hauz Khas, New Delhi 110016; IRDAI Broking
        License Code No. IRDAI/DB 247/2024, Certificate No. 334, License
        category - Direct (Life and General) Broker, valid till 15/10/2027.
        Product information is solely based on the information received from the
        insurers. For more details on risk factors, associated terms and
        conditions, and exclusions, please read the sales brochure carefully of
        the respective insurer before concluding a sale.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#ffffff',
  },
  footerText: {
    fontSize: 8,
    fontWeight:'500',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#000000',
    textAlign: 'justify',
    paddingVertical: 8,
    paddingHorizontal: 16,
    lineHeight: 12,
  },
});
