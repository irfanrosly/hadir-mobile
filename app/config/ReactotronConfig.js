import Reactotron from "reactotron-react-native";
import { reactotronRedux } from "reactotron-redux";
import Immutable from "seamless-immutable";

const reactotron = Reactotron.configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .configure({ name: "Treker Mobile" })
  .use(reactotronRedux({ onRestore: Immutable }))
  .connect(); // let's connect!

  
export default reactotron;
