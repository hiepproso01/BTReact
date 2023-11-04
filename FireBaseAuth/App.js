// import React from 'react';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { ForgotPasswordScreen ,LoginScreen, SignupScreen} from './screens';
// import { AuthenticatedUserProvider } from './providers';
// import { RootNavigator } from './navigation/RootNavigator';
// function App(){
// return (
//     <AuthenticatedUserProvider>
//         <SafeAreaProvider>
//         <RootNavigator />
//         </SafeAreaProvider>
// </AuthenticatedUserProvider>
// );
// };
// export default App;
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthenticatedUserProvider } from './providers';
import { RootNavigator } from './navigation/RootNavigator';

import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

function App() {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
}

export default App;
