import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authenticate } from '../../services/authenticationService';
import { setTokens } from '../../services/localStorage';
import { RootState } from '../../store';
import { history } from '../../helpers/history';
import { toast } from "../../components/ReusableToastMessage/ToastManager";


export interface IAuthentication {
  isProcessingRequest: boolean;
  accessToken?: string;
}
const initialState: IAuthentication = { isProcessingRequest: false };
export const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    start: (state) => {
      return {
        ...state,
        isProcessingRequest: true,
      };
    },
    success: (state, action: PayloadAction<any>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
    error: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        isProcessingRequest: false,
      };
    },
  },
});
export const authenticateUser = (userData: any) => async (dispatch: any) => {
  try {
    const authData = await authenticate(
     userData
    );
    setTokens(authData.data);
    dispatch(success(authData.data));
    toast.show({
      id: ' ',
      title: "Login successfull!",
      content: "Enjoy your browsing experience",
      duration: 10000,
    });
    history.push('/userslist');
  } catch (err) {
    dispatch(error("error"));
  }
};
export const { start, success, error } = authenticationSlice.actions;
export const selectAuthentication = (state: RootState) => state.authentication;
export const authenticationReducer = authenticationSlice.reducer;
