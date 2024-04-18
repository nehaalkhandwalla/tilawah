import React from "react";
import { useState } from "react";
import Memorise from "./Memorise.js";
import { Text, View, Pressable, ScrollView } from "react-native";
import styles from "./StyleSurahs.js";
import SurahComponent from "./SurahComponent.js";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

function Surahs({ navigation }) {
  const [selectedSurah, setSelectedSurah] = useState(0);

  const handleSurahPress = ({ number }) => {
    setSelectedSurah(number);
    navigation.navigate("Memorise", { surahNumber: number });
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
          onPress={() => handleSurahPress({ number: 114 })}
        />
        <SurahComponent
          number="03"
          surah="Al-Imran"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="04"
          surah="An-Nisa"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="05"
          surah="Al-Maidah"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="06"
          surah="Al-An'am"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="07"
          surah="Al-A'raf"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="08"
          surah="Al-Anfal"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="09"
          surah="At-Tawbah"
          onPress={handleSurahPress}
        />
        <SurahComponent number="10" surah="Yunus" onPress={handleSurahPress} />
        <SurahComponent number="11" surah="Hud" onPress={handleSurahPress} />
        <SurahComponent number="12" surah="Yusuf" onPress={handleSurahPress} />
        <SurahComponent
          number="13"
          surah="Ar-Ra'd"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="14"
          surah="Ibrahim"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="15"
          surah="Al-Hijr"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="16"
          surah="An-Nahl"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="17"
          surah="Al-Isra"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="18"
          surah="Al-Kahf"
          onPress={handleSurahPress}
        />
        <SurahComponent number="19" surah="Maryam" onPress={handleSurahPress} />
        <SurahComponent number="20" surah="Ta-Ha" onPress={handleSurahPress} />
        <SurahComponent
          number="21"
          surah="Al-Anbiya"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="22"
          surah="Al-Hajj"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="23"
          surah="Al-Mu'minun"
          onPress={handleSurahPress}
        />
        <SurahComponent number="24" surah="An-Nur" onPress={handleSurahPress} />
        <SurahComponent
          number="25"
          surah="Al-Furqan"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="26"
          surah="Ash-Shu'ara"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="27"
          surah="An-Naml"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="28"
          surah="Al-Qasas"
          onPress={handleSurahPress}
        />
        <SurahComponent
          number="29"
          surah="Al-Ankabut"
          onPress={handleSurahPress}
        />
        <SurahComponent number="30" surah="Ar-Rum" onPress={handleSurahPress} />
        <SurahComponent number="31" surah="Luqman" onPress={handleSurahPress} />
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
          onPress={handleSurahPress}
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

        {/* <SurahComponent number="01" surah="Al-Fatiha" />
        <SurahComponent number="02" surah="Al-Baqarah" />
        <SurahComponent number="03" surah="Al-Imran" />
        <SurahComponent number="04" surah="An-Nisa" />
        <SurahComponent number="05" surah="Al-Maidah" />
        <SurahComponent number="06" surah="Al-An'am" />
        <SurahComponent number="07" surah="Al-A'raf" />
        <SurahComponent number="08" surah="Al-Anfal" />
        <SurahComponent number="09" surah="At-Tawbah" />
        <SurahComponent number="10" surah="Yunus" />
        <SurahComponent number="11" surah="Hud" />
        <SurahComponent number="12" surah="Yusuf" />
        <SurahComponent number="13" surah="Ar-Ra'd" />
        <SurahComponent number="14" surah="Ibrahim" />
        <SurahComponent number="15" surah="Al-Hijr" />
        <SurahComponent number="16" surah="An-Nahl" />
        <SurahComponent number="17" surah="Al-Isra" />
        <SurahComponent number="18" surah="Al-Kahf" />
        <SurahComponent number="19" surah="Maryam" />
        <SurahComponent number="20" surah="Ta-Ha" />
        <SurahComponent number="21" surah="Al-Anbiya" />
        <SurahComponent number="22" surah="Al-Hajj" />
        <SurahComponent number="23" surah="Al-Mu'minun" />
        <SurahComponent number="24" surah="An-Nur" />
        <SurahComponent number="25" surah="Al-Furqan" />
        <SurahComponent number="26" surah="Ash-Shu'ara" />
        <SurahComponent number="27" surah="An-Naml" />
        <SurahComponent number="28" surah="Al-Qasas" />
        <SurahComponent number="29" surah="Al-Ankabut" />
        <SurahComponent number="30" surah="Ar-Rum" />
        <SurahComponent number="31" surah="Luqman" />
        <SurahComponent number="32" surah="As-Sajda" />
        <SurahComponent number="33" surah="Al-Ahzab" />
        <SurahComponent number="34" surah="Saba" />
        <SurahComponent number="35" surah="Fatir" />
        <SurahComponent number="36" surah="Ya-Sin" />
        <SurahComponent number="37" surah="As-Saffat" />
        <SurahComponent number="38" surah="Sad" />
        <SurahComponent number="39" surah="Az-Zumar" />
        <SurahComponent number="40" surah="Ghafir" />
        <SurahComponent number="41" surah="Fussilat" />
        <SurahComponent number="42" surah="Ash-Shura" />
        <SurahComponent number="43" surah="Az-Zukhruf" />
        <SurahComponent number="44" surah="Ad-Dukhan" />
        <SurahComponent number="45" surah="Al-Jathiyah" />
        <SurahComponent number="46" surah="Al-Ahqaf" />
        <SurahComponent number="47" surah="Muhammad" />
        <SurahComponent number="48" surah="Al-Fath" />
        <SurahComponent number="49" surah="Al-Hujurat" />
        <SurahComponent number="50" surah="Qaf" />
        <SurahComponent number="51" surah="Adh-Dhariyat" />
        <SurahComponent number="52" surah="At-Tur" />
        <SurahComponent number="53" surah="An-Najm" />
        <SurahComponent number="54" surah="Al-Qamar" />
        <SurahComponent number="55" surah="Ar-Rahman" />
        <SurahComponent number="56" surah="Al-Waqi'a" />
        <SurahComponent number="57" surah="Al-Hadid" />
        <SurahComponent number="58" surah="Al-Mujadila" />
        <SurahComponent number="59" surah="Al-Hashr" />
        <SurahComponent number="60" surah="Al-Mumtahina" />
        <SurahComponent number="61" surah="As-Saff" />
        <SurahComponent number="62" surah="Al-Jumu'a" />
        <SurahComponent number="63" surah="Al-Munafiqun" />
        <SurahComponent number="64" surah="At-Taghabun" />
        <SurahComponent number="65" surah="At-Talaq" />
        <SurahComponent number="66" surah="At-Tahrim" />
        <SurahComponent number="67" surah="Al-Mulk" />
        <SurahComponent number="68" surah="Al-Qalam" />
        <SurahComponent number="69" surah="Al-Haqqah" />
        <SurahComponent number="70" surah="Al-Ma'arij" />
        <SurahComponent number="71" surah="Nuh" />
        <SurahComponent number="72" surah="Al-Jinn" />
        <SurahComponent number="73" surah="Al-Muzzammil" />
        <SurahComponent number="74" surah="Al-Muddathir" />
        <SurahComponent number="75" surah="Al-Qiyamah" />
        <SurahComponent number="76" surah="Al-Insan" />
        <SurahComponent number="77" surah="Al-Mursalat" />
        <SurahComponent number="78" surah="An-Naba" />
        <SurahComponent number="79" surah="An-Nazi'at" />
        <SurahComponent number="80" surah="Abasa" />
        <SurahComponent number="81" surah="At-Takwir" />
        <SurahComponent number="82" surah="Al-Infitar" />
        <SurahComponent number="83" surah="Al-Mutaffifin" />
        <SurahComponent number="84" surah="Al-Inshiqaq" />
        <SurahComponent number="85" surah="Al-Buruj" />
        <SurahComponent number="86" surah="At-Tariq" />
        <SurahComponent number="87" surah="Al-A'la" />
        <SurahComponent number="88" surah="Al-Ghashiyah" />
        <SurahComponent number="89" surah="Al-Fajr" />
        <SurahComponent number="90" surah="Al-Balad" />
        <SurahComponent number="91" surah="Ash-Shams" />
        <SurahComponent number="92" surah="Al-Lail" />
        <SurahComponent number="93" surah="Ad-Duha" />
        <SurahComponent number="94" surah="Ash-Sharh" />
        <SurahComponent number="95" surah="At-Tin" />
        <SurahComponent number="96" surah="Al-Alaq" />
        <SurahComponent number="97" surah="Al-Qadr" />
        <SurahComponent number="98" surah="Al-Bayyinah" />
        <SurahComponent number="99" surah="Az-Zalzalah" />
        <SurahComponent number="100" surah="Al-Adiyat" />
        <SurahComponent number="101" surah="Al-Qari'ah" />
        <SurahComponent number="102" surah="At-Takathur" />
        <SurahComponent number="103" surah="Al-Asr" />
        <SurahComponent number="104" surah="Al-Humazah" />
        <SurahComponent number="105" surah="Al-Fil" />
        <SurahComponent number="106" surah="Quraish" />
        <SurahComponent number="107" surah="Al-Ma'un" />
        <SurahComponent number="108" surah="Al-Kawthar" />
        <SurahComponent number="109" surah="Al-Kafirun" />
        <SurahComponent number="110" surah="An-Nasr" />
        <SurahComponent number="111" surah="Al-Masad" />
        <SurahComponent number="112" surah="Al-Ikhlas" />
        <SurahComponent number="113" surah="Al-Falaq" />
        <SurahComponent number="114" surah="An-Nas" /> */}
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
