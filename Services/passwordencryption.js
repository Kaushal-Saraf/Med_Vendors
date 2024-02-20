export const passwordencryption = (myPlaintextPassword) => {
  bcrypt.hash(myPlaintextPassword, process.env.BCRYPT_SALT, function (err, hash) {
    try {
      if (err) throw err;
      else return hash;
    } catch (error) {
      console.log(err);
    }
  });
};