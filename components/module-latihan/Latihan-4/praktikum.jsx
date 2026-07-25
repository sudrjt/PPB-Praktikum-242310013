import { useState } from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ListBook } from "../../../constants/list_books";
import BookCollections from "./components/BookCollections";
import Categoriesnav from "./components/Categories";
import CTABook from "./components/CTABook";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import { color_list, styles } from "./styles/StyleApps";

export default function HomeScreen() {
  const lastBook = ListBook[ListBook.length - 1];
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const filteredBooks = ListBook.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} />

      {isSearchActive ? (
        <>
          <SearchBar
            onClose={() => {
              setIsSearchActive(false);
              setSearchQuery("");
            }}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <ScrollView showsVerticalScrollIndicator={false}>
            <BookCollections books={filteredBooks} />
          </ScrollView>
        </>
      ) : (
        <>
          <Header onSearchClick={() => setIsSearchActive(true)} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          >
            <View style={{ flex: 1 }}>
              <CTABook book={lastBook} />
              <Categoriesnav />
              <BookCollections books={ListBook} />
            </View>

            <View>
              <Text style={{ color: color_list.green }}>
                &copy; 2026 Sudrajat
              </Text>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
