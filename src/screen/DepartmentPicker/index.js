import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import styles from './styles';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import {useDispatch} from 'react-redux';
import { UserDepartmentNiches } from '../../redux/action/action';

const DepartmentPicker = ({navigation}) => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <HeaderBar />
      <Message message={'Great! What department do you work in ?'} />

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(UserDepartmentNiches('Marketing'))
          navigation.navigate('UserAuth');
        }}>
        <SubmitBtn name={'MARKETING'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(UserDepartmentNiches('Sales'))
          navigation.navigate('UserAuth');
        }}>
        <SubmitBtn name={'SALES'} />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          dispatch(UserDepartmentNiches('Marketing'))
          navigation.navigate('UserAuth');
        }}>
        <SubmitBtn name={'DEVELOPMENT'} />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default DepartmentPicker;
