import {ActionTypes} from '../constants/constants';

const initialState = {
  DevelopmentNiches: '',
  DepartmentNiches: '',
  Email: '',
  Phone: '',
  FirstName: '',
  LastName: '',
  CompanyName: '',
  jobTitle: '',
  modalOpen: false,
};

export const userReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ActionTypes.DEVELOPMENT_NICHES:
      console.log('DEVELOPMENT_NICHES: ----->', payload);
      return {
        ...state,
        DevelopmentNiches: payload,
      };

    case ActionTypes.DEPARTMENT_NICHES:
      console.log('DEPARTMENT_NICHES: ----->', payload);
      return {
        ...state,
        DepartmentNiches: payload,
      };

    case ActionTypes.EMAIL:
      console.log('EMAIL: ----->', payload);
      return {
        ...state,
        Email: payload,
      };

    case ActionTypes.PHONE:
      console.log('PHONE: ----->', payload);
      return {
        ...state,
        Phone: payload,
      };

    case ActionTypes.FIRST_NAME:
      console.log('FIRST_NAME: ----->', payload);
      return {
        ...state,
        FirstName: payload,
      };

    case ActionTypes.LAST_NAME:
      console.log('LAST_NAME: ----->', payload);
      return {
        ...state,
        LastName: payload,
      };

    case ActionTypes.COMPANY_NAME:
      console.log('COMPANY_NAME: ----->', payload);
      return {
        ...state,
        CompanyName: payload,
      };

    case ActionTypes.JOB_TITLE:
      console.log('JOB_TITLE: ----->', payload);
      return {
        ...state,
        jobTitle: payload,
      };

    case ActionTypes.IS_MODAL_OPEN:
      return {
        ...state,
        modalOpen: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
