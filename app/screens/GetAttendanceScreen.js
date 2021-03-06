import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import moment from "moment";
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
  Icon,
  DatePicker
} from "native-base";
import { connect } from "react-redux";
import AttendanceActions from "../redux/attendance";

class GetAttendanceScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { year: undefined, classs: "", chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  static navigationOptions = {
    header: null
  };

  submitAttendance = () => {
    const { year, classs, chosenDate } = this.state;
    if (year && classs && chosenDate) {
      this.props.getAttendance(
        moment(chosenDate).format("YYYYMMDD"),
        parseInt(year),
        classs.toLowerCase()
      );
    } else {
      alert("Fill all the details!");
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

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header style={{ backgroundColor: "#3FB48A" }}>
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
            {Platform.OS === "android" ? (
              <Picker
                mode="dropdown"
                placeholder="Select Year"
                note={false}
                selectedValue={this.state.year}
                onValueChange={this.onValueChangeYear.bind(this)}
              >
                <Picker.Item label="Select Year" value="" />
                <Picker.Item label="1" value="1" />
                <Picker.Item label="2" value="2" />
                <Picker.Item label="3" value="3" />
                <Picker.Item label="4" value="4" />
                <Picker.Item label="5" value="5" />
                <Picker.Item label="6" value="6" />
              </Picker>
            ) : (
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
            )}
          </Item>
          <Item regular style={{ width: "100%", marginVertical: 15 }}>
            {Platform.OS === "android" ? (
              <Picker
                mode="dropdown"
                placeholder="Select Class"
                note={false}
                selectedValue={this.state.classs}
                onValueChange={this.onValueChangeClass.bind(this)}
              >
                <Picker.Item label="Select Class" value="" />
                <Picker.Item label="Abba" value="Abba" />
                <Picker.Item label="Alch" value="Alch" />
                <Picker.Item label="Mogu" value="Mogu" />
                <Picker.Item label="Trea" value="Trea" />
                <Picker.Item label="Trax" value="Trax" />
              </Picker>
            ) : (
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
            )}
          </Item>
          <Item regular style={{ width: "100%", marginVertical: 15 }}>
            <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2020, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select date"
              textStyle={{ color: "green" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={this.setDate}
              disabled={false}
              style={{ width: "100%" }}
            />
          </Item>
          {/* <Text>{this.state.chosenDate}</Text> */}
          <Button
            onPress={() => this.submitAttendance()}
            style={{
              marginVertical: 15,
              alignSelf: "center",
              backgroundColor: "#3FB48A"
            }}
          >
            <Text style={{ color: "white" }}>GET ATTENDANCE</Text>
          </Button>
        </View>
        <View>
          {this.props.attendanceList.length > 0 &&
            this.props.attendanceList.map(item => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#3FB48A",
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
  attendanceList: state.attendance.attendanceList
});

const mapDispatchToProps = dispatch => {
  return {
    getAttendance: (date, year, classs) =>
      dispatch(AttendanceActions.getAttendance(date, year, classs))
    // getStudentAll: () => dispatch(StudentActions.getStudentAll())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetAttendanceScreen);

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
