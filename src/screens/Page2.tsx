import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { updateDraft } from "../redux/profileSlice";
import { RootState } from "../redux/store";
import GlobalStyles from "../styles/GlobalStyles";

export default function Page2({ navigation }: any) {
  const dispatch = useDispatch();
  const draft = useSelector((s: RootState) => s.profile.draft);
  const [form, setForm] = useState({
    city: draft.city || "",
    state: draft.state || "",
    country: draft.country || "",
  });

  const onNext = () => {
    if (!form.city.trim()) {
      alert("Please enter city");
      return;
    }
    dispatch(updateDraft(form));
    navigation.navigate("Page3");
  };

  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.title}>Address</Text>

          <Text style={GlobalStyles.label}>City</Text>
          <TextInput style={GlobalStyles.input} placeholder="City" value={form.city} onChangeText={(v) => setForm({ ...form, city: v })} />

          <Text style={GlobalStyles.label}>State</Text>
          <TextInput style={GlobalStyles.input} placeholder="State" value={form.state} onChangeText={(v) => setForm({ ...form, state: v })} />

          <Text style={GlobalStyles.label}>Country</Text>
          <TextInput style={GlobalStyles.input} placeholder="Country" value={form.country} onChangeText={(v) => setForm({ ...form, country: v })} />

          <View style={GlobalStyles.actionsRow as any}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <TouchableOpacity onPress={() => navigation.goBack()} style={GlobalStyles.secondaryBtn} activeOpacity={0.8}>
                <Text style={GlobalStyles.secondaryBtnText}>Back</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1 }}>
              <TouchableOpacity onPress={onNext} style={GlobalStyles.primaryBtn} activeOpacity={0.9}>
                <Text style={GlobalStyles.primaryBtnText}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
