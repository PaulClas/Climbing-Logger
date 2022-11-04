import * as React from 'react'
import { StyleSheet, SafeAreaView, View, Text, Button, Pressable, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SelectList from 'react-native-dropdown-select-list'
import { useState } from "react";
import CheckBox from '../../components/Checkbox/checkbox';
import SelectBox from 'react-native-multi-selectbox'
import { xorBy } from 'lodash'
import { BottomTabBarHeightCallbackContext } from '@react-navigation/bottom-tabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const K_OPTIONS =
    [
    {item: 'Gaspard Haas', id: 'GH',},
    {item: 'Alex Pycke', id: 'AP',},
    {item: 'Coralie Leblond-Chartrand', id: 'CLC',},
    {item: 'Matthieu William David Clas', id: 'MWDC',},
    {item: 'Andrée-Anne Harvey', id: 'AAH',}
    ]

export default function ClimbingTabScreen() {
    const [selected, setSelected] = React.useState("hello");
    const [initialArray, setInitialArray] = React.useState([]);
    const [topRope, setTopRope] = useState(false)
    const [lead, setLead] = useState(false)
    const [bouldering, setBouldering] = useState(false)
    const [selectedTeam, setSelectedTeam] = useState({})
    const [selectedTeams, setSelectedTeams] = useState([])
    const onSelectedItemsChange = (selectedItems) => {
        // Set Selected Items
        setSelectedItems(selectedItems);
    };
    const onAddItem = (selectedItems) => {
        // Set Selected Items
        setInitialArray([...initialArray, selectedItems]);
    };
    const data1 =[
        {key:"1", value:"Zero Gravité"},
        {key:"2", value:"Bloc Shop Hochelaga"},
        {key:"3", value:"Bloc Shop Chabanel"},
        {key:"4", value:"Allez Up"},
        {key:"4", value:"Café Bloc"},
    ];
    const data2 =[
        {key:"1", value:"Alex Pycke"},
        {key:"2", value:"Andrée-Anne Harvey"},
        {key:"3", value:"Matthieu Clas"},
        {key:"4", value:"Coralie Leblond-Chartrand"},
        {key:"4", value:"Gaspard Haas"},
    ];
    return (
        <View>
            <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20,paddingVertical:10 }}>New climbing session</Text>
            <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20,paddingVertical:10}}>Gym</Text>
            <KeyboardAwareScrollView>
                <SelectList 
                setSelected={setSelected} 
                    data={data1}
                    // onSelect={() => alert(selected)}
                    placeholder="Select a gym"
                    boxStyles={{backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20, marginVertical: 10, padding: 10}}
                    dropdownStyles={{backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20}}
                />
            </KeyboardAwareScrollView>
            {/* <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20, paddingVertical:10 }}>Partner</Text>
            <SelectList 
                setSelected={setSelected} 
                data={data2} 
                // onSelect={() => alert(selected)}
                placeholder="Select a climbing partner"
                boxStyles={{backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20, marginVertical: 10, padding: 10}}
                dropdownStyles={{backgroundColor: 'white', borderRadius: 10, marginHorizontal: 20}}
            /> */}
            <SelectBox
                options={K_OPTIONS}
                label="Partners"
                inputPlaceholder="Select partners"
                emptyMessage="No partners found"
                selectedValues={selectedTeams}
                onMultiSelect={onMultiChange()}
                onTapClose={onMultiChange()}
                isMulti
                width={350}
                arrowIconColor={'lightgrey'}
                searchIconColor={'red'}
                toggleIconColor={'red'}
                containerStyle={{ 
                    backgroundColor: 'white',
                    borderRadius: 10,
                    height: 50, 
                    marginHorizontal: 20, 
                    marginVertical: 10, 
                    padding: 20,
                    alignItems: 'center',}}
                multiOptionContainerStyle={{
                    //this is the style for the multi select items that are sekected
                    backgroundColor: '#1E90FF', borderRadius: 10}}
                multiOptionsLabelStyle={{
                    fontWeight: 'bold'
                    // this is the labelStyle inside the multiOptionContainerStyle
                    // label is the text of the chosen options
                }}
                multiListEmptyLabelStyle={{
                    //backgroundColor: 'purple',
                    
                }}
                optionContainerStyle={{
                    backgroundColor: 'white',
                    width: 350,
                    paddingVertical: 5,
                    paddingRight: 50,
                    borderColor: 'lightgrey',
                    paddingHorizontal: 20,
                    marginLeft:30,
                }}
                labelStyle={{
                    // this is the labelStyle inside the optionContainerStyle
                    // This is the title for the section, so shoudl be Partners in this case
                    fontSize: 18, 
                    fontWeight: '600', 
                    paddingHorizontal: 20, 
                    paddingVertical:20,
                    color: 'black',

                }}
                inputFilterContainerStyle={{
                    //this is the style for the search bar
                    backgroundColor: 'white',
                    marginLeft:30,
                    paddingLeft:20,
                    paddingRight: 50,
                }}
                inputFilterStyle={{
                    // this is the style for the search bar field
                    backgroundColor: 'white',
                }}
            />
            <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 20, paddingVertical:20 }}>Climbing Type</Text>
            <View
                style={{
                    flexDirection: "row",
                    paddingBottom: 10,
                    paddingTop:10
                }}
            >
                <CheckBox
                    onPress={() => setTopRope(!topRope)}
                    title="Top Rope"
                    isChecked={topRope}
                />
                <CheckBox
                    onPress={() => setLead(!lead)}
                    title="Lead"
                    isChecked={lead}
                />
                <CheckBox
                    onPress={() => setBouldering(!bouldering)}
                    title="Bouldering"
                    isChecked={bouldering}
            />
            </View>
            <View>
                <Pressable style={styles.button} onPress={() => Alert.alert('Simple Button pressed')}>
                    <Text style={styles.text}>Start a climbing session</Text>
                </Pressable>
            </View>
        </View>
    );
    function onMultiChange() {
        return (item) => setSelectedTeams(xorBy(selectedTeams, [item], 'id'))
      }
    
      function onChange() {
        return (val) => setSelectedTeam(val)
      }
}

const styles = StyleSheet.create({
    button: {
    alignItems: 'center',
    justifyContent: 'center',
    margin:30,
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    },
    text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    },
  });