function getUser(parent, args, context) {
  return context.prisma.user.findUnique({ where: {id: Number(args.id)} })
}

module.exports = {
  getUser
}