import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {
  UserDevelopmentNiches,
  UserDepartmentNiches,
  UserEmail,
  UserPhone,
  UserFirstName,
  UserLastName,
  UserCompanyName,
  UserJobTitle,
  IsModalOpen,
} from '../../redux/action/action';

const DataModal = props => {
  const ResetScreens = props.ResetScreens;

  const dispatch = useDispatch();
  const modalOpen = useSelector(state => state.user.modalOpen);
  const {
    DevelopmentNiches,
    DepartmentNiches,
    Email,
    Phone,
    FirstName,
    LastName,
    CompanyName,
    jobTitle,
  } = useSelector(state => state.user);

  const ResetData = () => {
    dispatch(UserDevelopmentNiches(''));
    dispatch(UserDepartmentNiches(''));
    dispatch(UserEmail(''));
    dispatch(UserPhone(''));
    dispatch(UserFirstName(''));
    dispatch(UserLastName(''));
    dispatch(UserCompanyName(''));
    dispatch(UserJobTitle(''));
    dispatch(IsModalOpen(!modalOpen));
    ResetScreens();
  };

  return (
    <Modal visible={modalOpen}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <Text style={styles.heading}>Data</Text>

          <View style={styles.txtBlock}>
            <Text>Product :- {DevelopmentNiches}</Text>
            <Text>Department :- {DepartmentNiches}</Text>
            <Text>Email :- {Email}</Text>
            <Text>Phone :- {Phone}</Text>
            <Text>
              Name :- {FirstName} {LastName}
            </Text>
            <Text>Company Name :- {CompanyName}</Text>
            <Text>Job Title :- {jobTitle}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              ResetData();
              // ResetScreens();
            }}>
            <Text style={styles.closeBtn}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DataModal;
