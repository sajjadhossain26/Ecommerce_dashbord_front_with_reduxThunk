export const timeAgo = (timestamp) => {
    const date = new Date(timestamp);
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
  
    if (interval >= 1) {
      return interval === 1 ? interval + " year ago" : interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval === 1 ? interval + " month ago" : interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval === 1 ? interval + " day ago" : interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval === 1 ? interval + " hour ago" : interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval === 1 ? interval + " minute ago" : interval + " minutes ago";
    }
    return interval === 1 ? interval + " second ago" : interval + " seconds ago";
  }
  
  // Example usage
  const mongoDBTimestamp = "2023-10-23T10:45:12.000Z"; // Replace this with your MongoDB timestamp string
  console.log(timeAgo(mongoDBTimestamp));
  
  