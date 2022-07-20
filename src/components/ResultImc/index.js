import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function ResultImc(props) {
  return (
    <View style={styles.boxTitle}>
      <Text>{props.messageResultImc}</Text>
      <Text>{props.resultImc}</Text>
    </View>
  );
}
