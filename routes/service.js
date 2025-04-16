
const express = require("express");
const Service = require("../models/Service");
const router = express.Router();

router.get("/services", async (req, res) => {
  const services = await Service.find();
  res.json(services);
});

router.post("/services", async (req, res) => {
  const service = new Service(req.body);
  await service.save();
  res.json(service);
});

router.post("/services/:id/avaliar", async (req, res) => {
  const { comment, stars, user } = req.body;
  const service = await Service.findById(req.params.id);
  if (!service) return res.status(404).json({ error: "Serviço não encontrado" });
  service.comments.push({ comment, stars, user });
  service.rating = service.comments.reduce((acc, c) => acc + c.stars, 0) / service.comments.length;
  await service.save();
  res.json(service);
});

module.exports = router;
