import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {UserData} from '../../types/Types';

export interface CounterState {
  user: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: CounterState = {
  user: null,
  loading: false,
  error: '',
};

export const getUserData = createAsyncThunk<UserData | null>(
  'currentUser/getUserData',
  async () => {
    try {
      const id = auth()?.currentUser?.uid;
      const userDoc = await firestore().collection('user').doc(id).get();
      return userDoc.data() as UserData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw new Error('An error occurred while fetching user data');
    }
  },
);

export const listenToUserData = createAsyncThunk<UserData | null>(
  'currentUser/listenToUserData',
  async (_, {dispatch}) => {
    try {
      const id = auth()?.currentUser?.uid;
      const userRef = firestore().collection('Users').doc(id);

      const userDoc = await userRef.get();
      const userData = userDoc.data() as UserData;

      userRef.onSnapshot(snapshot => {
        const updatedUserData = snapshot.data() as UserData;
        dispatch(userDataUpdated(updatedUserData));
      });

      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw new Error('An error occurred while fetching user data');
    }
  },
);

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    userDataUpdated: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUserData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        getUserData.fulfilled,
        (state, action: PayloadAction<UserData | null>) => {
          state.loading = false;
          state.error = null;
          state.user = action.payload;
        },
      )
      .addCase(getUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
          ? action.payload.toString()
          : 'An error occurred';
        state.user = null;
      });
  },
});

export const {userDataUpdated} = currentUserSlice.actions;

export default currentUserSlice.reducer;
