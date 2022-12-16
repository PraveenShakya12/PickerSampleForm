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
      return {
        ...state,
        DevelopmentNiches: payload,
      };

    case ActionTypes.DEPARTMENT_NICHES:
      return {
        ...state,
        DepartmentNiches: payload,
      };

    case ActionTypes.EMAIL:
      return {
        ...state,
        Email: payload,
      };

    case ActionTypes.PHONE:
      return {
        ...state,
        Phone: payload,
      };

    case ActionTypes.FIRST_NAME:
      return {
        ...state,
        FirstName: payload,
      };

    case ActionTypes.LAST_NAME:
      return {
        ...state,
        LastName: payload,
      };

    case ActionTypes.COMPANY_NAME:
      return {
        ...state,
        CompanyName: payload,
      };

    case ActionTypes.JOB_TITLE:
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
