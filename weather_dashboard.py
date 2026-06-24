# Import requests library to fetch data from API
import requests

# Import matplotlib library to create graphs
import matplotlib.pyplot as plt


# Enter your OpenWeather API key
API_KEY = "e4155859be2c4fe3e9d662e7b2ec615d"

# Enter city name
CITY = "Pune"


# Create API URL with city, API key and Celsius unit
url = (
    f"https://api.openweathermap.org/data/2.5/weather?"
    f"q={CITY}&appid={API_KEY}&units=metric"
)


# Send request to OpenWeather API
response = requests.get(url)

# Convert response into JSON format
data = response.json()


# Print complete API response (useful for debugging)
print(data)


# Check whether API request is successful
if response.status_code == 200:

    # Extract temperature from API response
    temperature = data["main"]["temp"]

    # Extract humidity value
    humidity = data["main"]["humidity"]

    # Extract wind speed
    wind = data["wind"]["speed"]


    # Labels for graph
    labels = ["Temperature", "Humidity", "Wind"]

    # Corresponding values
    values = [temperature, humidity, wind]


    # Create bar chart
    plt.bar(labels, values)


    # Add graph title
    plt.title("Weather Dashboard")


    # Add label on Y-axis
    plt.ylabel("Values")


    # Display graph
    plt.show()

# If API request fails
else:

    # Show error message
    print("API Error:", data["message"])