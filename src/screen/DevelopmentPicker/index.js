import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import {useDispatch} from 'react-redux';
import styles from './styles';
import { UserDevelopmentNiches } from '../../redux/action/action';

const DevelopmentPicker = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <HeaderBar />
      <Message message={'Wellcome! 😊 What are you looking for ?'} />

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(UserDevelopmentNiches('App Development'))
          navigation.navigate('Department');
        }}>
        <SubmitBtn name={'APP DEVELOPMENT'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(UserDevelopmentNiches('Web Development'))
          navigation.navigate('Department');
        }}>
        <SubmitBtn name={'WEB DEVELOPMENT'} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(UserDevelopmentNiches('Backend Development'))
          navigation.navigate('Department');
        }}>
        <SubmitBtn name={'BACKEND DEVELOPMENT'} />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default DevelopmentPicker;
