import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Text,
  Input,
  Item,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon
} from "native-base";
import { connect } from "react-redux";
import AttendanceActions from "../redux/attendance";

class CreateAttendanceScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = { id: 0 };
  }

  submitAttendance = () => {
    const { id } = this.state;
    this.props.createAttendance(id);
  };

  render() {
    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: "#6F0C94" }}>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" style={{ color: "white" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white" }}>New Attendance</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.getStartedContainer}>
          <Item regular style={{ marginVertical: 15 }}>
            <Input
              placeholder="ID"
              onChangeText={id => this.setState({ id })}
            />
          </Item>

          <Button
            onPress={() => this.submitAttendance()}
            style={{
              marginVertical: 15,
              alignSelf: "center",
              backgroundColor: "#6F0C94"
            }}
          >
            <Text style={{ color: "white" }}>REGISTER ATTENDANCE</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  testing: state.playground.text
});

const mapDispatchToProps = dispatch => {
  return {
    createAttendance: id => dispatch(AttendanceActions.createAttendance(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAttendanceScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  getStartedContainer: {
    alignItems: "center",
    paddingHorizontal: 30
  }
});
