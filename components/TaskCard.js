import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Checkbox} from 'react-native-paper';

function TaskCard({data}) {
  const [checked, setChecked] = useState(false);

  return (
    <TouchableOpacity style={styles.root} onPress={() => setChecked(!checked)}>
      <Checkbox status={checked ? 'checked' : 'unchecked'} />
      <Text
        style={{
          ...styles.cardContent,
          textDecorationLine: checked ? 'line-through' : 'none',
        }}>
        {data}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#041A55',
    marginVertical: 9,
    height: 58,
    borderRadius: 10,
  },
  cardContent: {
    color: 'white',
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 14,
  },
});

export default TaskCard;
