const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;

async function signup(parent, args, context, info) {
  let picture = '';
  try {
    try {
      const fileStr = await cloudinary.uploader.upload(
      args.picture, {upload_preset: 'stagewood'});
      picture = fileStr.url;
    } catch (error) {
      console.log('picture problem: ', error)
    }
    
    const password = await bcrypt.hash(args.password, 8)
    const user = await context.prisma.user.create({ data: { ...args, password, picture } })
  
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
    return {
      token,
      user,
    }
  } catch (error) {
    console.log(error)
  }
  
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({ where: { email: args.email } })
  if (!user) {
    throw new Error('No such user found')
  }
  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
  return {
    token,
    user,
  }
}

module.exports = {
  signup,
  login,
}