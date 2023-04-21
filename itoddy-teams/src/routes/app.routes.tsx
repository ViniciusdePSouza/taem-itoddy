import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const { Navigator, Screen } = createNativeStackNavigator()

import { Groups } from '@screens/Groups'
import { NewGroup } from '@screens/NewGroup'
import { Players } from '@screens/Players'

export function AppRoutes() {
    return (
        <Navigator>
            <Screen
            name='groups'
            component={Groups}
            />  
            <Screen
            name='new'
            component={NewGroup}
            />  
            <Screen
            name='players'
            component={Players}
            />  


        </Navigator>
    )
}