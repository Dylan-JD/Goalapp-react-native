 import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';
 import { useState } from 'react'
 import GoalItem from './components/GoalItem';
 import GoalInput from './components/GoalInput';
 import { StatusBar } from 'expo-status-bar';

 export default function App() {
  const [modalIsVisable, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler(){
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals, {text: enteredGoalText, id: Math.random().toString()}]);
  };

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals =>{
      return currentCourseGoals.filter((goal) => goal.id !== id); //when filter return false, the item would be delete
    })
    console.log('DELETE');
  }


   return (
    <>
     <StatusBar style='light'/>
     <View style={styles.appContainer}>
         <Button title='Add New Goal' color='#600dcc' onPress={startAddGoalHandler}/>
         <GoalInput visible={modalIsVisable} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
          <FlatList data={courseGoals} renderItem={(itemData)=>{
            return(<GoalItem text={itemData.item.text}
              id={itemData.item.id}
              onDeleteItem={deleteGoalHandler}/>);
            }} />
     </View>
     </>
   ); // IF modalIsVisable is True, then run GoalInput
 }

 const styles = StyleSheet.create({
   appContainer: {
     flex: 1,
     paddingTop: 50,
     paddingHorizontal: 16,
   },
 });