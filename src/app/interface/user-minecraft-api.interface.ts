import {PlayerMinecraftApiInterface} from "./player-minecraft-api.interface";
import {FactionMinecraftApiInterface} from "./faction-minecraft-api.interface";

export interface UserMinecraftApiInterface {
  player:PlayerMinecraftApiInterface;
  faction:FactionMinecraftApiInterface;
  money:any;
  roles:any;
  stats:any;
}
