const formatDate = (timestamp) => {
    const dateObj = new Date(timestamp);
  
    // Get the abbreviated month name
    const month = dateObj.toLocaleString('default', { month: 'short' });
    // Get the day of the month
    const day = dateObj.getDate();
    // Get the full year
    const year = dateObj.getFullYear();
    // Convert the hour to 12-hour format and handle midnight case
    const hour = dateObj.getHours() % 12 || 12;
    // Ensure minutes are always two digits
    const minute = dateObj.getMinutes().toString().padStart(2, '0');
    // Determine AM or PM
    const period = dateObj.getHours() >= 12 ? 'PM' : 'AM';
  
    // Return the formatted date string
    return `${month} ${day}, ${year} at ${hour}:${minute} ${period}`;
  };
  
  const timestamp = Date.now(); // Example timestamp
  console.log(formatDate(timestamp));
  