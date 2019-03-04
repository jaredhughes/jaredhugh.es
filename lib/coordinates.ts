//
// @todo: iOS app in React Native to persist coordinates
// from phone locations services, once data store configured.
//

type Cities =
  | 'buenosaires'
  | 'bogota'
  | 'lapaz'
  | 'lima'
  | 'london'
  | 'medellin'
  | 'summerdale'
  | 'patagonia'

export interface ICoord {
  lat: number
  lng: number
}

export type ICoordinates = { [key in Cities]: ICoord }

export const coordinates: ICoordinates = {
  buenosaires: {
    lat: -34.603,
    lng: -58.381,
  },
  bogota: {
    lat: 4.711,
    lng: -74.072,
  },
  lapaz: {
    lat: -16.489,
    lng: -68.119,
  },
  lima: {
    lat: -12.046,
    lng: -77.042,
  },
  london: {
    lat: 51.489,
    lng: -0.144,
  },
  medellin: {
    lat: 6.244,
    lng: -75.581,
  },
  summerdale: {
    lat: 30.4877,
    lng: -87.6997,
  },
  patagonia: {
    lat: -50.338,
    lng: -72.264,
  },
}

const CURRENT_CITY = process.env.CURRENT_CITY as Cities

export const current = coordinates[CURRENT_CITY] || coordinates.london

export default coordinates
