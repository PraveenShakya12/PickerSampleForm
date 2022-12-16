import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DevelopmentPicker from '../screen/DevelopmentPicker';
import DepartmentPicker from '../screen/DepartmentPicker';
import UserAuth from '../screen/UserAuth';
import UserDetails from '../screen/UserDetails';
import UserProfession from '../screen/UserProfession';

const MainNavigator = () => {
  Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Development"
        component={DevelopmentPicker}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Department"
        component={DepartmentPicker}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserAuth"
        component={UserAuth}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UserProfession"
        component={UserProfession}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
