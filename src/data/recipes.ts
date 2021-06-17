export class Ingredient {
  name: string;
  url: string;

  constructor (name: string, url?: string | undefined) {
    this.name = name

    if (url) this.url = url
    else this.url = `https://dontstarve.fandom.com/wiki/${name.replace(' ', '_')}`
  }

  static Berries = new Ingredient('Berries')
  static BlueCapMushroom = new Ingredient('Blue Cap Mushroom')
  static Butter = new Ingredient('Butter')
  static ButterflyWings = new Ingredient('Butterfly Wings')
  static CactusFlesh = new Ingredient('Cactus Flesh')
  static CactusFlower = new Ingredient('Cactus Flower')
  static Carrot = new Ingredient('Carrot')
  static Dairy = new Ingredient('Dairy')
  static DragonFruit = new Ingredient('Dragon Fruit')
  static Drumstick = new Ingredient('Drumstick')
  static Durian = new Ingredient('Durian')
  static Egg = new Ingredient('Egg')
  static Fish = new Ingredient('Fish')
  static FrogLegs = new Ingredient('Frog Legs')
  static GreenCapMushroom = new Ingredient('Green Cap Mushroom')
  static Honey = new Ingredient('Honey')
  static Ice = new Ingredient('Ice')
  static Mandrake = new Ingredient('Mandrake')
  static Meat = new Ingredient('Meat')
  static Moleworm = new Ingredient('Moleworm')
  static MonsterMeat = new Ingredient('Monster Meat')
  static Morsel = new Ingredient('Morsel')
  static Morsels = new Ingredient('Morsels')
  static RedCapMushroom = new Ingredient('Red Cap Mushroom')
  static RoastedBirchnut = new Ingredient('Roasted Birchnut')
  static Sweetener = new Ingredient('Sweetener')
  static TallbirdEgg = new Ingredient('Tallbird Egg')
  static Twig = new Ingredient('Twig')
  static Watermelon = new Ingredient('Watermelon')
}

export interface IRecipe {
  name: string;
  ingredients: Ingredient[][];
  hunger: number;
  health: number;
  sanity: number;
}

