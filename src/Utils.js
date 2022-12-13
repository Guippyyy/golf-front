export function getAPIUrl() {
    if (process.env.NODE_ENV === 'production' && window.location.hostname !== 'localhost') {
        return "https://two223-webservices-guippyyy.onrender.com"
    } else {
        return "http://localhost:3001"
    }
}