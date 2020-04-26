import { db } from 'src/lib/db'

export const datasets = () => {
  return db.dataset.findMany()
}

export const dataset = ({ id }) => {
  return db.dataset.findOne({
    where: { id },
  })
}

export const createDataset = ({ input }) => {
  return db.dataset.create({
    data: input,
  })
}

export const updateDataset = ({ id, input }) => {
  return db.dataset.update({
    data: input,
    where: { id },
  })
}

export const deleteDataset = ({ id }) => {
  return db.dataset.delete({
    where: { id },
  })
}
