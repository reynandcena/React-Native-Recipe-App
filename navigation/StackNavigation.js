import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";

//Screens
import Onboarding from '../Onboarding';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import ForgotPassword from '../screens/ForgotPassword';
import EmailConfirm from '../screens/EmailConfirm';
import CreateNewPassword from '../screens/CreateNewPassword';
import RecipeScreen from "../screens/RecipeScreen";
import CategoryScreen from "../screens/CategoryScreen";

const StackNavigation = () => {

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
            headerShown: false,
            }}
            initialRouteName="Onboarding"
        >
            
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Registration" component={Registration} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="EmailConfirm" component={EmailConfirm} />
            <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />

            <Stack.Screen name="Home" component={BottomTabNavigation} />
            <Stack.Screen name="RecipeScreen" component={RecipeScreen} />
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation