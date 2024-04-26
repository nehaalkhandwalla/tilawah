import React from "react";
import { useState } from "react";
import Memorise from "./Memorise.js";
import { Text, View, Pressable, ScrollView } from "react-native";
import styles from "./StyleSurahs.js";
import SurahComponent from "./SurahComponent.js";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function Surahs({ navigation, route }) {
  const [selectedSurah, setSelectedSurah] = useState(0);

  const handleSurahPress = ({ number }) => {
    setSelectedSurah(number);
    route.params.action === "memorise" ? navigation.navigate("Memorise", { surahNumber: number }) : navigation.navigate("TestMe", { surahNumber: number });
    // navigation.navigate("Memorise", { surahNumber: number });
    // navigation.navigate
    console.log("Surah number:", number);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SELECT A SURAH</Text>
      <ScrollView indicatorStyle="white">
        <SurahComponent
          number="01"
          surah="Al-Fatiha"
          // setSelectedSurah={1}
          onPress={() => handleSurahPress({ number: 1 })}
        />
        <SurahComponent
          number="02"
          surah="Al-Baqarah"
          onPress={() => handleSurahPress({ number: 2 })}
        />
        <SurahComponent
          number="03"
          surah="Al-Imran"
          onPress={() => handleSurahPress({ number: 3 })}
        />
        <SurahComponent
          number="04"
          surah="An-Nisa"
          onPress={() => handleSurahPress({ number: 4 })}
        />
        <SurahComponent
          number="05"
          surah="Al-Maidah"
          onPress={() => handleSurahPress({ number: 5 })}
        />
        <SurahComponent
          number="06"
          surah="Al-An'am"
          onPress={() => handleSurahPress({ number: 6 })}
        />
        <SurahComponent
          number="07"
          surah="Al-A'raf"
          onPress={() => handleSurahPress({ number: 7 })}
        />
        <SurahComponent
          number="08"
          surah="Al-Anfal"
          onPress={() => handleSurahPress({ number: 8 })}
        />
        <SurahComponent
          number="09"
          surah="At-Tawbah"
          onPress={() => handleSurahPress({ number: 9 })}
        />
        <SurahComponent number="10" surah="Yunus" onPress={() => handleSurahPress({ number: 10 })} />
        <SurahComponent number="11" surah="Hud" onPress={() => handleSurahPress({ number: 11 })} />
        <SurahComponent number="12" surah="Yusuf" onPress={() => handleSurahPress({ number: 12 })} />
        <SurahComponent
          number="13"
          surah="Ar-Ra'd"
          onPress={() => handleSurahPress({ number: 13 })}
        />
        <SurahComponent
          number="14"
          surah="Ibrahim"
          onPress={() => handleSurahPress({ number: 14 })}
        />
        <SurahComponent
          number="15"
          surah="Al-Hijr"
          onPress={() => handleSurahPress({ number: 15 })}
        />
        <SurahComponent
          number="16"
          surah="An-Nahl"
          onPress={() => handleSurahPress({ number: 16 })}
        />
        <SurahComponent
          number="17"
          surah="Al-Isra"
          onPress={() => handleSurahPress({ number: 17 })}
        />
        <SurahComponent
          number="18"
          surah="Al-Kahf"
          onPress={() => handleSurahPress({ number: 18 })}
        />
        <SurahComponent number="19" surah="Maryam" onPress={() => handleSurahPress({ number: 19 })} />
        <SurahComponent number="20" surah="Ta-Ha" onPress={() => handleSurahPress({ number: 20 })} />
        <SurahComponent
          number="21"
          surah="Al-Anbiya"
          onPress={() => handleSurahPress({ number: 21 })}
        />
        <SurahComponent
          number="22"
          surah="Al-Hajj"
          onPress={() => handleSurahPress({ number: 22 })}
        />
        <SurahComponent
          number="23"
          surah="Al-Mu'minun"
          onPress={() => handleSurahPress({ number: 23 })}
        />
        <SurahComponent number="24" surah="An-Nur" onPress={() => handleSurahPress({ number: 24 })} />
        <SurahComponent
          number="25"
          surah="Al-Furqan"
          onPress={() => handleSurahPress({ number: 25 })}
        />
        <SurahComponent
          number="26"
          surah="Ash-Shu'ara"
          onPress={() => handleSurahPress({ number: 26 })}
        />
        <SurahComponent
          number="27"
          surah="An-Naml"
          onPress={() => handleSurahPress({ number: 27 })}
        />
        <SurahComponent
          number="28"
          surah="Al-Qasas"
          onPress={() => handleSurahPress({ number: 28 })}
        />
        <SurahComponent
          number="29"
          surah="Al-Ankabut"
          onPress={() => handleSurahPress({ number: 29 })}
        />
        <SurahComponent number="30" surah="Ar-Rum" onPress={() => handleSurahPress({ number: 30 })} />
        <SurahComponent number="31" surah="Luqman" onPress={() => handleSurahPress({ number: 31 })} />
        <SurahComponent
          number="32"
          surah="As-Sajda"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="33"
          surah="Al-Ahzab"
          onPress={handleSurahPress}
        />
        <SurahComponent number="34" surah="Saba" onPress={handleSurahPress} />
        <SurahComponent number="35" surah="Fatir" onPress={handleSurahPress} />
        <SurahComponent number="36" surah="Ya-Sin" onPress={handleSurahPress} />
        <SurahComponent
          number="37"
          surah="As-Saffat"
          onPress={handleSurahPress}
        />
        <SurahComponent number="38" surah="Sad" onPress={handleSurahPress} />
        <SurahComponent
          number="39"
          surah="Az-Zumar"
          onPress={handleSurahPress}
        />
        <SurahComponent number="40" surah="Ghafir" onPress={handleSurahPress} />
        <SurahComponent
          number="41"
          surah="Fussilat"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="42"
          surah="Ash-Shura"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="43"
          surah="Az-Zukhruf"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="44"
          surah="Ad-Dukhan"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="45"
          surah="Al-Jathiyah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="46"
          surah="Al-Ahqaf"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="47"
          surah="Muhammad"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="48"
          surah="Al-Fath"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="49"
          surah="Al-Hujurat"
          onPress={handleSurahPress}
        />
        <SurahComponent number="50" surah="Qaf" onPress={handleSurahPress} />
        <SurahComponent
          number="51"
          surah="Adh-Dhariyat"
          onPress={handleSurahPress}
        />
        <SurahComponent number="52" surah="At-Tur" onPress={handleSurahPress} />
        <SurahComponent
          number="53"
          surah="An-Najm"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="54"
          surah="Al-Qamar"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="55"
          surah="Ar-Rahman"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="56"
          surah="Al-Waqi'a"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="57"
          surah="Al-Hadid"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="58"
          surah="Al-Mujadila"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="59"
          surah="Al-Hashr"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="60"
          surah="Al-Mumtahina"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="61"
          surah="As-Saff"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="62"
          surah="Al-Jumu'a"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="63"
          surah="Al-Munafiqun"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="64"
          surah="At-Taghabun"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="65"
          surah="At-Talaq"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="66"
          surah="At-Tahrim"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="67"
          surah="Al-Mulk"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="68"
          surah="Al-Qalam"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="69"
          surah="Al-Haqqah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="70"
          surah="Al-Ma'arij"
          onPress={handleSurahPress}
        />
        <SurahComponent number="71" surah="Nuh" onPress={handleSurahPress} />
        <SurahComponent
          number="72"
          surah="Al-Jinn"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="73"
          surah="Al-Muzzammil"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="74"
          surah="Al-Muddathir"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="75"
          surah="Al-Qiyamah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="76"
          surah="Al-Insan"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="77"
          surah="Al-Mursalat"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="78"
          surah="An-Naba"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="79"
          surah="An-Nazi'at"
          onPress={handleSurahPress}
        />
        <SurahComponent number="80" surah="Abasa" onPress={handleSurahPress} />
        <SurahComponent
          number="81"
          surah="At-Takwir"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="82"
          surah="Al-Infitar"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="83"
          surah="Al-Mutaffifin"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="84"
          surah="Al-Inshiqaq"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="85"
          surah="Al-Buruj"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="86"
          surah="At-Tariq"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="87"
          surah="Al-A'la"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="88"
          surah="Al-Ghashiyah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="89"
          surah="Al-Fajr"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="90"
          surah="Al-Balad"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="91"
          surah="Ash-Shams"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="92"
          surah="Al-Lail"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="93"
          surah="Ad-Duha"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="94"
          surah="Ash-Sharh"
          onPress={handleSurahPress}
        />
        <SurahComponent number="95" surah="At-Tin" onPress={handleSurahPress} />
        <SurahComponent
          number="96"
          surah="Al-Alaq"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="97"
          surah="Al-Qadr"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="98"
          surah="Al-Bayyinah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="99"
          surah="Az-Zalzalah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="100"
          surah="Al-Adiyat"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="101"
          surah="Al-Qari'ah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="102"
          surah="At-Takathur"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="103"
          surah="Al-Asr"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="104"
          surah="Al-Humazah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="105"
          surah="Al-Fil"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="106"
          surah="Quraish"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="107"
          surah="Al-Ma'un"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="108"
          surah="Al-Kawthar"
          // onPress={handleSurahPress }
          onPress={() => handleSurahPress({ number: 108 })}
        />
        <SurahComponent
          number="109"
          surah="Al-Kafirun"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="110"
          surah="An-Nasr"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="111"
          surah="Al-Masad"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="112"
          surah="Al-Ikhlas"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="113"
          surah="Al-Falaq"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="114"
          surah="An-Nas"
          onPress={handleSurahPress}
        />
        <View style={{ height: 30 }}></View>
      </ScrollView>
      {/* {selectedSurah && (
        <Memorise
          surahNumber={selectedSurah.number}
          surahName={selectedSurah.surah}
        />
      )} */}
    </View>
  );
}
export default Surahs;
