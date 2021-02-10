function feed(parent, args, context, info) {
  return context.prisma.user.findMany()
}

module.exports = {
  feed,
}