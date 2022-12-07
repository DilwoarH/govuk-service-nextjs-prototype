// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = { id: number, address: string }[]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let results : Data = []

  if (req.query.postcode === "E1 8QS") {
    results = [
      { id: 1, address: "Government Digital Service, 10 Whitechapel High St, London E1 8QS" },
      { id: 2, address: "The Grind, 10 Whitechapel High St, London E1 8QS" },
      { id: 3, address: "The empty 6th floor, 10 Whitechapel High St, London E1 8QS" },
    ]
  } else if (req.query.postcode && req.query.postcode.length > 1) {
    results = [
      { id: 1, address: "Some fancy place, 1 Downing street, London POST_CODE_HERE" },
    ]
  }

  res.status(200).json(results)
}
