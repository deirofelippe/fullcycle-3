import type { NextApiRequest, NextApiResponse } from 'next'
import { Product, products } from '../../../model'

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<Product>
) {
   const { slug } = req.query
   const product = products.find(p => p.slug === slug)
   res.status(200).json(product!);
}
