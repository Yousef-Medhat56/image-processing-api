import * as sharp from "sharp";
import * as path from "path";

export default class Img {
  name: unknown;
  width: unknown;
  height: unknown;

  constructor(name: unknown, width: unknown, height: unknown) {
    this.name = name;
    this.width = width;
    this.height = height;
  }

  // get the image url path
  getImgPath(folder: string) {
    return path.join(
      __dirname,
      "../../assets",
      folder,
      `${this.name as string}.jpg`
    );
  }

  //check that the given width and height are numeric videos and don't equal 0
  validateWidthAndHeight() {
    if (+(this.width as string) && +(this.height as string)) return;
    else throw { status: 400, message: "Bad Request" };
  }

  // Resize the image
  async resizeImg() {
    //First: validate the given width and height
    try {
      this.validateWidthAndHeight();
    } catch (err) {
      throw err;
    }

    //Second: Resize
    try {
      await sharp(this.getImgPath("full")) //read the given image from the "full" folder
        .resize(+(this.width as string), +(this.height as string)) //resize
        .toFile(this.getImgPath("thumbs")); //write the image to the "thumbs" folder
    } catch (err) {
      //return 404 error becuase sharp can't find the image and read it
      throw { status: 404, message: "Not Found" };
    }
  }
}
