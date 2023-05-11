function calculateWeight (req, res) {
  const { gender, height, age } = req.body

  const multiple = gender === 'm' ? 0.9 : 0.7
  const medium = height - 100 + ((age / 10) * multiple)

  const minimumWeight = 18.5 * Math.pow(height / 100, 2)
  // const medium = (18.5 * Math.pow(height / 100, 2) + (24.9 * Math.pow(height / 100, 2))) / 2
  const overWeight = (25 * Math.pow(height / 100, 2) + (29.9 * Math.pow(height / 100, 2))) / 2
  const maximumWeight = 30 * Math.pow(height / 100, 2)

  const data = {
    minimumWeight,
    medium,
    overWeight,
    maximumWeight
  }

  return res.status(200).json(data)
}

export default calculateWeight
