import {
  View,
  Text,
  Pressable,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  useFonts,
  PlayfairDisplay_700Bold,
} from '@expo-google-fonts/playfair-display';
import {
  DancingScript_700Bold,
} from '@expo-google-fonts/dancing-script';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import ReadingIllustration from '@/components/ReadingIllustration';

SplashScreen.preventAutoHideAsync();

export default function WelcomeScreen() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    PlayfairDisplay_700Bold,
    DancingScript_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + 32, paddingBottom: insets.bottom + 24 },
      ]}
    >
      {/* Title */}
      <Text style={styles.title}>Bookit</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>
        Track your reading. Challenge friends.{'\n'}Build the habit that sticks.
      </Text>

      {/* Illustration */}
      <View style={styles.illustrationWrapper}>
        <ReadingIllustration />
      </View>

      {/* CTA Button */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          { width: width * 0.72 },
          pressed && styles.buttonPressed,
        ]}
        onPress={() => {
          // TODO: navigate to sign-up screen
        }}
        accessibilityRole="button"
        accessibilityLabel="Join Now"
      >
        <Text style={styles.buttonLabel}>Join Now</Text>
      </Pressable>

      {/* Footer */}
      <Text style={styles.footer}>
        Already have an account?{' '}
        <Text
          style={styles.signIn}
          onPress={() => {
            // TODO: navigate to sign-in screen
          }}
          accessibilityRole="link"
        >
          Sign in.
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F0EB',
    alignItems: 'center',
    paddingHorizontal: 28,
  },

  /* ── Typography ─────────────────────────────── */
  title: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 52,
    color: '#3D2314',
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 14,
  },
  subtitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 15,
    color: '#2C2C2C',
    textAlign: 'center',
    lineHeight: 23,
    letterSpacing: 0.2,
    fontWeight: '400',
  },

  /* ── Illustration ───────────────────────────── */
  illustrationWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 200,
  },

  /* ── Button ─────────────────────────────────── */
  button: {
    backgroundColor: '#3D2314',
    borderRadius: 50,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: '#3D2314',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.975 }],
  },
  buttonLabel: {
    fontFamily: 'DancingScript_700Bold',
    fontSize: 26,
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },

  /* ── Footer ─────────────────────────────────── */
  footer: {
    marginTop: 18,
    fontSize: 13,
    color: '#666666',
    fontStyle: 'italic',
  },
  signIn: {
    color: '#8B6343',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
