export default {
  Query: {
    machine(parent, { where: { id, name } }, { db: { machines = [] } }, info) {
      return machines[0];
      return id
        ? machines.filter(
            (machin) => machin.id.toString() === id.toString()
          )?.[0]
        : name
        ? machines.filter((machin) => machin.name === name)?.[0]
        : null;
    },
    machines(parent, args, { db: { machines = [] } }, info) {
      return machines;
    },
    sensorData(parent, { id, from, to }, { db: { sensorData = [] } }, info) {
      return sensorData.filter(
        (data) =>
          data.sid.toString() === id.toString() &&
          new Date(data.timestamp).getTime() >= new Date(from).getTime() &&
          new Date(data.timestamp).getTime() <= new Date(to).getTime()
      );
    },
  },
  Machine: {
    sensor(parent, args, { db: { sensors = [] } }, info) {
      return parent.sensor.map((sensorData) => {
        return sensors.filter(
          (sensor) => sensor.id.toString() === sensorData.id.toString()
        )?.[0];
      });
    },
    lastKnownPosition(parent, args, { db: { GPSPositions = [] } }, info) {
      return GPSPositions.filter(
        (GPSPosition) => GPSPosition.mID.toString() === parent.id.toString()
      )?.[0];
    },
  },
  Sensor: {
    machine(parent, args, { db: { machines = [] } }, info) {
      return machines.filter((machin) =>
        machin.sensor.filter((id) => id.toString() === parent.id)
      )?.[0];
    },
  },
};
