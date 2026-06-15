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
import { DancingScript_700Bold } from '@expo-google-fonts/dancing-script';
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
        { paddingTop: insets.top + 32, paddingBottom: insets.bottom + 28 },
      ]}
    >
      {/* Title */}
      <Text style={styles.title}>Bookit</Text>

      {/* Tagline */}
      <Text style={styles.subtitle}>
        Turn your reading list{'\n'}into a reading habit.
      </Text>

      {/* Value-prop trio */}
      <Text style={styles.perks}>Track · Streak · Discover</Text>

      {/* Illustration */}
      <View
        style={styles.illustrationWrapper}
        accessibilityRole="image"
        accessibilityLabel="Person reading comfortably in an armchair"
      >
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
        accessibilityLabel="Get Started Free"
      >
        <Text style={styles.buttonLabel}>Get Started Free</Text>
      </Pressable>

      {/* Footer */}
      <View style={styles.footerRow}>
        <Text style={styles.footer}>Already have an account? </Text>
        <Pressable
          onPress={() => {
            // TODO: navigate to sign-in screen
          }}
          style={styles.signInPressable}
          accessibilityRole="link"
          accessibilityLabel="Sign in"
        >
          <Text style={styles.signIn}>Sign in.</Text>
        </Pressable>
      </View>
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
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'PlayfairDisplay_700Bold',
    fontSize: 17,
    color: '#2C2C2C',
    textAlign: 'center',
    lineHeight: 26,
    letterSpacing: 0.2,
  },
  perks: {
    marginTop: 12,
    fontSize: 12,
    color: '#7A5430',
    letterSpacing: 2.5,
    textTransform: 'uppercase',
    textAlign: 'center',
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
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  footer: {
    fontSize: 14,
    color: '#666666',
    fontStyle: 'italic',
  },
  signInPressable: {
    paddingVertical: 8,
    paddingHorizontal: 2,
  },
  signIn: {
    fontSize: 14,
    color: '#7A5430',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});
