import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

const image = {
  uri: "https://img.freepik.com/free-photo/top-view-perfectly-ordered-fitness-items_23-2150321808.jpg?w=996&t=st=1689389230~exp=1689389830~hmac=5008dd7523790218b5f96c870c51b4069564bd30de43d8826733a1395d380764",
};

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.title}>Log in</Text>
        <View style={styles.form}>
          <TextInput style={styles.inputField} placeholder="e-mail" />
          <TextInput style={styles.inputField} placeholder="password" />
          <TouchableOpacity style={styles.myButton}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#333",
  },
  title: {
    color: "#ddd",
    fontSize: 34,
    fontWeight: "bold",
    marginLeft: 10,
    padding: 15,
  },
  form: {
    backgroundColor: 'rgba(75,75,75, 0.8)',
    borderRadius: 8,
    padding: 15,
    minHeight: 300,
    justifyContent: "center",
    margin: 10,
  },
  inputField: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderColor: "#ddd",
    backgroundColor: "#ddd",
  },
  myButton: {
    backgroundColor: "lightseagreen",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    marginTop: 15,
    marginBottom: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "snow",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
