import { ScrollView, StyleSheet, Text } from "react-native";

export default function Praktikum2() {
  const personalData = {
    nama: "Sudrajat",
    beratBadan: 50,
    tinggiBadan: 170,
  };

  const porsiMakanan = [
    { waktu: "Sarapan", kalori: 400 },
    { waktu: "Makan Siang", kalori: 600 },
    { waktu: "Makan Malam", kalori: 500 },
    { waktu: "Camilan", kalori: 300 },
  ];

  let totalKalori = 0;
  for (let i = 0; i < porsiMakanan.length; i++) {
    totalKalori += porsiMakanan[i].kalori;
  }

  const tinggiMeter = personalData.tinggiBadan / 100;

  const bmi = personalData.beratBadan / (tinggiMeter * tinggiMeter);

  let statusBMI = "";
  if (bmi < 18.5) {
    statusBMI = "Kurus";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statusBMI = "Ideal";
  } else {
    statusBMI = "Berlebih";
  }

  let statusKalori = "";
  if (totalKalori < 1500) {
    statusKalori = "Asupan kalori kurang";
  } else if (totalKalori >= 1500 && totalKalori <= 2200) {
    statusKalori = "Asupan kalori cukup";
  } else {
    statusKalori = "Asupan kalori berlebih";
  }

  let kesimpulan = "";
  if (statusBMI === "Ideal" && statusKalori === "Asupan kalori cukup") {
    kesimpulan = "Berat badan sudah ideal dan asupan kalori sesuai.";
  } else if (statusBMI === "Kurus" && statusKalori === "Asupan kalori kurang") {
    kesimpulan =
      "Berat badan di bawah ideal, tingkatkan asupan kalori bergizi.";
  } else if (
    statusBMI === "Berlebih" &&
    statusKalori === "Asupan kalori berlebih"
  ) {
    kesimpulan =
      "Berat badan berlebih, kurangi asupan kalori dan perbanyak olahraga.";
  } else {
    kesimpulan =
      "Perhatikan keseimbangan antara berat badan dan asupan kalori Anda.";
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Evaluasi Berat Badan Ideal</Text>

      <Text style={styles.title}>Pasien</Text>
      <Text style={styles.text}>Nama: {personalData.nama}</Text>
      <Text style={styles.text}>Berat Badan: {personalData.beratBadan} kg</Text>
      <Text style={styles.text}>
        Tinggi Badan: {personalData.tinggiBadan} cm
      </Text>

      <Text style={styles.title}>Porsi Makanan Harian</Text>
      {porsiMakanan.map((item, index) => (
        <Text key={index} style={styles.text}>
          {item.waktu} - {item.kalori} kalori
        </Text>
      ))}
      <Text style={styles.text}>Total Kalori: {totalKalori}</Text>

      <Text style={styles.title}>Hasil Perhitungan</Text>
      <Text style={styles.text}>BMI: {bmi.toFixed(2)}</Text>
      <Text style={styles.text}>Status BMI: {statusBMI}</Text>
      <Text style={styles.text}>Status Kalori: {statusKalori}</Text>

      <Text style={styles.conclusion}>{kesimpulan}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    marginTop: 30,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    marginBottom: 2,
  },
  conclusion: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 15,
  },
});
