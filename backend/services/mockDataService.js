function generateMockData() {
    return {
      timestamp: new Date().toISOString(),
      active_users: Math.floor(Math.random() * 100),
      page_views: Math.floor(Math.random() * 200),
      avg_session_duration: parseFloat((Math.random() * 5).toFixed(1)),
    };
  }
  
module.exports = { generateMockData };
  