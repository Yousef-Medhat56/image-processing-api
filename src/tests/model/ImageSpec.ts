import * as path from "path";
import Img from "../../model/Image";

describe("Test (Img) class", () => {
    //create image object
    const image = new Img("image", 200, 200);
  
    it("Test (getImgPath) method", () => {
      const imgPath = image.getImgPath("full");
      expect(imgPath).toBe(
        path.join(__dirname, "..","..", "assets/full/image.jpg")
      );
    });
  });