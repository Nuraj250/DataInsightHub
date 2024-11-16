const processData = (data) => {
    // Example of more complex data processing logic based on health-related data
    let totalSteps = 0;
    let totalCalories = 0;
    let totalSleep = 0;
    let averageHeartRate = 0;
    let daysCount = data.length;
  
    // Loop through the data to accumulate totals and calculate averages
    data.forEach(item => {
      totalSteps += item.data.steps || 0;
      totalCalories += item.data.calories || 0;
      totalSleep += item.data.sleepHours || 0;
      averageHeartRate += item.data.heartRate || 0;
    });
  
    // Calculate averages
    averageHeartRate = averageHeartRate / daysCount;
  
    // Generate personalized insights based on the user's data
    let insights = [];
    
    // Step Insights
    if (totalSteps < 5000) {
      insights.push('You are currently not meeting the recommended daily step goal of 10,000 steps. Try to walk more.');
    } else if (totalSteps >= 5000 && totalSteps < 10000) {
      insights.push('You are doing well with your steps! Aim for 10,000 steps daily for optimal health.');
    } else {
      insights.push('Great job! You are meeting or exceeding the daily step goal of 10,000 steps!');
    }
  
    // Calorie Insights
    if (totalCalories > 2500) {
      insights.push('You are consuming more calories than the average daily requirement. Consider adjusting your diet.');
    } else {
      insights.push('Your calorie intake is within a healthy range. Keep monitoring your consumption for balanced nutrition.');
    }
  
    // Sleep Insights
    if (totalSleep < 7) {
      insights.push('You are getting less than the recommended 7-9 hours of sleep. Try to improve your sleep habits.');
    } else if (totalSleep >= 7 && totalSleep <= 9) {
      insights.push('You are getting a healthy amount of sleep. Keep it up!');
    } else {
      insights.push('You are sleeping more than recommended. Ensure it does not affect your daily routine.');
    }
  
    // Heart Rate Insights
    if (averageHeartRate > 100) {
      insights.push('Your average heart rate is higher than expected. Consider consulting a doctor or adjusting your exercise routine.');
    } else if (averageHeartRate >= 60 && averageHeartRate <= 100) {
      insights.push('Your heart rate is in a healthy range. Keep maintaining your physical activities.');
    } else {
      insights.push('Your heart rate is below average. This could be a sign of good fitness or an issue, so monitor it closely.');
    }
  
    // Return processed insights
    return insights;
  };
  
  module.exports = { processData };
  