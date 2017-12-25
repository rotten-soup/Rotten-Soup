/**
 * Created by Larken on 6/22/2017.
 */
import {Game} from "#/Game.js";
import {getRandomInt, getItemsFromDropTable} from "#/utils/HelperFunctions.js";
import SimpleEnemy from "#/entities/actors/enemies/SimpleEnemy.js";

export default class Skeleton extends SimpleEnemy {
    constructor(x, y, id) {
        let randomHP = getRandomInt(10, 15);
        let randomStr = getRandomInt(5, 9);
        super(x, y, {
            id: id,
            name: "skeleton",
            description: "A skeleton raised from the dead!",
            visible: true,
            blocked: true,
            chasing: false,
            combat: {
                /* options.combat, dedicated to all things related to combat */
                description: [" attacked "],
                /* max stats */
                maxhp: randomHP,
                maxmana: 5,
                /* current stats */
                hp: randomHP,
                mana: 5,
                str: randomStr,
                def: 1,
                /* misc */
                hostile: true,
                range: 7,
                invulnerable: false,
            }
        });
    }
}
