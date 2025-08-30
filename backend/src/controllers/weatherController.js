class WeatherController {
    async orderWeather(req, res) {
        res.status(200).json({ message: "Weather ordered successfully!" });
    }

    async verifyLand(req, res) {
        res.status(200).json({ message: "Land verified successfully!" });
    }

    async getRecommendations(req, res) {
        res.status(200).json({ message: "Recommendations retrieved successfully!" });
    }
}

module.exports = new WeatherController();
