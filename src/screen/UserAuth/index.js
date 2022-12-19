import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import TextFields from '../../components/TextFields';
import {useDispatch, useSelector} from 'react-redux';
import {UserEmail, UserPhone} from '../../redux/action/action';
import {ValidateEmail, ValidateNumber} from '../../utils';
import strings from '../../strings';

const AuthScreen = ({navigation}) => {
  const [isValidEmail, setIsValidEmail] = useState('');
  const [isValidNumber, setIsValidNumber] = useState('');

  const dispatch = useDispatch();
  const {Email, Phone} = useSelector(state => state.user);

  const GoToBackScreen = () => {
    navigation.goBack();
  };

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
    if (Email === '' && Phone === '') {
      setIsValidEmail('Enter valid Email');
      setIsValidNumber('Enter valid Password');
    } else {
      if (isValidEmail === '' && isValidNumber === '') {
        navigation.navigate('UserDetails');
      }
    }
  };

  return (
    <SafeAreaView>
      <HeaderBar GoToBackScreen={GoToBackScreen} screen={'UserAuth'} />
      <Message message={strings.heading3} />

      <TextFields
        placeholder={'Enter Email'}
        warrning={isValidEmail}
        defaultValue={Email}
        onChangeText={val => {
          dispatch(UserEmail(val));
          IsEmailValid();
        }}
      />
      <TextFields
        placeholder={'Enter Phone No.'}
        warrning={isValidNumber}
        defaultValue={Phone}
        onChangeText={val => {
          dispatch(UserPhone(val));
          IsNumberValid();
        }}
      />
      <SubmitBtn
        name={'NEXT'}
        onPress={() => {
          CheckValidation();
        }}
      />
    </SafeAreaView>
  );
};

export default AuthScreen;
