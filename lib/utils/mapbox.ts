import MapboxGL from 'mapbox-gl'

export const setAccessToken = (token: string | undefined) => {
  if (token) {
    (MapboxGL as any).accessToken = token
    return true
  } else {
    throw new Error('Mapbox token is unset.')
  }
}
