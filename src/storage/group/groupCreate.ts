import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroup: string) {
    try{
        const storedGroups = await groupsGetAll();
        const storage = JSON.stringify([...storedGroups, newGroup]);

        const groupAlreadyExists = storedGroups.includes(newGroup);

        if(groupAlreadyExists) {
            throw new AppError('Existe um grupo cadastrado com esse nome.');
        }

        await AsyncStorage.setItem(GROUP_COLLECTION, storage);

    } catch(error) {
        throw error;
    }
}