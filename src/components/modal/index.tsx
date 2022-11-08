import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native';
import React, { Dispatch } from 'react';
import { indexStyles as styles } from './styles';

interface Props {
  visible: boolean;
  toggleVisible: () => void;
  valueInput: string;
  setValueInput: Dispatch<React.SetStateAction<string>>;
  onPressOk: () => Promise<void>;
}

export const ModalInput = ({
  visible,
  valueInput,
  setValueInput,
  toggleVisible,
  onPressOk,
}: Props) => {
  const validateInput = valueInput.length === 11;

  return (
    <Modal transparent={true} visible={visible}>
      <View style={styles.containerfondo}>
        <View style={styles.subcontainer}>
          <Text style={styles.title}>Ingresa un token</Text>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder={'Token'}
              value={valueInput}
              style={styles.inputWidth}
              onChangeText={e => setValueInput(e)}
            />
          </View>

          <Text style={styles.errorMsg}>
            {validateInput || valueInput.length === 0
              ? ''
              : 'El token debe tener 11 caracteres'}
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={onPressOk}
              disabled={!validateInput}>
              <Text style={styles.textButton}>Agregar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={toggleVisible}>
              <Text style={styles.textButton}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
