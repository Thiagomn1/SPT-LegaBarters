import { DependencyContainer } from "tsyringe";

import { ILogger } from "@spt/models/spt/utils/ILogger";
import { DatabaseServer } from "@spt/servers/DatabaseServer";
import { LogTextColor } from "@spt/models/spt/logging/LogTextColor";
import { IPostDBLoadMod } from "@spt/models/external/IPostDBLoadMod";
import { ILegaBarter, legaBarterList } from "./db/items";
import { ITrader } from "@spt/models/eft/common/tables/ITrader";

class Mod implements IPostDBLoadMod 
{
    private modConfig = require("./config/config.json");

    public postDBLoad(container: DependencyContainer): void 
    {
        const logger = container.resolve<ILogger>("WinstonLogger");
        const dbServer = container.resolve<DatabaseServer>("DatabaseServer");
        const dbTables = dbServer.getTables();

        const ref = dbTables.traders["6617beeaa9cfa777ca915b7c"];

        for (const item of legaBarterList) 
        {
            this.addItemToTrader(ref, item);
        }

        logger.logWithColor("Lega Barters added to Ref", LogTextColor.CYAN);
    }

    private addItemToTrader(trader: ITrader, item: ILegaBarter) 
    {
        trader.assort.items.push({
            "_id": `${item._id}`,
            "_tpl": `${item._tpl}`,
            "parentId": "hideout",
            "slotId": "hideout",
            "upd": {
                "StackObjectsCount": 1,
                "BuyRestrictionMax": 1,
                "BuyRestrictionCurrent": 0
            }
        })

        trader.assort.barter_scheme[`${item._id}`] = [
            [
                {
                    "count": item.price,
                    "_tpl": "6656560053eaaa7a23349c86"
                }
            ]
        ];

        if (this.modConfig.noLoyaltyRequirement)
        {
            trader.assort.loyal_level_items[item._id] = 1;
        }
        else 
        {
            trader.assort.loyal_level_items[item._id] = item.loyaltyLevel;
        }

    }
}



export const mod = new Mod();
