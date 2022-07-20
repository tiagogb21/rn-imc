import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "../ResultImc/index";
import styles from "./style";

export default function Title() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(0);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / ((height * height) / 10000)).toFixed(2));
  }

  function validateImc() {
    if (weight !== 0 && height !== 0) {
      imcCalculator();
      setHeight(0);
      setWeight(0);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(0);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e a altura");
  }

  return (
    <View>
      <View style={styles.boxForm}>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Insira altura"
          keyboardType="numeric"
          style={styles.inputForm}
        ></TextInput>

        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Insira altura"
          keyboardType="numeric"
          style={styles.inputForm}
        ></TextInput>

        <Button title="Calcular IMC" onPress={() => validateImc()} />

        <ResultImc messageResultImc={messageImc} resultImc={imc} />
      </View>
    </View>
  );
}
