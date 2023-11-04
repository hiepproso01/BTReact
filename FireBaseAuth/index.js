/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { SignupScreen } from './screens/SignupScreen';
export { SignupScreen};
import { LoginScreen } from './screens/LoginScreen';
import { ForgotPasswordScreen } from './screens/ForgotPasswordScreen';

AppRegistry.registerComponent(appName, () => App);
// export { ForgotPasswordScreen ,LoginScreen, SignupScreen};