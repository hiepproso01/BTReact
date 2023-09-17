import React from 'react';
import { BottomNavigation } from 'react-native-paper';
import BaiTapTH1 from "./src/BaiTap1";
import BaiTapTH2 from "./src/BaiTap2";
import BaiTapTH4 from "./src/BaiTap4";
import BaiTapTH3 from "./src/BaiTap3";
import BaiTapTH5 from "./src/BaiTap5";
import BaiTapTH6 from "./src/BaiTap6";
import BaiTapTH7 from "./src/BaiTap7";
import BaiTapTH8 from "./src/BaiTap8";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'bt1', title: 'BaiTapTH1', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'bt2', title: 'BaiTapTH2', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'bt3', title: 'BaiTapTH3', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'bt4', title: 'BaiTapTH4', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'bt5', title: 'BaiTapTH5', focusedIcon: 'book', unfocusedIcon: 'book-outline'},
    { key: 'bt6', title: 'BaiTapTH6', focusedIcon: 'book', unfocusedIcon: 'book-outline'},
    { key: 'bt7', title: 'BaiTapTH7', focusedIcon: 'book', unfocusedIcon: 'book-outline'},
    { key: 'bt8', title: 'BaiTapTH8', focusedIcon: 'book', unfocusedIcon: 'book-outline'},
 
  ]);

  const renderScene = BottomNavigation.SceneMap({
    bt1:  BaiTapTH1,
    bt2:  BaiTapTH2,
    bt3: BaiTapTH3,
    bt4: BaiTapTH4,
    bt5: BaiTapTH5,
    bt6: BaiTapTH6,
    bt7:BaiTapTH7,
    bt8:  BaiTapTH8,
  });

  return (
   
    <SafeAreaProvider>
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
    </SafeAreaProvider>
  );
};

export default App;