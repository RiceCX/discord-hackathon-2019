const { Canvas } = require("canvas-constructor");
const { Attachment } = require("discord.js");
const Dictionary = require("../Misc/META/cake");
const D = require("../Misc/DIMENTIONS");
const fs = require("fs-nextra");
module.exports = async (message, item) => {
  message.channel.send(new Attachment(await gen()));
};

const gen = async () => {
  const bg = await fs.readFile("./Misc/Images/UI/crafting_table-gui.png");
  const Image = await new Canvas(256, 132);
  Image.addImage(bg, 0, 0);

  await Dictionary.recipe.forEach(async (slot, i) => {
    console.log(slot);
    const imag = await fs.readFile(slot);
    await Image.addImage(
      imag,
      D[i][0],
      D[i][1],
      D[i].DIMENSIONS[0],
      D[i].DIMENSIONS[1]
    );
  });
  await Image.addImage(
    await fs.readFile(Dictionary.item),
    D.LAST_SLOT[0],
    D.LAST_SLOT[1],
    D.LAST_SLOT.DIMENSIONS[0],
    D.LAST_SLOT.DIMENSIONS[1]
  );
  const GeneratedImage = await Image.toBufferAsync();
  return GeneratedImage;
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
