export interface ILegaBarter 
{
    _id: string;
    _tpl: string;
    price: number;
    loyaltyLevel: number;
}

export const legaBarterList: ILegaBarter[] = [
    {
        _id: "weapon_case",
        _tpl: "59fb023c86f7746d0d4b423c",
        price: 2,
        loyaltyLevel: 3
    },
    {
        _id: "items_case",
        _tpl: "59fb042886f7746c5005a7b2",
        price: 2,
        loyaltyLevel: 3
    },
    {
        _id: "thicc_weapon_case",
        _tpl: "5b6d9ce188a4501afc1b2b25",
        price: 6,
        loyaltyLevel: 4
    },
    {
        _id: "thicc_item_case",
        _tpl: "5c0a840b86f7742ffa4f2482",
        price: 6,
        loyaltyLevel: 4
    },
    {
        _id: "tactical_gladius",
        _tpl: "664a5428d5e33a713b622379",
        price: 3,
        loyaltyLevel: 2
    },
    {
        _id: "m203_grenade_launcher",
        _tpl: "6357c98711fb55120211f7e1",
        price: 1,
        loyaltyLevel: 4
    },
    {
        _id: "gp25_grenade_launcher",
        _tpl: "62e7e7bbe6da9612f743f1e0",
        price: 1,
        loyaltyLevel: 4
    },
    {
        _id: "grumpy_key",
        _tpl: "664d3dd590294949fe2d81b7",
        price: 1,
        loyaltyLevel: 2
    },
    {
        _id: "voron_key",
        _tpl: "664d3ddfdda2e85aca370d75",
        price: 1,
        loyaltyLevel: 3
    }

];
