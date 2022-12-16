import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import TextFields from '../../components/TextFields';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {UserFirstName, UserLastName} from '../../redux/action/action';

const UserDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const {FirstName, LastName} = useSelector(state => state.user);

  const CheckValidation = () => {
    if(FirstName !== '' && LastName !== ''){
      navigation.navigate('UserProfession');
    }
  }

  return (
    <SafeAreaView>
      <HeaderBar />
      <Message message={'Could you tell us a bit more about yourself?'} />

      <TextFields
        placeholder={'First Name'}
        onChangeText={val => {
          dispatch(UserFirstName(val));
        }}
      />
      <TextFields
        placeholder={'Last Name'}
        onChangeText={val => {
          dispatch(UserLastName(val));
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

export default UserDetails;
