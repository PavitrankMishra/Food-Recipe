export const testUserController = (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: "Test User Data Api",
    });
  } catch (err) {
    console.log(err);
  }
};
export const testUserController2 = () => {};
