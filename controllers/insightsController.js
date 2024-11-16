const { generateInsight } = require('../services/insightService');

const getInsights = async (req, res) => {
  try {
    const insights = await generateInsight(req.user.id);
    res.json(insights);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getInsights };
