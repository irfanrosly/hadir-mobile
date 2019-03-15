import React from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Toast
} from "native-base";

class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = { username: "username", password: "password" };
  }

  checkLogin = () => {
    const { username, password } = this.state;
    if (username === "username" && password === "password") {
      Toast.show({
        text: "Login successful!",
        buttonText: "Okay"
      });
      this.props.navigation.navigate("Main");
    } else if (username !== "username") {
      Toast.show({
        text: "Wrong username!",
        buttonText: "Okay"
      });
    } else {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay"
      });
    }
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: "center", flex: 1 }}>
          <Form
            style={{
              marginHorizontal: 20
            }}
          >
            <Item style={{ marginLeft: 0 }} floatingLabel>
              <Label>Username</Label>
              <Input
                autoCapitalize="none"
                defaultValue="username"
                onChangeText={username =>
                  this.setState({
                    username
                  })
                }
              />
            </Item>
            <Item style={{ marginLeft: 0 }} floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                defaultValue="password"
                autoCapitalize="none"
                onChangeText={password =>
                  this.setState({
                    password
                  })
                }
              />
            </Item>
          </Form>

          <Button
            block
            dark
            style={{ marginVertical: 15, marginHorizontal: 15 }}
            onPress={() => this.checkLogin()}
          >
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default LoginScreen;
