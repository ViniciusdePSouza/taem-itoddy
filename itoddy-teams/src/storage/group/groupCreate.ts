import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await getAllGroups();

    const storage = JSON.stringify([...groups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}
