import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@xample.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@xample.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Neeraj Yadav',
    email: 'neeraj@xample.com',
    password: bcrypt.hashSync('123456', 10),
  }
]

export default users