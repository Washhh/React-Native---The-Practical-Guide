import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { Game, GameOver, StartGame } from './screens';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useMemo, useState } from 'react';
import Colors from './utils/colors';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
  });

  const [userNumber, setUserNumber] = useState(0);
  const [gameOverProps, setGameOverProps] = useState({
    visible: false,
    guesses: [0],
  });

  const currentScreen = useMemo(() => {
    if (gameOverProps.visible)
      return (
        <GameOver
          guesses={gameOverProps.guesses}
          userNumber={userNumber}
          resetGame={() => {
            setUserNumber(0);
            setGameOverProps({
              visible: false,
              guesses: [0],
            });
          }}
        />
      );
    if (userNumber)
      return (
        <Game
          userNumber={userNumber}
          onGameOver={(guesses: number[]) =>
            setGameOverProps({
              visible: true,
              guesses,
            })
          }
        />
      );
    return <StartGame setUserNumber={(number) => setUserNumber(number)} />;
  }, [userNumber, gameOverProps]);

  useEffect(() => {
    if (fontsLoaded) {
      const hideSplashScreen = async () => {
        await SplashScreen.hideAsync();
      };
      hideSplashScreen();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient
      colors={[Colors.primary500, Colors.secondary500]}
      style={styles.container}
    >
      <StatusBar style='auto' />
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.container}
        imageStyle={styles.ImageBackground}
        resizeMode='cover'
      >
        <SafeAreaView style={styles.container}>{currentScreen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
    opacity: 0.2,
  },
});
