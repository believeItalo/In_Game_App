import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(Dimensions.get('window').width);

  useEffect(() => {
    const handleDimensionsChange = ({ window }) => {
      setWindowWidth(window.width);
    };

    Dimensions.addEventListener('change', handleDimensionsChange);

    return () => {
     
    };
  }, []);

  const calculateResponsiveFontSize = (size) => {
    // Ajuste este fator conforme necessário
    const factor = 0.015;
    return windowWidth * factor + size;
  };

  return (
    <View style={styles.header}>
      <Text style={[styles.textInGame, { fontSize: calculateResponsiveFontSize(36) }]}>In Game</Text>
      <Image
        source={require('./imgs/logoAppInGame.png')}
        style={styles.icone}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icone: {
    height: 60,
    width: 70,
  },
  textInGame: {
    color: 'white',
  },
});

export default Header;
