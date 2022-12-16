import React from 'react';
import {SafeAreaView, Button, TouchableOpacity} from 'react-native';
import DataModal from '../../components/DataModal';
import HeaderBar from '../../components/HeaderBar';
import Message from '../../components/Message';
import SubmitBtn from '../../components/SubmitBtn';
import TextFields from '../../components/TextFields';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {IsModalOpen} from '../../redux/action/action';
import {UserCompanyName, UserJobTitle} from '../../redux/action/action';

const ClearData = () => {
  alert('helloo');
};

const UserProfession = ({navigation}) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.user.modalOpen);
  const {CompanyName, jobTitle} = useSelector(state => state.user);

  const CheckValidation = () => {
    if(CompanyName !== '' && jobTitle !== ''){
      dispatch(IsModalOpen(!modalOpen));
    }
  }

  return (
    <SafeAreaView>
      <HeaderBar />
      <Message message={'Thanks! Just a few more details and we are done!'} />
      <TextFields
        placeholder={'Company Name'}
        onChangeText={val => {
          dispatch(UserCompanyName(val));
        }}
      />
      <TextFields
        placeholder={'Job Title'}
        onChangeText={val => {
          dispatch(UserJobTitle(val));
        }}
      />

      <TouchableOpacity
        style={styles.container}
        onPress={() => {CheckValidation()}}>
        <SubmitBtn name={'REQUEST DEMO'} />
      </TouchableOpacity>

      <DataModal removeData={ClearData} />

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
