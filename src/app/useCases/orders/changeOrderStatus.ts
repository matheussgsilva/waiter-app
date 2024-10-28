import { Request, Response } from "express";

import { Order } from "../../models/Order";


export async function changeOrderStatus(req: Request, res: Response) {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    await Order.findByIdAndUpdate(orderId, { status }, { new: true });

    res.sendStatus(204);
  } catch (error) {
    console.log(error)
    res.status(500).json({
      error: 'Internal server error!'
    });
  }
}
