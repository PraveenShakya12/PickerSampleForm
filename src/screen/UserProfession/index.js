import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import DataModal from '../../components/DataModal';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import TextFields from '../../components/TextFields';
import {useDispatch, useSelector} from 'react-redux';
import {IsModalOpen} from '../../redux/action/action';
import {UserCompanyName, UserJobTitle} from '../../redux/action/action';
import strings from '../../strings';

const UserProfession = ({navigation}) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.user.modalOpen);
  const {CompanyName, jobTitle} = useSelector(state => state.user);

  const GoToBackScreen = () => {
    navigation.goBack();
  };

  const CheckValidation = () => {
    if (CompanyName !== '' && jobTitle !== '') {
      dispatch(IsModalOpen(!modalOpen));
    }
  };

  const ResetScreens = () => {
    // alert('hello')
    // navigation.navigate('Development');
  };

  return (
    <SafeAreaView>
      <HeaderBar GoToBackScreen={GoToBackScreen} screen={'UserProfession'} />
      <Message message={strings.heading5} />
      
      <TextFields
        placeholder={'Company Name'}
        defaultValue={CompanyName}
        onChangeText={val => {
          dispatch(UserCompanyName(val));
        }}
      />
      <TextFields
        placeholder={'Job Title'}
        defaultValue={jobTitle}
        onChangeText={val => {
          dispatch(UserJobTitle(val));
        }}
      />
      <SubmitBtn
        name={'REQUEST DEMO'}
        onPress={() => {
          CheckValidation();
        }}
      />
      <DataModal ResetScreens={ResetScreens}/>
      <Button
        title={'Goto Front'}
        onPress={() => {
          navigation.navigate('Development');
        }}
      />
    </SafeAreaView>
  );
};

export default UserProfession;
