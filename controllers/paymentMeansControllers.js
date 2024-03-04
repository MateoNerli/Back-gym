const db = require("../database/models");

const paymentMeansController = {
  getAllPaymentMeans: async (req, res) => {
    try {
      const paymentMeans = await db.PaymentMean.findAll();
      res.json(paymentMeans);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  getPaymentMeanById: async (req, res) => {
    try {
      const paymentMean = await db.PaymentMean.findByPk(req.params.id);
      res.json(paymentMean);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  createPaymentMean: async (req, res) => {
    try {
      const paymentMean = await db.PaymentMean.create(req.body);
      res.json({ message: "PaymentMean created", paymentMean });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  updatePaymentMean: async (req, res) => {
    try {
      await db.PaymentMean.update(req.body, {
        where: { idPaymentMeans: req.params.id },
      });
      res.json({ message: "PaymentMean updated" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  deletePaymentMean: async (req, res) => {
    try {
      await db.PaymentMean.destroy({
        where: { idPaymentMeans: req.params.id },
      });
      res.json({ message: "PaymentMean deleted" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};
