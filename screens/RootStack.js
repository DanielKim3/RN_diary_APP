import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTab from './MainTab';
import WriteScreen from './WriteScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="mainTab"
                component={MainTab}
                options={{headerShown: false}}
            />
            <Stack.Screen name="write" component={WriteScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}

export default RootStack;