import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const COLORS = {
  purple: '#3B1370',
  purpleLight: '#8B7BD8',
  purpleSoft: '#B9A9F2',
  card: '#BFD7F2',
  wallet: '#5B2A9D',
  cash: '#7FD9B9',
  coin: '#F0B49A',
  coinDark: '#D98E86',
  gold: '#F5B942',
  pink: '#F2A6C4',
  teal: '#4FC3D9',
  gray: '#F3F4F6',
  textDark: '#1F1F27',
};

function Decoration({ style, children }) {
  return <View style={[styles.decoration, style]}>{children}</View>;
}

export function DeUna() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text style={styles.logo}>deuna!</Text>

      <View style={styles.illustration}>
        <Decoration
          style={{ top: 4, left: 24, backgroundColor: COLORS.pink, width: 14, height: 14 }}
        />
        <Decoration
          style={{ top: 12, right: 30, backgroundColor: COLORS.gold, width: 10, height: 10 }}
        />
        <Decoration
          style={{ bottom: 60, left: 6, backgroundColor: COLORS.gold, width: 12, height: 12 }}
        />
        <Decoration
          style={{ bottom: 10, right: 40, backgroundColor: COLORS.teal, width: 10, height: 10 }}
        />
        <Decoration
          style={{
            top: 60,
            right: 4,
            backgroundColor: COLORS.coinDark,
            width: 34,
            height: 34,
            borderRadius: 17,
          }}
        />
        <Decoration
          style={{
            bottom: 40,
            left: 40,
            backgroundColor: COLORS.coin,
            width: 26,
            height: 26,
            borderRadius: 13,
          }}
        />

        <View style={[styles.card, styles.cardBack, { backgroundColor: COLORS.card }]}>
          <View style={styles.cardStripe} />
        </View>
        <View style={[styles.card, styles.cardMiddle, { backgroundColor: COLORS.wallet }]} />
        <View style={[styles.card, styles.cardFront, { backgroundColor: COLORS.cash }]} />

        <View style={styles.checkBadge}>
          <Ionicons name="checkmark" size={16} color="#fff" />
        </View>
      </View>

      <Text style={styles.welcome}>Te damos la bienvenida a Deuna</Text>

      <View style={styles.spacer} />

      <View style={styles.actionsRow}>
        <TouchableOpacity style={styles.actionItem} activeOpacity={0.7}>
          <View style={styles.actionIcon}>
            <Ionicons name="train-outline" size={30} color={COLORS.textDark} />
          </View>
          <Text style={styles.actionLabel}>Metro UIO</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionItem} activeOpacity={0.7}>
          <View style={styles.actionIcon}>
            <Ionicons name="qr-code-outline" size={30} color={COLORS.purple} />
          </View>
          <Text style={styles.actionLabel}>Escanear QR</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.mainButton} activeOpacity={0.85}>
        <Text style={styles.mainButtonText}>Ingresar a Deuna</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 40,
    fontWeight: '800',
    fontStyle: 'italic',
    color: COLORS.purple,
    textAlign: 'center',
    marginTop: 16,
  },
  illustration: {
    height: 220,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  decoration: {
    position: 'absolute',
    borderRadius: 4,
  },
  card: {
    position: 'absolute',
    width: 150,
    height: 90,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  cardBack: {
    top: 20,
    transform: [{ rotate: '-8deg' }],
  },
  cardStripe: {
    marginTop: 20,
    marginHorizontal: 16,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
  cardMiddle: {
    top: 55,
    height: 70,
    transform: [{ rotate: '4deg' }],
  },
  cardFront: {
    top: 95,
    height: 55,
    borderRadius: 10,
    transform: [{ rotate: '-3deg' }],
  },
  checkBadge: {
    position: 'absolute',
    top: 18,
    right: 60,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.teal,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.textDark,
    textAlign: 'center',
    marginTop: 20,
  },
  spacer: {
    flex: 1,
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 48,
    marginBottom: 24,
  },
  actionItem: {
    alignItems: 'center',
  },
  actionIcon: {
    width: 68,
    height: 68,
    borderRadius: 18,
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionLabel: {
    fontSize: 13,
    color: COLORS.textDark,
    fontWeight: '500',
  },
  mainButton: {
    backgroundColor: COLORS.purple,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
  },
  mainButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
