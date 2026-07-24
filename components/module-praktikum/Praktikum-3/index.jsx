import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Praktikum3() {
  const personalData = {
    name: "Sudrajat",
    nim: 242310013,
    email: "242310013@student.ibik.ac.id",
    phone_number: "081234567890",
    address: "Bogor, Indonesia",
    isCommittee: true,
    hobbies: ["Astrophotography", "Gaming", "Networking"],
    organization: {
      club1: "Hima TI",
      club2: "Kesatuan English Club",
    },
  };

  const hobbiesString = personalData.hobbies.join(", ");
  const orgString = `${personalData.organization.club1}, ${personalData.organization.club2}`;

  return (
    <ImageBackground
      source={require("../../../assets/background/bg.jpg")}
      style={styles.bgContainer}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require("../../../assets/avatars/avatar.png")}
          style={styles.headers.img_avatar}
        />
        <Text style={styles.headers.title}>{personalData.name}</Text>
        <Text style={styles.headers.subtitle}>{personalData.nim}</Text>

        <View style={styles.identity.container}>
          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Phone</Text>
            <TextInput
              value={personalData.phone_number}
              style={styles.identity.input_text}
              keyboardType="numeric"
            />
          </View>

          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Email</Text>
            <TextInput
              value={personalData.email}
              style={styles.identity.input_text}
            />
          </View>

          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Address</Text>
            <TextInput
              value={personalData.address}
              style={styles.identity.input_text}
              multiline
            />
          </View>

          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Hobbies</Text>
            <TextInput
              value={hobbiesString}
              style={styles.identity.input_text}
            />
          </View>

          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Organizations</Text>
            <TextInput value={orgString} style={styles.identity.input_text} />
          </View>

          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Active Event Committee</Text>
            <TextInput
              value={personalData.isCommittee ? "Yes" : "No"}
              style={styles.identity.input_text}
            />
          </View>

          <View style={{ marginTop: 15 }}>
            <TouchableOpacity style={styles.identity.button}>
              <Text style={styles.identity.button_text}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bgContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.85)",
  },
  headers: {
    title: {
      fontWeight: "bold",
      fontSize: 30,
      marginTop: 10,
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "#9b9d9f",
    },
    img_avatar: {
      width: 150,
      height: 150,
      borderRadius: 100,
      borderColor: "#0996d7",
      borderWidth: 4,
      padding: 2,
      backgroundColor: "#f2f2f2",
    },
  },
  identity: {
    container: {
      alignSelf: "stretch",
      padding: 10,
      marginTop: 20,
    },
    card_input: {
      borderWidth: 1,
      borderColor: "#9b9d9f",
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginBottom: 10,
      backgroundColor: "#fff",
    },
    title: {
      color: "#9b9d9f",
      fontSize: 16,
      marginBottom: 0,
    },
    input_text: {
      color: "#000",
      fontSize: 16,
      padding: 0,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#0ea5e9",
      padding: 15,
      borderRadius: 10,
    },
    button_text: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
    },
  },
});
