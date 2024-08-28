export function getDistance(coords1, coords2) {
    const toRadian = (angle) => (Math.PI / 180) * angle;
    const distance = (a, b) => (Math.PI / 180) * (a - b);
  
    const R = 6371; // Earth radius in kilometers
    const dLat = distance(coords2.latitude, coords1.latitude);
    const dLon = distance(coords2.longitude, coords1.longitude);
  
    const lat1 = toRadian(coords1.latitude);
    const lat2 = toRadian(coords2.latitude);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    return R * c * 1000; // returns distance in meters
  }
  