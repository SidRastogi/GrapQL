import { faker } from '@faker-js/faker';

const machines = [];
const sensors = [];
const GPSPositions = [];
const sensorData = [];

for (let i = 0; i < 12; i++) {
  let machineID = faker.datatype.uuid();
  let sensorids = [];
  for (let j = 0; j < 5; j++) {
    let sensorID = faker.datatype.uuid();
    sensors.push({
      id: sensorID,
      name: faker.vehicle.vin(),
    });
    sensorids.push({
      id: sensorID,
      updated: faker.date.between(
        '2022-03-01T00:00:00.000Z',
        '2022-03-25T00:00:00.000Z'
      ),
    });
    for (let l = 0; j < 50; j++) {
      sensorData.push({
        sid: sensorID,
        value: faker.datatype.boolean(),
        timestamp: faker.date.between(
          '2022-03-01T00:00:00.000Z',
          '2022-03-25T00:00:00.000Z'
        ),
      });
    }
  }
  machines.push({
    id: machineID,
    name: faker.vehicle.vehicle(),
    sensor: sensorids,
  });

  GPSPositions.push({
    mID: machineID,
    latitude: faker.address.latitude(),
    longitude: faker.address.longitude(),
    updated: faker.date.between(
      '2022-03-01T00:00:00.000Z',
      '2022-03-25T00:00:00.000Z'
    ),
  });
}

export default { machines, sensors, GPSPositions, sensorData };
