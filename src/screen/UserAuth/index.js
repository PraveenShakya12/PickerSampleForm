import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import TextFields from '../../components/TextFields';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {UserEmail, UserPhone} from '../../redux/action/action';
import { ValidateEmail, ValidateNumber } from '../../utils';

const AuthScreen = ({navigation}) => {
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidNumber, setIsValidNumber] = useState('');

  const dispatch = useDispatch();
  const {Email, Phone} = useSelector(state => state.user);

  const IsEmailValid = () => {
    ValidateEmail().test(Email)
      ? setIsValidEmail('')
      : setIsValidEmail('Enter valid Email');
  };

  const IsNumberValid = () => {
    ValidateNumber().test(Phone)
      ? setIsValidNumber('')
      : setIsValidNumber('Enter valid Password');
  };

  const CheckValidation = () => {
    if(Email === '' && Phone === ''){
      setIsValidEmail('Enter valid Email');
      setIsValidNumber('Enter valid Password');
    } else {
      if(isValidEmail === '' && isValidNumber === ''){
        navigation.navigate('UserDetails');
      }
    }
  }

  return (
    <SafeAreaView>
      <HeaderBar />
      <Message
        message={
          'What is the email and phone number that we can reach you the best?'
        }
      />

      <TextFields
        placeholder={'Enter Email'}
        warrning={isValidEmail}
        onChangeText={val => {
          dispatch(UserEmail(val));
          IsEmailValid();
        }}
      />
      <TextFields
        placeholder={'Enter Phone No.'}
        warrning={isValidNumber}
        onChangeText={val => {
          dispatch(UserPhone(val));
          IsNumberValid();
        }}
      />

      <TouchableOpacity
        style={styles.container}
        onPress={() => {CheckValidation()}}>
        <SubmitBtn name={'NEXT'} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AuthScreen;
