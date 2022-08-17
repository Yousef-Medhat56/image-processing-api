import Img from "../model/Image";
import { Request, Response } from "express";

const get_image = async (req: Request, res: Response) => {
  try {
    const { filename, width, height } = req.query;

    //create image object
    const image = new Img(filename, width, height);
    // check if the filename is given
    if (filename) {
      //check if width and height are given
      if (width && height) {
        //check if the image doesn't exist
        if (!image.checkIfExist()) {
          await image.resizeImg(); //resize the image then write ot to the "thumbs" folder
        }

        res.sendFile(image.getImgPath("thumbs", image.width, image.height)); //send the image from the "thumbs" folder
      } else if (width || height) {
        //check if only the width or the height are given
        throw { status: 400, message: "Bad Request" }; //throw 400 error
      } else {
        //if only the filename is given without width or height
        //send the image from the "full" folder
        res.status(200).sendFile(image.getImgPath("full"), (err) => {
          err && res.status(404).send("Not Found"); //if the filename is wrong, throw 404 error
        });
      }
    }
    //if the filename is not given
    else {
      throw {
        status: 400,
        message:
          "Try going to <a href='/image?filename=image&width=300&height=300'>/image?filename=image&width=300&height=300</a>",
      };
    }
  } catch (err) {
    res
      .status((err as { status: number; message: string }).status)
      .send((err as { status: number; message: string }).message);
  }
};

export { get_image };
