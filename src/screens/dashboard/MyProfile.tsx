import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DashboardHeader from '../../components/DashboardHeader';

const MyProfile: React.FC = () => {
  const [inputFields, setInputFields] = useState({
    name: 'Rajesh Relan',
    gender: 'male',
    dob: '',
    maritalStatus: '',
    mobileNo: '',
    phoneNo: '',
    email: '',
    country: '',
    state: '',
    city: '',
    pin: '',
    address: '',
    nationality: '',
    ociNumber: '',
    passportNumber: '',
    aadhaarNo: '',
    panNo: '',
    rmCode: '',
    rmName: '',
    refMISPCode: '',
    refMISPName: '',
    branchCode: '',
    branchName: '',
    contactPersonName: '',
    contactPersonPhone: '',
    contactPersonAddress: '',
    contactPersonEmail: '',
    contactPersonDOB: '',
  });

  const handleOnChange = (key: string, value: string) => {
    setInputFields(prevState => ({...prevState, [key]: value}));
  };

  const handleSave = () => {
    console.log('Saved Data:', inputFields);
  };

  return (
    <View style={styles.container}>
      <DashboardHeader title="Customer Details" />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{flex: 1}}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={styles.formPart}>
            <TextInput
              label={<Text style={{color: '#033381'}}>Name</Text>}
              value={inputFields.name}
              onChangeText={text => handleOnChange('name', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Gender</Text>}
              value={inputFields.gender}
              onChangeText={text => handleOnChange('gender', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Date of Birth</Text>}
              value={inputFields.dob}
              onChangeText={text => handleOnChange('dob', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Marital Status</Text>}
              value={inputFields.maritalStatus}
              onChangeText={text => handleOnChange('maritalStatus', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Mobile No</Text>}
              value={inputFields.mobileNo}
              onChangeText={text => handleOnChange('mobileNo', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Phone No</Text>}
              value={inputFields.phoneNo}
              onChangeText={text => handleOnChange('phoneNo', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Email</Text>}
              value={inputFields.email}
              onChangeText={text => handleOnChange('email', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Country</Text>}
              value={inputFields.country}
              onChangeText={text => handleOnChange('country', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>State</Text>}
              value={inputFields.state}
              onChangeText={text => handleOnChange('state', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>City</Text>}
              value={inputFields.city}
              onChangeText={text => handleOnChange('city', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Pin</Text>}
              value={inputFields.pin}
              onChangeText={text => handleOnChange('pin', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Address</Text>}
              value={inputFields.address}
              onChangeText={text => handleOnChange('address', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Nationality</Text>}
              value={inputFields.nationality}
              onChangeText={text => handleOnChange('nationality', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>OCI Number</Text>}
              value={inputFields.ociNumber}
              onChangeText={text => handleOnChange('ociNumber', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Passport Number</Text>}
              value={inputFields.passportNumber}
              onChangeText={text => handleOnChange('passportNumber', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Aadhaar No</Text>}
              value={inputFields.aadhaarNo}
              onChangeText={text => handleOnChange('aadhaarNo', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>PAN No</Text>}
              value={inputFields.panNo}
              onChangeText={text => handleOnChange('panNo', text)}
              style={styles.input}
              textColor="#5250568f"
            />
          </View>

          {/* RM Details */}
          <View style={styles.formPart}>
            <Text style={styles.sectionTitle}>RM Details</Text>
            <TextInput
              label={<Text style={{color: '#033381'}}>RM Code</Text>}
              value={inputFields.rmCode}
              onChangeText={text => handleOnChange('rmCode', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>RM Name</Text>}
              value={inputFields.rmName}
              onChangeText={text => handleOnChange('rmName', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Ref MISP Code</Text>}
              value={inputFields.refMISPCode}
              onChangeText={text => handleOnChange('refMISPCode', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Ref MISP Name</Text>}
              value={inputFields.refMISPName}
              onChangeText={text => handleOnChange('refMISPName', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Branch Code</Text>}
              value={inputFields.branchCode}
              onChangeText={text => handleOnChange('branchCode', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Branch Name</Text>}
              value={inputFields.branchName}
              onChangeText={text => handleOnChange('branchName', text)}
              style={styles.input}
              textColor="#5250568f"
            />
          </View>

          {/* Contact Person Details */}
          <View style={styles.formPart}>
            <Text style={styles.sectionTitle}>Contact Person Details</Text>
            <TextInput
              label={<Text style={{color: '#033381'}}>Name</Text>}
              value={inputFields.contactPersonName}
              onChangeText={text => handleOnChange('contactPersonName', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Phone</Text>}
              value={inputFields.contactPersonPhone}
              onChangeText={text => handleOnChange('contactPersonPhone', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Address</Text>}
              value={inputFields.contactPersonAddress}
              onChangeText={text =>
                handleOnChange('contactPersonAddress', text)
              }
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>Email</Text>}
              value={inputFields.contactPersonEmail}
              onChangeText={text => handleOnChange('contactPersonEmail', text)}
              style={styles.input}
              textColor="#5250568f"
            />
            <TextInput
              label={<Text style={{color: '#033381'}}>DOB</Text>}
              value={inputFields.contactPersonDOB}
              onChangeText={text => handleOnChange('contactPersonDOB', text)}
              style={styles.input}
              textColor="#5250568f"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Button mode="contained" onPress={handleSave} style={styles.saveButton}>
        SAVE CHANGES
      </Button>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEE8F1',
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    color: '#525056',
  },
  formPart: {
    backgroundColor: '#ffffff',
    flex: 1,
    marginHorizontal: 24,
    borderRadius: 16,
    marginVertical: 16,
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 14,
    marginHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'Inter-VariableFont_opsz,wght',
    marginHorizontal: 24,
    marginBottom: 8,
    color: '#525056',
  },
  input: {
    backgroundColor: '#ffffff',
    marginBottom: 16,
    marginHorizontal: 24,
  },
  saveButton: {
    width: 160,
    margin: 20,
    backgroundColor: '#033381',
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
});
