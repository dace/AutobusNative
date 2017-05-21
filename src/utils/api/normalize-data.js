const normalizeStopName = name => {
  return name.replace('BL ', 'BLVD ')
    .replace('AV', 'AVE').replace('BLV ', 'BLVD ')
}

export const normalizeStopData = stopList => {
  const normalizedStops = stopList.map(stop => {
    let newStopsObj = {
      stopCode: stop.code,
      crossStreets: normalizeStopName(stop.name),
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
      route: bus.MonitoredVehicleJourney.PublishedLineName,
      currentPosition: {
        latitude: bus.MonitoredVehicleJourney.VehicleLocation.Latitude,
        longitude: bus.MonitoredVehicleJourney.VehicleLocation.Longitude,
      }
    }
    return newBusObj;
  });
  return normalizedBusList;
};