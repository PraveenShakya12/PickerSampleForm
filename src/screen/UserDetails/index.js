import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import TextFields from '../../components/TextFields';
import {useDispatch, useSelector} from 'react-redux';
import {UserFirstName, UserLastName} from '../../redux/action/action';
import strings from '../../strings';

const UserDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const {FirstName, LastName} = useSelector(state => state.user);

  const GoToBackScreen = () => {
    navigation.goBack();
  };

  const CheckValidation = () => {
    if (FirstName !== '' && LastName !== '') {
      navigation.navigate('UserProfession');
    }
  };

  return (
    <SafeAreaView>
      <HeaderBar GoToBackScreen={GoToBackScreen} screen={'UserDetails'} />
      <Message message={strings.heading4} />

      <TextFields
        placeholder={'First Name'}
        defaultValue={FirstName}
        onChangeText={val => {
          dispatch(UserFirstName(val));
        }}
      />
      <TextFields
        placeholder={'Last Name'}
        defaultValue={LastName}
        onChangeText={val => {
          dispatch(UserLastName(val));
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

export default UserDetails;
