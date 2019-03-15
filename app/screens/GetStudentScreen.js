import React from "react";
import { StyleSheet, View } from "react-native";
import {
  Button,
  Text,
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

class GetStudentScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: undefined, classs: "" };
  }
  static navigationOptions = {
    header: null
  };

  componentDidMount() {}

  submitStudent = () => {
    const { year, classs } = this.state;
    if (year && classs) {
      this.props.getStudent(parseInt(year), classs.toLowerCase());
    } else {
      this.props.getStudentAll();
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
        <Header style={{ backgroundColor: "#A5F0CE" }}>
          <Left>
            <Button onPress={() => this.props.navigation.goBack()} transparent>
              <Icon name="arrow-back" style={{ color: "white" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "white" }}>Get Student</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.getStartedContainer}>
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
              backgroundColor: "#A5F0CE"
            }}
          >
            <Text style={{ color: "white" }}>GET STUDENT</Text>
          </Button>
        </View>
        <View>
          {this.props.studentList.length > 0 &&
            this.props.studentList.map(item => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#A5F0CE",
                  marginHorizontal: 10,
                  marginVertical: 5,
                  height: 30,
                  alignItems: "center",
                  borderRadius: 10,
                  paddingHorizontal: 15
                }}
              >
                <View style={{ flex: 0.7 }}>
                  <Text style={{ fontSize: 14 }}>{item.name}</Text>
                </View>
                <View
                  style={{ flex: 0.3, alignItems: "flex-end", opacity: 0.5 }}
                >
                  <Text style={{ fontSize: 14 }}>{item.id}</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  studentList: state.student.studentList
});

const mapDispatchToProps = dispatch => {
  return {
    getStudent: (year, classs) =>
      dispatch(StudentActions.getStudent(year, classs)),
    getStudentAll: () => dispatch(StudentActions.getStudentAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetStudentScreen);

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
