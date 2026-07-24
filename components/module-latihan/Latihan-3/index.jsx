import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Latihan3() {
  const personalData = {
    name: "Anton Sukamto",
    nim: "20200101",
    address:
      "Jl. Rangga Gading No.01, Gudang, Kecamatan Bogor Tengah, Kota Bogor",
    email: "anton.sukamto@ibik.ac.id",
    phone_number: "081234567890",
  };
  return (
    <View style={styles.container}>
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
            autoFocus
            keyboardType="numeric"
            style={styles.identity.input_text}
          ></TextInput>
        </View>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Email</Text>
          <TextInput
            value={personalData.email}
            autoFocus
            style={styles.identity.input_text}
          ></TextInput>
        </View>
        <View style={styles.identity.card_input}>
          <Text style={styles.identity.title}>Address</Text>
          <TextInput
            value={personalData.address}
            autoFocus
            style={styles.identity.input_text}
          ></TextInput>
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity style={styles.identity.button}>
            <Text style={styles.identity.button_text}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  headers: {
    title: {
      fontWeight: "bold",
      fontSize: 40,
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
