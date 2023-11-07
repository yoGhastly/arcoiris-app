import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface DataListProps {
  columns: string[];
  rows: string[][];
  onDelete: (rowIndex: number) => void;
}

const DataList: React.FC<DataListProps> = ({ columns, rows, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {columns.map((column, index) => (
          <Text key={index} style={styles.columnHeader}>
            {column}
          </Text>
        ))}
      </View>
      {rows.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((item, columnIndex) => (
            <Text key={columnIndex} style={styles.cell}>
              {item}
            </Text>
          ))}
          <TouchableOpacity onPress={() => onDelete(rowIndex)}>
            <FontAwesome name="trash" color="#FF3E83" size={16} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  columnHeader: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#fff",
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    padding: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: "#fff",
  },
});

export default DataList;