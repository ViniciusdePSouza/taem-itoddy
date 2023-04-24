import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { getAllGroups } from "./getAllGroups";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
  try {
    const groups = await getAllGroups();

    const groupAlreadyExists = groups.includes(newGroup);

    if(groupAlreadyExists) {
      throw new AppError('O nome do grupo ja existe')
    }
    const storage = JSON.stringify([...groups, newGroup]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}
