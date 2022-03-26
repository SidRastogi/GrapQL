export default /* GraphQL */ `
  type Query {
    machine(where: MachineWhereUniqInput!): Machine
    machines: [Machine!]
    sensorData(id: ID!, from: DateTime!, to: DateTime!): [SensorDataPoint]
  }

  input MachineWhereUniqInput {
    id: ID
    name: String
  }

  type Machine {
    id: ID
    name: String!
    sensor: [Sensor!]
    lastKnownPosition: GPSPosition
  }

  type Sensor {
    id: ID
    name: String!
    machine: Machine!
  }

  type GPSPosition {
    latitude: Latitude!
    longitude: Longitude!
  }

  type SensorDataPoint {
    timestamp: DateTime!
    value: Float!
  }
`;
