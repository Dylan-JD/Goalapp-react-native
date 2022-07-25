import {StyleSheet, View, Text, Pressable } from 'react-native'; 

function GoalItem(props){
    return(
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} 
            onPress={props.onDeleteItem.bind(this, props.id)}
            style={({ pressed }) => pressed && styles.pressedItem}>
            <Text style={styles.goalContainer}> {props.text} </Text>
            </Pressable>
        </View>
    )
} // bind(this, props.id) get the id from props

export default GoalItem

const styles = StyleSheet.create({
    goalContainer:{
        flex: 4,
        padding: 8,
        color: 'white'
       },
    goalItem:{
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        },
    pressedItem:{
        flex: 4,
        padding: 8,
        color: 'red'
    }
})