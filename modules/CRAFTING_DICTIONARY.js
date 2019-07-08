const fs = require("fs-nextra");
module.exports = {
  HELP: {
    0: {
      0: 13,
      1: 13,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    1: {
      0: 49,
      1: 13,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    2: {
      0: 85,
      1: 13,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    3: {
      0: 13,
      1: 49,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    4: {
      0: 49,
      1: 49,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    5: {
      0: 85,
      1: 49,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    6: {
      0: 13,
      1: 85,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    7: {
      0: 49,
      1: 85,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    8: {
      0: 85,
      1: 85,
      DIMENSIONS: {
        0: 34,
        1: 34
      }
    },
    LAST_SLOT: {
      0: 193,
      1: 41,
      DIMENSIONS: {
        0: 52,
        1: 52
      }
    }
  },
  ITEM_NONE: {
    ITEM: () => fs.readFile("./Misc/Images/textures/none.png")
  },
  ITEM_MILK: {
    RECIPE: [],
    META: {},
    ITEM: () => fs.readFile("./Misc/Images/textures/milk_bucket.png"),
    NAME: "MILK"
  },
  ITEM_SUGAR: {
    RECIPE: ["", "", "", "", "X", "", "", "", ""],
    META: {
      0: this.NONE,
      1: this.NONE,
      2: this.NONE,
      3: this.NONE,
      4: this.SUGAR_CANE,
      5: this.NONE,
      6: this.NONE,
      7: this.NONE,
      8: this.NONE
    },
    ITEM: () => fs.readFile("./Misc/Images/textures/sugar.png"),
    NAME: "SUGAR"
  },
  ITEM_EGG: {
    RECIPE: [],
    META: {},
    ITEM: () => fs.readFile("./Misc/Images/textures/egg.png"),
    NAME: "EGG"
  },
  ITEM_WHEAT: {
    RECIPE: [],
    META: {},
    ITEM: () => fs.readFile("./Misc/Images/textures/wheat.png"),
    NAME: "WHEAT"
  },
  ITEM_CAKE: {
    RECIPE: ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
    META: {
      0: this.ITEM_MILK,
      1: this.ITEM_MILK,
      2: this.ITEM_MILK,
      3: this.ITEM_SUGAR,
      4: this.ITEM_EGG,
      5: this.ITEM_SUGAR,
      6: this.ITEM_WHEAT,
      7: this.ITEM_WHEAT,
      8: this.ITEM_WHEAT
    },
    get METAA() {
      return this.META;
    },
    ITEM: () => fs.readFile("./Misc/Images/textures/cake.png"),
    NAME: "CAKE"
  },
  set cake(name) {
    this.cake.recipe = this.RECIPE = [
      this.ITEM_MILK.NAME,
      this.ITEM_MILK.NAME,
      this.ITEM_MILK.NAME,
      this.ITEM_SUGAR.NAME,
      this.ITEM_EGG.NAME,
      this.ITEM_SUGAR.NAME,
      this.ITEM_WHEAT.NAME,
      this.ITEM_WHEAT.NAME,
      this.ITEM_WHEAT.NAME
    ];
  },
  cake: {},
  get getCake() {
    return this.cake;
  }
};
