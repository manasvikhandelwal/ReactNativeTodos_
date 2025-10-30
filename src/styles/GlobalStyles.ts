import { StyleSheet } from "react-native";

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F6F8FA",
  },
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 14,
    marginVertical: 10,
    // shadow (iOS)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    // elevation (Android)
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#1F2D3D",
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    color: "#475569",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F8FAFC",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#E6EEF8",
    marginBottom: 12,
    fontSize: 15,
    color: "#0F172A",
  },
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 12,
  },
  primaryBtn: {
    flex: 1,
    backgroundColor: "#0F62FE",
    paddingVertical: 12,
    borderRadius: 10,
    padding: 50,
    margin: 16,
  },
  primaryBtnText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 15,
  },
  secondaryBtn: {
    flex: 1,
    backgroundColor: "#E6EEF8",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#D1E4FF",
  },
  secondaryBtnText: {
    color: "#0F172A",
    fontWeight: "600",
    fontSize: 15,
  },
  smallText: {
    fontSize: 13,
    color: "#64748B",
  },
});
