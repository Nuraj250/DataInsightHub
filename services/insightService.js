const Data = require('../models/dataModel');

const generateInsight = async (userId) => {
  // Fetch data based on userId
  const data = await Data.find({ userId });

  // Initialize cumulative variables to compute averages or totals
  let totalSteps = 0;
  let totalCalories = 0;
  let totalSleep = 0;
  let totalHeartRate = 0;
  let totalActivityLevel = 0;
  let daysCount = data.length;

  // Loop through the user's data to accumulate totals and calculate averages
  data.forEach(item => {
    totalSteps += item.data.steps || 0;
    totalCalories += item.data.calories || 0;
    totalSleep += item.data.sleepHours || 0;
    totalHeartRate += item.data.heartRate || 0;
    totalActivityLevel += item.data.activityLevel || 0;
  });

  // Calculate averages
  const avgSteps = totalSteps / daysCount;
  const avgCalories = totalCalories / daysCount;
  const avgSleep = totalSleep / daysCount;
  const avgHeartRate = totalHeartRate / daysCount;
  const avgActivityLevel = totalActivityLevel / daysCount;

  // Generate personalized insights based on the user's data
  let insights = [];

  // Activity Level Insights
  if (avgActivityLevel < 3) {
    insights.push('Your average activity level is quite low. Consider increasing your physical activity for better health.');
  } else if (avgActivityLevel >= 3 && avgActivityLevel <= 5) {
    insights.push('You have a moderate activity level. Try to engage in more strenuous activities to improve your fitness.');
  } else {
    insights.push('Great job! Your activity level is high. Keep up the great work and consider diversifying your activities.');
  }

  // Steps Insights
  if (avgSteps < 5000) {
    insights.push('You are not meeting the recommended daily step goal of 10,000 steps. Try to walk more.');
  } else if (avgSteps >= 5000 && avgSteps < 10000) {
    insights.push('You are doing well with your steps! Aim for 10,000 steps daily for optimal health.');
  } else {
    insights.push('Great job! You are meeting or exceeding the daily step goal of 10,000 steps!');
  }

  // Calorie Insights
  if (avgCalories > 2500) {
    insights.push('Your average calorie intake is higher than recommended. Consider reviewing your diet for healthier options.');
  } else if (avgCalories < 2000) {
    insights.push('Your calorie intake is on the lower side. Ensure you are getting enough calories for energy.');
  } else {
    insights.push('Your calorie intake is within the recommended range. Keep maintaining a balanced diet.');
  }

  // Sleep Insights
  if (avgSleep < 7) {
    insights.push('You are getting less than the recommended 7-9 hours of sleep. Try to improve your sleep quality and duration.');
  } else if (avgSleep >= 7 && avgSleep <= 9) {
    insights.push('Your sleep duration is healthy. Keep it up for optimal recovery and overall well-being.');
  } else {
    insights.push('You are getting more sleep than needed. Ensure it doesn’t affect your daily routine.');
  }

  // Heart Rate Insights
  if (avgHeartRate > 100) {
    insights.push('Your average heart rate is higher than expected. Consider consulting with a healthcare professional.');
  } else if (avgHeartRate >= 60 && avgHeartRate <= 100) {
    insights.push('Your heart rate is within the healthy range. Keep up the good work with your fitness activities.');
  } else {
    insights.push('Your heart rate is on the lower side. Ensure you are monitoring your fitness levels regularly.');
  }

  return insights;
};

module.exports = { generateInsight };

