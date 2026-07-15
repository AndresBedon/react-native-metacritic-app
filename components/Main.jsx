import { useEffect, useState } from 'react';
import { ScrollView, View, Text, ActivityIndicator, FlatList } from 'react-native';

import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard, GameCard } from './GameCard';
import { Logo } from './Logo';
export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((data) => {
      setGames(data);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <View style={{ marginBottom: 20, alignItems: 'center' }}>
        <Logo />
      </View>
      {games.length === 0 ? (
        <ActivityIndicator size={'large'} />
      ) : (
        <FlatList
          data={games}
          renderItem={({ item, index }) => <AnimatedGameCard game={item} index={index} />}
          keyExtractor={(game) => game.slug}
        />
      )}
    </View>
  );
}
