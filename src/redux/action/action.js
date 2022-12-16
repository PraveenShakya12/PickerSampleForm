import {ActionTypes} from '../constants/constants';

export const UserDevelopmentNiches = val => ({
  type: ActionTypes.DEVELOPMENT_NICHES,
  payload: val,
});

export const UserDepartmentNiches = val => ({
  type: ActionTypes.DEPARTMENT_NICHES,
  payload: val,
});

export const UserEmail = val => ({
  type: ActionTypes.EMAIL,
  payload: val,
});

export const UserPhone = val => ({
  type: ActionTypes.PHONE,
  payload: val,
});

export const UserFirstName = val => ({
  type: ActionTypes.FIRST_NAME,
  payload: val,
});

export const UserLastName = val => ({
  type: ActionTypes.LAST_NAME,
  payload: val,
});

export const UserCompanyName = val => ({
  type: ActionTypes.COMPANY_NAME,
  payload: val,
});

export const UserJobTitle = val => ({
  type: ActionTypes.JOB_TITLE,
  payload: val,
});

export const IsModalOpen = val => ({
  type: ActionTypes.IS_MODAL_OPEN,
  payload: val,
});