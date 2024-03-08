import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ToastAndroid} from 'react-native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import {AuthState, SignIn, SignUp} from '../../types/Types';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

GoogleSignin.configure({
  webClientId:
    '577251364044-7kqqdtbio0420g24gburmmreheh8cadr.apps.googleusercontent.com',
  // webClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
});

export const Signup = createAsyncThunk(
  'auth/Signup',
  async ({displayName, email, password}: SignUp, {dispatch}) => {
    dispatch(setLoading(true));
    if (!displayName || !email || !password) {
      ToastAndroid.show('Please enter all fields', ToastAndroid.SHORT);
      return;
    }

    return await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth().currentUser?.updateProfile({
          displayName: displayName,
        });
        firestore().collection('user').doc(auth()?.currentUser?.uid).set({
          displayName: displayName,
          email: email,
          photoUrl: 'https://via.placeholder.com/52x52',
          uid: auth().currentUser?.uid,
        });
        dispatch(setLoading(false));
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          ToastAndroid.show(
            'That email address is already in use!',
            ToastAndroid.SHORT,
          );
        }
        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show(
            'That email address is invalid!',
            ToastAndroid.SHORT,
          );
        }
        dispatch(setLoading(false));
        ToastAndroid.show(error, ToastAndroid.SHORT);
      });
  },
);

export const Login = createAsyncThunk(
  'auth/Login',
  async ({email, password}: SignIn, {dispatch}) => {
    dispatch(setLoading(true));
    try {
      if (!email || !password) {
        throw new Error('Please enter all fields');
      }
      const userCredential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      const currentUser = userCredential?.user;

      if (currentUser) {
        dispatch(
          setUser({
            ...currentUser,
            displayName: currentUser?.displayName || '',
            email: currentUser?.email || '',
          }),
        );
      }
      ToastAndroid.show('User logged in!', ToastAndroid.SHORT);
    } catch (error: any) {
      dispatch(setError(error.message));
      throw new error();
    } finally {
      dispatch(setLoading(false));
    }
  },
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email: string, {dispatch}) => {
    if (!email) {
      ToastAndroid.show('Please enter your email address', ToastAndroid.SHORT);
    }
    await auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        ToastAndroid.show('Password reset email sent!', ToastAndroid.SHORT);
      })
      .catch(error => {
        let errorMessage =
          'An error occurred while sending the password reset email. Please try again.';
        if (error.code === 'auth/user-not-found') {
          errorMessage = 'That email address is not registered!';
        }
        ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
      });
  },
);

export const googleSignUp = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const userDoc = await firestore()
      .collection('user')
      .doc(auth()?.currentUser?.uid)
      .get();

    if (!userDoc.exists) {
      await firestore()
        .collection('user')
        .doc(auth()?.currentUser?.uid)
        .set({
          displayName: auth()?.currentUser?.displayName,
          email: auth()?.currentUser?.email,
          photoUrl: auth()?.currentUser?.photoURL || null,
          uid: auth()?.currentUser?.uid,
        });
      ToastAndroid.show('New user signed up successfully!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('User signed in successfully!', ToastAndroid.SHORT);
    }
  } catch (error) {
    console.log('error', error);
  }
};

export const LogOut = createAsyncThunk('auth/LogOut', () => async () => {
  await auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('User signed out!', ToastAndroid.SHORT);
    })
    .catch(error => {
      ToastAndroid.show(error.message, ToastAndroid.SHORT);
      ToastAndroid.show(
        'An error occurred while signing out. Please try again.',
        ToastAndroid.LONG,
      );
      console.log(
        'An error occurred while signing out. Please try again.',
        error,
      );
    });
});
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<FirebaseAuthTypes.User | null>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(Signup.pending, state => {
        state.isLoading = true;
      })
      .addCase(Signup.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(Signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Signup failed';
      })
      .addCase(Login.pending, state => {
        state.isLoading = true;
      })
      .addCase(Login.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(Login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Login failed';
      })
      .addCase(forgotPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(forgotPassword.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Forget Password failed';
      })
      .addCase(LogOut.pending, state => {
        state.isLoading = true;
      })
      .addCase(LogOut.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(LogOut.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Forget Password failed';
      });
  },
});

export const {setUser, setLoading, setError} = authSlice.actions;

export default authSlice.reducer;
