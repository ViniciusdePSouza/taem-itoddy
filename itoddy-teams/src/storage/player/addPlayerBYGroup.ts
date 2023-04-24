import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from '../storageConfig'
import { PLyerStorageDTO } from "./PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { getGroupPlayers } from "./getGroupPlayers";


export async function addPlayerByGroup(newPlayer: PLyerStorageDTO, group: string){ 
    try {
        const storagePlayers = await getGroupPlayers(group)

        const playerAlreadyExist = storagePlayers.filter(player => player.name === newPlayer.name)

        if(playerAlreadyExist.length > 0){
            throw new AppError('Jogador ja existe em um time')
        }

        const storage = JSON.stringify([...storagePlayers, newPlayer])

        await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
    } catch (error) {
        throw (error);
    }
}