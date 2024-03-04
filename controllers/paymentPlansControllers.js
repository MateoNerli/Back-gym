const db = require("../database/models");

const paymentPlansController = {
  getAllPaymentPlans: async (req, res) => {
    try {
      const paymentPlans = await db.PaymentPlans.findAll();
      res.json(paymentPlans);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  getPaymentPlanById: async (req, res) => {
    try {
      const paymentPlan = await db.PaymentPlans.findByPk(req.params.id);
      res.json(paymentPlan);
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  createPaymentPlan: async (req, res) => {
    try {
      const paymentPlan = await db.PaymentPlans.create(req.body);
      res.json({ message: "PaymentPlan created", paymentPlan });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  updatePaymentPlan: async (req, res) => {
    try {
      await db.PaymentPlans.update(req.body, {
        where: { idPaymentPlans: req.params.id },
      });
      res.json({ message: "PaymentPlan updated" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
  deletePaymentPlan: async (req, res) => {
    try {
      await db.PaymentPlans.destroy({
        where: { idPaymentPlans: req.params.id },
      });
      res.json({ message: "PaymentPlan deleted" });
    } catch (error) {
      res.json({ message: error.message });
    }
  },
};

module.exports = paymentPlansController;
