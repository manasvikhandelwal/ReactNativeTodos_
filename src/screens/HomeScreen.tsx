import React from "react";
import { View, Text, FlatList, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { deleteProfile, editProfile } from "../redux/profileSlice";
import GlobalStyles from "../styles/GlobalStyles";

export default function HomeScreen({ navigation }: any) {
  const { profiles } = useSelector((s: RootState) => s.profile);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={GlobalStyles.safeArea}>
      <View style={GlobalStyles.container}>
        <View style={{ flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginBottom: 18,padding:40 }}>
          <Text style={{ fontSize: 22, fontWeight: "700", color: "#0F172A" }}>Profiles</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Page1")} style={GlobalStyles.primaryBtn} activeOpacity={0.9}>
            <Text style={GlobalStyles.primaryBtnText}>+ Add</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={profiles}
          keyExtractor={(i) => i.id}
          ListEmptyComponent={() => <Text style={GlobalStyles.smallText}>No profiles yet — add one.</Text>}
          renderItem={({ item }) => (
            <View style={GlobalStyles.card}>
              <Text style={{ fontWeight: "700", fontSize: 16 }}>{item.fullName}</Text>
              <Text style={{ color: "#64748B", marginVertical: 4 }}>{item.email}</Text>
              <Text style={{ color: "#475569" }}>{item.city} • {item.state}</Text>

              <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 12 }}>
                <TouchableOpacity
                  onPress={() => {
                    dispatch(editProfile(item));
                    navigation.navigate("Page1");
                  }}
                  style={[GlobalStyles.secondaryBtn, { paddingVertical: 8, paddingHorizontal: 12, marginRight: 8 }]}
                  activeOpacity={0.8}
                >
                  <Text style={GlobalStyles.secondaryBtnText}>Edit</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => dispatch(deleteProfile(item.id))} style={[GlobalStyles.primaryBtn, { backgroundColor: "#EF4444" }]} activeOpacity={0.9}>
                  <Text style={GlobalStyles.primaryBtnText}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
