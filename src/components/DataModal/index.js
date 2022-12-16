import React from 'react';
import {Text, View, Modal, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {IsModalOpen} from '../../redux/action/action';

const DataModal = () => {
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

  return (
    <Modal visible={modalOpen}>
      <View style={styles.container}>
        <View style={styles.modalBox}>
          <Text style={styles.heading}>Data</Text>

          <View style={styles.txtBlock}>
            <Text style={styles.userDetails}>
              Product :- {DevelopmentNiches}
            </Text>
            <Text style={styles.userDetails}>
              Department :- {DepartmentNiches}
            </Text>
            <Text style={styles.userDetails}>Email :- {Email}</Text>
            <Text style={styles.userDetails}>Phone :- {Phone}</Text>
            <Text style={styles.userDetails}>
              Name :- {FirstName} {LastName}
            </Text>
            <Text style={styles.userDetails}>
              Company Name :- {CompanyName}
            </Text>
            <Text style={styles.userDetails}>Job Title :- {jobTitle}</Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              dispatch(IsModalOpen(!modalOpen));
            }}>
            <Text style={styles.closeBtn}>CLOSE</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default DataModal;
