import userEnums from "../enums/users.ts";
import appointmentsEnums from "../enums/appointments.ts";
import { IAppointment } from "../interfaces/IUser.ts";

export interface StartAddUserAction {
  type: typeof userEnums.ADD_USER;
}

export interface SuccessAddUserAction {
  type: typeof userEnums.ADD_USER_SUCCESS;
  payload: any;
}

export interface ErrorAddUserAction {
  type: typeof userEnums.ADD_USER_ERROR;
  error: string;
}

export interface StartRefreshToken {
  type: typeof userEnums.REFRESH_TOKEN;
}

export interface SuccessRefreshToken {
  type: typeof userEnums.REFRESH_TOKEN_SUCCESS;
  payload: any;
}

export interface ErrorRefreshToken {
  type: typeof userEnums.REFRESH_TOKEN_ERROR;
  error: string;
}

export interface StartLoginUserAction {
  type: typeof userEnums.LOGIN_USER;
}

export interface SuccessLoginUserAction {
  type: typeof userEnums.LOGIN_USER_SUCCESS;
  payload: any;
}

export interface ErrorLoginUserAction {
  type: typeof userEnums.LOGIN_USER_ERROR;
  error: string;
}

export interface StartGetAppointments  {
  type: typeof appointmentsEnums.GET_APPOINTMENT;
}

export interface SuccessGetAppointments {
  type: typeof appointmentsEnums.GET_APPOINTMENT_SUCCESS;
  payload: IAppointment[];
}

export interface ErrorGetAppointments {
  type: typeof appointmentsEnums.GET_APPOINTMENT_ERROR;
  error: string;
}