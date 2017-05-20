export const normalizeStopData = stopList => {
  const normalizedStops = stopList.map(stop => {
    let newStopsObj = {
      stopCode: stop.code,
      crossStreets: stop.name,
      latitude: stop.lat,
      longitude: stop.lon,
      direction: stop.direction,
      routes: [],
    };
    stop.routes.forEach(route => {
      newStopsObj.routes.push({
        color: route.color,
        id: route.id,
        description: route.description,
        longName: route.longName,
        busName: route.shortName,
        schedule: route.url,
      })
    });
    return newStopsObj;
  });
  return normalizedStops;
};

export const normalizeBusesData = buses => {
  const normalizedBusList = buses.Siri.ServiceDelivery.StopMonitoringDelivery[0].MonitoredStopVisit.map(bus => {
    const newBusObj = {
      destination: bus.MonitoredVehicleJourney.DestinationName,
      distanceAway: bus.MonitoredVehicleJourney.MonitoredCall.Extensions.Distances.PresentableDistance,
      stopsAway: bus.MonitoredVehicleJourney.MonitoredCall.Extensions
      .Distances.StopsFromCall,
      busRoute: bus.MonitoredVehicleJourney.PublishedLineName,
    }
    return newBusObj;
  });
  return normalizedBusList;
};