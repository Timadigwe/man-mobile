import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Container, HomeHeader, SearchBar } from "../../components";

const News = ({ navigation }: any) => {
  return (
    <Container>
      <HomeHeader navigation={navigation} title="News" />
      <SearchBar hasFilter />

      <Text>News</Text>
    </Container>
  );
};

export default News;

const styles = StyleSheet.create({});
