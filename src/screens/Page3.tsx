import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { addProfile } from "../redux/profileSlice";
import { RootState } from "../redux/store";
import GlobalStyles from "../styles/GlobalStyles";

export default function Page3({ navigation }: any) {
  const dispatch = useDispatch();
  const draft = useSelector((s: RootState) => s.profile.draft);

  const onSubmit = () => {
    dispatch(addProfile());
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.title}>Summary</Text>

          <Text style={GlobalStyles.label}>Full name</Text>
          <Text style={{ marginBottom: 8 }}>{draft.fullName || "-"}</Text>

          <Text style={GlobalStyles.label}>Email</Text>
          <Text style={{ marginBottom: 8 }}>{draft.email || "-"}</Text>

          <Text style={GlobalStyles.label}>Age</Text>
          <Text style={{ marginBottom: 8 }}>{draft.age || "-"}</Text>

          <Text style={GlobalStyles.label}>Address</Text>
          <Text style={{ marginBottom: 8 }}>{`${draft.city || "-"}, ${draft.state || "-"}, ${draft.country || "-"}`}</Text>

          <View style={GlobalStyles.actionsRow as any}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <TouchableOpacity onPress={() => navigation.navigate("Page1")} style={GlobalStyles.secondaryBtn} activeOpacity={0.8}>
                <Text style={GlobalStyles.secondaryBtnText}>Edit</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={onSubmit} style={GlobalStyles.primaryBtn} activeOpacity={0.9}>
                <Text style={GlobalStyles.primaryBtnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
