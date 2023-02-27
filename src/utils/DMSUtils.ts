export const formatDMSToLatLon = (dms: string) => {
    const [lat, lon] = dms.split('/');

    const latDeg = Math.abs(parseInt(lat)/10000);
    const latMin = Math.abs(parseInt(lat) % 10000 / 100);
    const latSec = Math.abs(parseFloat(lat) % 1 * 60).toFixed(2);
    const latDec = (parseFloat(latSec) + (latMin * 60))/3600;

    const latDirection = lat.slice(-1) === ('S') ? -1 : 1;
    const latitude = (latDec + latDeg) * latDirection;

    const lonDeg = Math.abs(parseInt(lon)/10000);
    const lonMin = Math.abs(parseInt(lon) % 10000 / 100);;
    const lonSec = Math.abs(parseFloat(lon) % 1 * 60).toFixed(2);
    const lonDec = (parseFloat(lonSec) + (lonMin * 60))/3600;

    const lonDirection = lon.slice(-1) === ('W') ? -1 : 1;
    const longitude = (lonDec + lonDeg) * lonDirection;

    return { latitude, longitude }
}