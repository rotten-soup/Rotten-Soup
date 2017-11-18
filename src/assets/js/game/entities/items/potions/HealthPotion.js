import Item from '#/entities/items/Item.js'
import {Game} from '#/Game.js'

export default class HealthPotion extends Item {

    constructor(x, y, id) {
        super(x, y, {
            id : id,
            type : "Health Potion"
        });
    }

    use () {
        Game.log("You drink a health potion. It restores a little HP.", "defend");
        Game.player.heal(25);
        Game.player.removeFromInventory(this);
    }

    hoverInfo() {
        return "Effect: Heals for 25 HP";
    }
}
