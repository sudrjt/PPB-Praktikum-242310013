import Ionicons from "@expo/vector-icons/Ionicons";
import { TextInput, TouchableOpacity, View } from "react-native";
import { color_list, styles } from "../styles/StyleApps";


const SearchBar = ({ onClose, searchQuery, setSearchQuery }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: color_list.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 20,
        marginBottom: 10,
        ...styles.shadow,
      }}
    >
      <Ionicons name="search-outline" size={20} color="gray" />
      <TextInput
        style={{ flex: 1, marginLeft: 10, fontSize: 16, color: "black" }}
        placeholder="Search here"
        value={searchQuery}
        onChangeText={setSearchQuery} 
        autoFocus={true}
      />
      <TouchableOpacity onPress={onClose}>
        <Ionicons name="close-circle" size={24} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
