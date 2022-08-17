import * as path from "path";
import * as fs from "fs";

import Img from "../../model/Image";

describe("Test (Img) class", () => {
  //create image object
  const image = new Img("image", 200, 200);

  it("Test (getImgPath) method", () => {
    const imgPath = image.getImgPath("full");
    expect(imgPath).toBe(
      path.join(__dirname, "../../../assets/full/image.jpg")
    );
  }),
    it("Test (resizeImg) method", async () => {
      //check if the resized image already exists
      if (image.checkIfExist()) {
        //delet the resized image
        fs.unlinkSync(image.getImgPath("thumbs", image.width, image.height));
      }

      // create new resized image
      await image.resizeImg();

      //expect the new resized image to be created
      expect(image.checkIfExist()).toBe(true);
    });
});
