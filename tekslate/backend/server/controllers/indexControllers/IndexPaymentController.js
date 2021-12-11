import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Payments } from "../../models";
const Razorpay = require("razorpay");
const uuid = require("node-uuid");
const razorpay = new Razorpay({
  key_id: "rzp_test_Si3LnUFZbRZgei",
  key_secret: "1zW4uRcVn4Oa2GzGb773NnWJ",
});
var Publishable_Key =
  "pk_test_51JCblNSHjLkba7i35s9DDiKqXI434VkDLJWVS8GGSKkhvMKDNUlqKVYRWcruGEr0DDLyRgIUvI2bKkaHuR2iGgIX00NaXsBB8H";
var Secret_Key =
  "sk_test_51JCblNSHjLkba7i3JrGiEXlCYfJJdQkj7Xtr9KZfkCtQFkrzIg13Ezm9DXWcpd6xJ0ENhmT9OVmqdY4rrrTmfxQJ00km3vrirZ";

const stripe = require("stripe")(Secret_Key);

export default {
  async create_order_razorpay(req, res) {
    const options = {
      amount: parseFloat(req.body.price) * 100,
      currency: "INR",
      receipt: uuid.v4(), //any unique id
      payment_capture: 1, //optional
    };
    try {
      const response = await razorpay.orders.create(options);

      res.json({
        order_id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Unable to create order");
    }
  },
  async insert_payments(req, res) {
    try {
      const up_data = await Payments.create({
        transaction_id: req.body.payment_id,
        name: req.body.name,
        email: req.body.email,
        currency: "INR",
        address: req.body.address1,
        amount: parseFloat(req.body.price),
        phone_number: req.body.phoneNumber,
        mode: req.body.mode,
      });
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        up_data,
      });
    } catch (err) {
      console.log(err);
    }
  },

  async create_order_stripe(req, res) {
    const options = {
      amount: req.body.amount,
      currency: "INR",
      receipt_email: req.body.email,
    };
    try {
      const charge = await stripe.paymentIntents.create(options);
      console.log(charge);
      res.status(200).json({
        client_secret: charge,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send("Unable to create order");
    }
  },
  async stripe_webhook(req, res) {
    const event = req.body;
    console.log(req.body);
    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntent = event.data.object;
        console.log(paymentIntent);

        // Then define and call a method to handle the successful payment intent.
        // handlePaymentIntentSucceeded(paymentIntent);
        break;
      case "payment_intent.payment_failed":
        console.log("Failed");
        break;
      // ... handle other event types
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event
    res.json({ received: true });
  },
};
