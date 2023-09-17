import React from "react";
import { SectionList, Text, View, StyleSheet, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  itemSeparator: { 
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(170, 170, 170)",
   
  },
});

const groupPeopleByLastName = (_data) => {
  const data = [..._data];
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();
    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }
    return accumulator;
  }, {});
  const sections = Object.keys(groupedData).map((key) => {
    return groupedData[key];
  });
  return sections.sort((a, b) => {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  });
};

const keyEx = (item) => {
  return item.name.first + item.name.last; 
};

const PEOPLE = [
  {
    name: {
      title: "Ms",
      first: "Maeva",
      last: "Scott",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaji",
    },
  },
  {
    name: {
      title: "Ms",
      first: "Maelle",
      last: "Henry",
    },
  },
];

export default BaiTapTH8 = () => {
  return (
    <SafeAreaView style={{
         top:'10%',
    }}>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)} 
        keyExtractor={keyEx}
        renderSectionHeader={({ section }) => {
          return (
            <View style={styles.sectionHeader}>
              <Text>{section.title}</Text>
            </View>
          );
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />} 
      />
    </SafeAreaView>
  );
};


