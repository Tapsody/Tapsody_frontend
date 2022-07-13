import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
import { SignIn } from "../screens/signin"
import { SignUp } from "../screens/signup"


const screens = {
    Home: {
        screen: SignIn
    },
    SignUp: {
        screen: SignUp
    },
}
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);