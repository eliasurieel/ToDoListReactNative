import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingTop: 50,
  },
  listContainer: {
    marginTop: 25,
    // flex: 1,
  },
  list: {
    // flex: 1,
    gap: 15,
    paddingBottom: 10,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 20,
  },
  modalDetalMessage: {
    fontSize: 14,
    color: "#212121",
  },
  selectedTask: {
    fontSize: 14,
    color: "#212121",
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
