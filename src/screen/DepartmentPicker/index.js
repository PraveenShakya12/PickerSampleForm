import React from 'react';
import {SafeAreaView} from 'react-native';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import {useDispatch} from 'react-redux';
import {UserDepartmentNiches} from '../../redux/action/action';
import strings from '../../strings';

const DepartmentPicker = ({navigation}) => {
  const dispatch = useDispatch();

  const GoToBackScreen = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <HeaderBar GoToBackScreen={GoToBackScreen} screen={'Department'} />
      <Message message={strings.heading2} />

      <SubmitBtn
        name={'MARKETING'}
        onPress={() => {
          dispatch(UserDepartmentNiches('Marketing'));
          navigation.navigate('UserAuth');
        }}
      />
      <SubmitBtn
        name={'SALES'}
        onPress={() => {
          dispatch(UserDepartmentNiches('Sales'));
          navigation.navigate('UserAuth');
        }}
      />
      <SubmitBtn
        name={'DEVELOPMENT'}
        onPress={() => {
          dispatch(UserDepartmentNiches('Marketing'));
          navigation.navigate('UserAuth');
        }}
      />
    </SafeAreaView>
  );
};

export default DepartmentPicker;
