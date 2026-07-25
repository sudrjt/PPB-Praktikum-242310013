import { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const usersData = [
  {
    id: "1",
    nama: "Alya Putri",
    title: "Frontend Developer",
    departement: "Engineering",
    email: "alya.putri@example.com",
    gambar: "https://randomuser.me/api/portraits/women/44.jpg",
    portofolio: [
      {
        code: "FE001",
        nama: "UI Dashboard",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
      },
      {
        code: "FE002",
        nama: "Landing Page",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
      },
      {
        code: "FE003",
        nama: "Portfolio Site",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
      },
    ],
  },
  {
    id: "2",
    nama: "Budi Santoso",
    title: "Backend Developer",
    departement: "Engineering",
    email: "budi.santoso@example.com",
    gambar: "https://randomuser.me/api/portraits/men/32.jpg",
    portofolio: [
      {
        code: "BE001",
        nama: "API Server",
        image: "https://randomuser.me/api/portraits/men/33.jpg",
      },
      {
        code: "BE002",
        nama: "Database Design",
        image: "https://randomuser.me/api/portraits/men/34.jpg",
      },
    ],
  },
  {
    id: "3",
    nama: "Citra Lestari",
    title: "UI/UX Designer",
    departement: "Design",
    email: "citra.lestari@example.com",
    gambar: "https://randomuser.me/api/portraits/women/68.jpg",
    portofolio: [
      {
        code: "UX001",
        nama: "Mobile App Wireframe",
        image: "https://randomuser.me/api/portraits/women/69.jpg",
      },
    ],
  },
  {
    id: "4",
    nama: "Dedi Kurniawan",
    title: "DevOps Engineer",
    departement: "Infrastructure",
    email: "dedi.kurniawan@example.com",
    gambar: "https://randomuser.me/api/portraits/men/45.jpg",
    portofolio: [
      {
        code: "DO001",
        nama: "CI/CD Pipeline",
        image: "https://randomuser.me/api/portraits/men/46.jpg",
      },
    ],
  },
];

const UserListScreen = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.gambar }} style={styles.cardImage} />
      <Text style={styles.cardName}>{item.nama}</Text>
      <Text style={styles.cardText}>Title: {item.title}</Text>
      <Text style={styles.cardText}>Departement: {item.departement}</Text>
      <Text style={styles.cardText}>Email: {item.email}</Text>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.headerTitle}>List User</Text>
        <Text style={styles.headerSubtitle}>
          Total User: {usersData.length}
        </Text>
      </View>
      <FlatList
        data={usersData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const UserProfileScreen = ({ user }) => {
  const renderPortofolio = ({ item }) => (
    <View style={styles.portofolioItem}>
      <Image source={{ uri: item.image }} style={styles.portofolioImage} />
      <Text style={styles.portofolioTitle}>Nama: {item.nama}</Text>
      <Text style={styles.portofolioCode}>Code: {item.code}</Text>
    </View>
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.blueHeader}>
        <Text style={styles.blueHeaderText}>BACK</Text>
      </View>
      \
      <View style={styles.profileSection}>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{user.nama}</Text>
          <Text style={styles.profileInfoText}>Title: {user.title}</Text>
          <Text style={styles.profileInfoText}>
            Departement: {user.departement}
          </Text>
          <Text style={styles.profileInfoText}>Email: {user.email}</Text>
        </View>
        <Image source={{ uri: user.gambar }} style={styles.profileAvatar} />
      </View>
      <Text style={styles.sectionTitle}>Portofolio List</Text>
      <FlatList
        data={user.portofolio}
        renderItem={renderPortofolio}
        keyExtractor={(item) => item.code}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default function App() {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#f4f6f8" />

      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowProfile(!showProfile)}
      >
        <Text style={styles.toggleButtonText}>
          {showProfile
            ? "Lihat Halaman 1 (List User)"
            : "Lihat Halaman 2 (User Profile)"}
        </Text>
      </TouchableOpacity>

      {showProfile ? (
        <UserProfileScreen user={usersData[0]} />
      ) : (
        <UserListScreen />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f4f6f8",
  },
  screenContainer: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
  },
  flatListContent: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#b3dae5",
    borderRadius: 12,
    margin: 8,
    padding: 12,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardImage: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardName: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
    color: "#111",
  },
  cardText: {
    fontSize: 11,
    color: "#333",
    lineHeight: 16,
  },
  blueHeader: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 15,
  },
  blueHeaderText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  profileInfoText: {
    fontSize: 12,
    color: "#444",
    lineHeight: 18,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginBottom: 15,
    color: "#333",
  },
  portofolioItem: {
    flex: 1,
    alignItems: "center",
    marginVertical: 10,
  },
  portofolioImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  portofolioTitle: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  portofolioCode: {
    fontSize: 11,
    color: "#666",
    textAlign: "center",
  },
  toggleButton: {
    backgroundColor: "#333",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  toggleButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
