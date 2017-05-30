# Autobus

![autobus screens](./docs/assets/images/screens_01.jpg)

Autobus provides you with live updates of NYC's MTA buses for nearby stops. The app automatically uses your phone's GPS to pull in the nearest bus stops and all incoming routes/buses that service that stop.

## APIs

Autobus makes use of two public APIs provided by the NYC MTA. 

[One Bus Away API](http://bustime.mta.info/wiki/Developers/OneBusAwayRESTfulAPI) - utilized with the mobile device's GPS to pull in a number of nearby bus stops.

[SIRI Standard API](http://bustime.mta.info/wiki/Developers/SIRIIntro) - provides real-time data for stop monitoring (what bus routes are served and real-time updates on approaching buses).

# Locating nearby stops

Autobus uses your current GPS latitude and longitude coordinates to make a call to the **One Bus Away API**