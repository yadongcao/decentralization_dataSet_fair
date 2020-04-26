import { db } from 'src/lib/db'

export const pools = () => {
  return db.pool.findMany()
}

export const pool = ({ id }) => {
  return db.pool.findOne({
    where: { id },
  })
}

export const createPool = ({ input }) => {
  return db.pool.create({
    data: input,
  })
}

export const updatePool = ({ id, input }) => {
  return db.pool.update({
    data: input,
    where: { id },
  })
}

export const deletePool = ({ id }) => {
  return db.pool.delete({
    where: { id },
  })
}
