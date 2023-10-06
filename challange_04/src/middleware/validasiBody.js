const validasiBody = (req, res, next) => {
    const { name, rentPerDay, capacity, description, availableAt, type } =
      req.body;
    const image = req.file.path;
    const imageName = image.replace("public\\", "");
    const image_url = `${req.protocol}://${req.get("host")}/${imageName}`;

    if (
      !name ||
      !rentPerDay ||
      !capacity ||
      !description ||
      !availableAt ||
      !type ||
      !image
    ) {
      return res
        .status(400)
        .json({ message: "Please make sure field is a valid" });
    }
    
    req.body = {name, rentPerDay, capacity, description, availableAt, type, imageName, image_url};
    next();
}

module.exports = {validasiBody};