import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, HomeHeader, SearchBar } from "../../components";
import { COLORS } from "../../constants/color";
import { images } from "../../assets/dummyData";
import { ScrollView } from "react-native-gesture-handler";

//components
import MembersCard from "../../components/Members/MembersCard";

const data = [
  {
    id: 1,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Chairman",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie mollis viverra faucibus ac ultricies. Interdum aenean nullam ",
  },
  {
    id: 2,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Vice President",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie mollis viverra faucibus ac ultricies. Interdum aenean nullam ",
  },
  {
    id: 3,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Chairman",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie mollis viverra faucibus ac ultricies. Interdum aenean nullam ",
  },
  {
    id: 4,
    name: "MD Abubakar",
    image: images.man_1,
    portfolio: "Vice President",
    position: "Blaid Group  MD/ CEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie mollis viverra faucibus ac ultricies. Interdum aenean nullam ",
  },
];

const Excos = ({ navigation }: any) => {
  return (
    <Container style={styles.container}>
      <HomeHeader
        navigation={navigation}
        title="Meet the Excos"
        back="back"
        titleColor={COLORS.blue}
      />
      <SearchBar hasFilter />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((item) => {
          return <MembersCard key={item.id} item={item} />;
        })}
      </ScrollView>
    </Container>
  );
};

export default Excos;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
