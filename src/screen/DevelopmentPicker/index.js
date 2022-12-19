import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import {useDispatch} from 'react-redux';
import {UserDevelopmentNiches} from '../../redux/action/action';
import strings from '../../strings';

const DevelopmentPicker = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <HeaderBar backToScreen={false} screen={'Development'} />
      <Message message={strings.heading1} />

      <SubmitBtn
        name={'APP DEVELOPMENT'}
        onPress={() => {
          dispatch(UserDevelopmentNiches('App Development'));
          navigation.navigate('Department');
        }}
      />
      <SubmitBtn
        name={'WEB DEVELOPMENT'}
        onPress={() => {
          dispatch(UserDevelopmentNiches('Web Development'));
          navigation.navigate('Department');
        }}
      />
      <SubmitBtn
        name={'BACKEND DEVELOPMENT'}
        onPress={() => {
          dispatch(UserDevelopmentNiches('Backend Development'));
          navigation.navigate('Department');
        }}
      />
    </SafeAreaView>
  );
};

export default DevelopmentPicker;
