const generateID = (limit) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

  let id = "";

  for (let i = 0; i < limit; i++) {
    const randomNumber = Math.floor(Math.random() * 35);

    id += characters[randomNumber];
  }

  return id;
};

export default generateID;
