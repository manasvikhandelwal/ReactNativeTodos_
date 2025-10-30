import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { updateDraft } from "../redux/profileSlice";
import { RootState } from "../redux/store";
import GlobalStyles from "../styles/GlobalStyles";

export default function Page1({ navigation }: any) {
  const dispatch = useDispatch();
  const draft = useSelector((s: RootState) => s.profile.draft);
  const [form, setForm] = useState({
    fullName: draft.fullName || "",
    email: draft.email || "",
    age: draft.age || "",
  });

  const onNext = () => {
    // basic validation
    if (!form.fullName.trim() || !form.email.trim()) {
      alert("Please enter name and email");
      return;
    }
    dispatch(updateDraft(form));
    navigation.navigate("Page2");
  };

  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.container}>
        <View style={GlobalStyles.card}>
          <Text style={GlobalStyles.title}>Basic Info</Text>

          <Text style={GlobalStyles.label}>Full name</Text>
          <TextInput
            style={GlobalStyles.input}
            placeholder="e.g. Aisha Sharma"
            value={form.fullName}
            onChangeText={(v) => setForm({ ...form, fullName: v })}
          />

          <Text style={GlobalStyles.label}>Email</Text>
          <TextInput
            style={GlobalStyles.input}
            placeholder="you@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={(v) => setForm({ ...form, email: v })}
          />

          <Text style={GlobalStyles.label}>Age</Text>
          <TextInput
            style={GlobalStyles.input}
            placeholder="25"
            keyboardType="numeric"
            value={form.age}
            onChangeText={(v) => setForm({ ...form, age: v })}
          />

          <View style={GlobalStyles.actionsRow as any}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={GlobalStyles.secondaryBtn}
                activeOpacity={0.8}
              >
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