export const RecipeList: IRecipe[] = [
  {
    name: 'Waffles',
    ingredients: [
      [
        Ingredient.Butter,
        Ingredient.Egg,
        Ingredient.Berries,
        Ingredient.Twig
      ]
    ],
    hunger: 37.5,
    health: 60,
    sanity: 5
  }, {
    name: 'Flower Salad',
    ingredients: [
      [
        Ingredient.CactusFlower,
        Ingredient.CactusFlesh,
        Ingredient.CactusFlesh,
        Ingredient.CactusFlesh
      ]
    ],
    hunger: 12.5,
    health: 40,
    sanity: 5
  }, {
    name: 'Fishsticks',
    ingredients: [
      [
        Ingredient.MonsterMeat,
        Ingredient.MonsterMeat,
        Ingredient.Fish,
        Ingredient.Twig
      ], [
        Ingredient.Ice,
        Ingredient.Ice,
        Ingredient.Fish,
        Ingredient.Twig
      ]
    ],
    hunger: 37.5,
    health: 40,
    sanity: 5
  }, {
    name: 'Pierogi',
    ingredients: [
      [
        Ingredient.MonsterMeat,
        Ingredient.Egg,
        Ingredient.RedCapMushroom,
        Ingredient.RedCapMushroom
      ]
    ],
    hunger: 37.5,
    health: 40,
    sanity: 5
  }, {
    name: 'Trail Mix',
    ingredients: [
      [
        Ingredient.RoastedBirchnut,
        Ingredient.Berries,
        Ingredient.Berries,
        Ingredient.Twig
      ]
    ],
    hunger: 12.5,
    health: 30,
    sanity: 5
  }, {
    name: 'Honey Nuggets',
    ingredients: [
      [
        Ingredient.MonsterMeat,
        Ingredient.Honey,
        Ingredient.Ice,
        Ingredient.Ice
      ]
    ],
    hunger: 37.5,
    health: 20,
    sanity: 5
  }, {
    name: 'Fruit Medley',
    ingredients: [
      [
        Ingredient.Watermelon,
        Ingredient.Watermelon,
        Ingredient.Watermelon,
        Ingredient.Twig
      ], [
        Ingredient.Durian,
        Ingredient.Durian,
        Ingredient.Durian,
        Ingredient.Twig
      ]
    ],
    hunger: 25,
    health: 20,
    sanity: 5
  }, {
    name: 'Spicy Chili',
    ingredients: [
      [
        Ingredient.Morsels,
        Ingredient.MonsterMeat,
        Ingredient.CactusFlesh,
        Ingredient.CactusFlesh
      ]
    ],
    hunger: 37.5,
    health: 20,
    sanity: 5
  }, {
    name: 'Ice Cream',
    ingredients: [
      [
        Ingredient.Dairy,
        Ingredient.Ice,
        Ingredient.Sweetener,
        Ingredient.Sweetener
      ]
    ],
    hunger: 25,
    health: 0,
    sanity: 50
  }, {
    name: 'Melonsicle',
    ingredients: [
      [
        Ingredient.Watermelon,
        Ingredient.Ice,
        Ingredient.Twig,
        Ingredient.Twig
      ]
    ],
    hunger: 12.5,
    health: 3,
    sanity: 20
  }, {
    name: 'Taffy',
    ingredients: [
      [
        Ingredient.Honey,
        Ingredient.Honey,
        Ingredient.Honey,
        Ingredient.Twig
      ]
    ],
    hunger: 25,
    health: -3,
    sanity: 15
  }, {
    name: 'Mandrake Soup',
    ingredients: [
      [
        Ingredient.Mandrake,
        Ingredient.Twig,
        Ingredient.Twig,
        Ingredient.Twig
      ]
    ],
    hunger: 150,
    health: 100,
    sanity: 5
  }, {
    name: 'Meaty Stew',
    ingredients: [
      [
        Ingredient.MonsterMeat,
        Ingredient.Meat,
        Ingredient.Morsel,
        Ingredient.Morsel
      ], [
        Ingredient.Meat,
        Ingredient.Meat,
        Ingredient.MonsterMeat,
        Ingredient.RedCapMushroom
      ]
    ],
    hunger: 150,
    health: 12,
    sanity: 5
  }, {
    name: 'Dragonpie',
    ingredients: [
      [
        Ingredient.DragonFruit,
        Ingredient.Twig,
        Ingredient.Twig,
        Ingredient.Twig
      ]
    ],
    hunger: 75,
    health: 40,
    sanity: 5
  }, {
    name: 'Honey Ham',
    ingredients: [
      [
        Ingredient.MonsterMeat,
        Ingredient.Morsel,
        Ingredient.Morsel,
        Ingredient.Honey
      ], [
        Ingredient.MonsterMeat,
        Ingredient.Meat,
        Ingredient.Honey,
        Ingredient.Honey
      ], [
        Ingredient.MonsterMeat,
        Ingredient.Meat,
        Ingredient.Ice,
        Ingredient.Honey
      ]
    ],
    hunger: 75,
    health: 30,
    sanity: 5
  }, {
    name: 'Bacon and Eggs',
    ingredients: [
      [
        Ingredient.Morsel,
        Ingredient.MonsterMeat,
        Ingredient.Egg,
        Ingredient.Egg
      ], [
        Ingredient.MonsterMeat,
        Ingredient.MonsterMeat,
        Ingredient.TallbirdEgg,
        Ingredient.Twig
      ]
    ],
    hunger: 75,
    health: 20,
    sanity: 5
  }, {
    name: 'Turkey Dinner',
    ingredients: [
      [
        Ingredient.Drumstick,
        Ingredient.Drumstick,
        Ingredient.MonsterMeat,
        Ingredient.Berries
      ], [
        Ingredient.Drumstick,
        Ingredient.Drumstick,
        Ingredient.Drumstick,
        Ingredient.Berries
      ], [
        Ingredient.Drumstick,
        Ingredient.Drumstick,
        Ingredient.MonsterMeat,
        Ingredient.CactusFlesh
      ]
    ],
    hunger: 75,
    health: 20,
    sanity: 5
  }, {
    name: 'Meatballs',
    ingredients: [
      [
        Ingredient.Morsel,
        Ingredient.Berries,
        Ingredient.Berries,
        Ingredient.Berries
      ], [
        Ingredient.MonsterMeat,
        Ingredient.Egg,
        Ingredient.Egg,
        Ingredient.Egg
      ], [
        Ingredient.MonsterMeat,
        Ingredient.RedCapMushroom,
        Ingredient.RedCapMushroom,
        Ingredient.RedCapMushroom
      ], [
        Ingredient.MonsterMeat,
        Ingredient.Ice,
        Ingredient.Ice,
        Ingredient.Ice
      ]
    ],
    hunger: 32.5,
    health: 30,
    sanity: 5
  }, {
    name: 'Froggle Bunwich',
    ingredients: [
      [
        Ingredient.FrogLegs,
        Ingredient.Carrot,
        Ingredient.Twig,
        Ingredient.Twig
      ], [
        Ingredient.FrogLegs,
        Ingredient.RedCapMushroom,
        Ingredient.Twig,
        Ingredient.Twig
      ], [
        Ingredient.FrogLegs,
        Ingredient.CactusFlesh,
        Ingredient.Twig,
        Ingredient.Twig
      ]
    ],
    hunger: 37.5,
    health: 20,
    sanity: 5
  }, {
    name: 'Butter Muffin',
    ingredients: [
      [
        Ingredient.ButterflyWings,
        Ingredient.Carrot,
        Ingredient.Twig,
        Ingredient.Twig
      ], [
        Ingredient.ButterflyWings,
        Ingredient.RedCapMushroom,
        Ingredient.Twig,
        Ingredient.Twig
      ], [
        Ingredient.ButterflyWings,
        Ingredient.CactusFlesh,
        Ingredient.Twig,
        Ingredient.Twig
      ]
    ],
    hunger: 37.5,
    health: 20,
    sanity: 5
  }, {
    name: 'Guacamole',
    ingredients: [
      [
        Ingredient.Moleworm,
        Ingredient.CactusFlesh,
        Ingredient.Twig,
        Ingredient.Twig
      ]
    ],
    hunger: 37.5,
    health: 20,
    sanity: 0
  }
]
