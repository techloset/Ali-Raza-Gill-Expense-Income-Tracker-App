import {useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {AuthRoutes} from '../../../navigation/stackNavigation/StackNavigation';
import {useAppDispatch} from '../../../store/hooks';
import {forgotPassword} from '../../../store/slices/authSlice';

type ForgotPasswordScreenNavigationProp = StackNavigationProp<
  AuthRoutes,
  'ForgotPassword'
>;
type Props = {
  navigation: ForgotPasswordScreenNavigationProp;
};

const useForgotPassword = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>('');
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const handleforgotPassword = async () => {
    try {
      await dispatch(forgotPassword(email));
      setIsDialogVisible(true);
      setEmail('');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Error sending password reset email', error);
    }
  };

  return {
    handleforgotPassword,
    email,
    setEmail,
    isDialogVisible,
    setIsDialogVisible,
  };
};

export default useForgotPassword;
