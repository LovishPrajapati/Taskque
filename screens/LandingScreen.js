import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import CategoryCard from '../components/CategoryCard';
import AddTaskFAB from '../components/AddTaskFAB';
import NameCard from '../components/NameCard';
import TaskCard from '../components/TaskCard';
import Header from '../components/Header';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-b96-14557e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-4551e29d72',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557e2d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd6-145571e2d72',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd9-145571e9d72',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455712972',
    title: 'Eight Item',
  },
];

function LandingScreen() {
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Header />
      </View>
      <View>
        <NameCard />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </ScrollView>
      </View>
      <View style={styles.todayTaskContainer}>
        <Text style={styles.todayTask}>TODAY'S TASKS</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        keyExtractor={item => item.id}
        renderItem={item => <TaskCard data={item.item.title} />}
      />
      <TouchableOpacity>
        <AddTaskFAB />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: '100%',
    paddingHorizontal: 18,
    backgroundColor: '#3450A1',
  },
  header: {
    marginTop: 20,
    marginHorizontal: 'auto',
    padding: 18,
  },
  todayTask: {
    color: '#C4C4C4',
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 16.41,
    letterSpacing: 0.15,
  },
  todayTaskContainer: {
    // marginLeft: 24,
    marginVertical: 18,
  },
});

export default LandingScreen;
