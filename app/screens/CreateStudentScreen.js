import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import {
  Button,
  Text,
  Input,
  Item,
  Picker,
  Header,
  Left,
  Body,
  Right,
  Title,
  Icon
} from "native-base";
import { connect } from "react-redux";
import StudentActions from "../redux/student";

class CreateStudentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: 0, name: "", year: undefined, classs: undefined };
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {}

  submitStudent = () => {
    const { id, name, year, classs } = this.state;
    if (id && name && year && classs) {
      this.props.createStudent(id, name, parseInt(year), classs.toLowerCase());
    } else {
      alert("Fill in all the details!");
    }
  };

  onValueChangeYear(value) {
    this.setState({
      year: value
    });
  }

  onValueChangeClass(value) {
    this.setState({
      classs: value
    });
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <StatusBar backgroundColor="blue" barStyle="light-content" /> */}
        <Header style={{ backgroundColor: "#480273" }}>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" style={{ color: "white" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white" }}>New Student</Title>
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
          <Item regular style={{ marginVertical: 15 }}>
            <Input
              placeholder="Name"
              onChangeText={name => this.setState({ name })}
            />
          </Item>

          <Item regular style={{ width: "100%", marginVertical: 15 }}>
            <Picker
              mode="dropdown"
              placeholder="Select Year"
              note={false}
              selectedValue={this.state.year}
              onValueChange={this.onValueChangeYear.bind(this)}
            >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </Item>
          <Item regular style={{ width: "100%", marginVertical: 15 }}>
            <Picker
              mode="dropdown"
              placeholder="Select Class"
              note={false}
              selectedValue={this.state.classs}
              onValueChange={this.onValueChangeClass.bind(this)}
            >
              <Picker.Item label="Abba" value="Abba" />
              <Picker.Item label="Alch" value="Alch" />
              <Picker.Item label="Mogu" value="Mogu" />
              <Picker.Item label="Trea" value="Trea" />
              <Picker.Item label="Trax" value="Trax" />
            </Picker>
          </Item>
          <Button
            onPress={() => this.submitStudent()}
            style={{
              marginVertical: 15,
              alignSelf: "center",
              backgroundColor: "#480273"
            }}
          >
            <Text style={{ color: "white" }}>CREATE STUDENT</Text>
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
    createStudent: (id, name, year, classs) =>
      dispatch(StudentActions.createStudent(id, name, year, classs))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateStudentScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },

  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 30
  }
});
