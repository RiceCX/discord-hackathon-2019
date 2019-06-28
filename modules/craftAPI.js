const { Canvas } = require("canvas-constructor");
const { Attachment } = require("discord.js");
const dictionary = require("./CRAFTING_DICTIONARY");
const fs = require("fs-nextra");
module.exports = async (message, item) => {
  message.channel.send(new Attachment(await generate(message)));
};

const generate = async (message, craft) => {
  const Image = new Canvas(256, 132);
  Image.addImage(bg, 0, 0);
  dictionary.ITEM_CAKE.RECIPE.forEach((slot, index) => {
    dictionary.ITEM_CAKE.META.forEach((Mslot, Mindex) => {});
  });
  const bg = await fs.readFile("./Misc/Images/UI/crafting_table-gui.png");
  const diamond = await fs.readFile("./Misc/Images/textures/diamond.png");
  const stick = await fs.readFile("./Misc/Images/textures/stick.png");
  const empty = await fs.readFile("./Misc/Images/textures/empty.png");
  const diamond_pickaxe = await fs.readFile(
    "./Misc/Images/textures/diamond_pickaxe.png"
  );
  return new Canvas(256, 132)
    .addImage(bg, 0, 0)
    .addImage(diamond, 13, 13, 34, 34)
    .addImage(diamond, 49, 13, 34, 34)
    .addImage(diamond, 85, 13, 34, 34)
    .addImage(empty, 13, 49, 34, 34)
    .addImage(stick, 49, 49, 34, 34)
    .addImage(empty, 85, 49, 34, 34)
    .addImage(empty, 13, 85, 34, 34)
    .addImage(stick, 49, 85, 34, 34)
    .addImage(empty, 85, 85, 34, 34)
    .addImage(diamond_pickaxe, 193, 41, 52, 52)
    .toBufferAsync();
};
/*    13 x 13; 34-34
    [X] [] []
    [] [] []
    [] [] []

    49 x 13
    [] [X] []
    [] [] []
    [] [] []

    85 x 13
    [] [] [X]
    [] [] []
    [] [] []

    13x49
    [] [] []
    [X] [] []
    [] [] []

    49 x 49
    [] [] []
    [] [X] []
    [] [] []

    85 x 49
    [] [] []
    [] [] [X]
    [] [] []

    13 x 85
    [] [] []
    [] [] []
    [X] [] []

    49 x 85
    [] [] []
    [] [] []
    [] [X] []

    85 x 85
    [] [] []
    [] [] []
    [] [] [X]

    193 x 41
    [] [] []
    [] [] [] -> [X]
    [] [] []
    // EACDH SQURE IS 34x34
    // FOCUS ON THE BOTTOM RIGHT CORNER OF EACH BOX
*/
