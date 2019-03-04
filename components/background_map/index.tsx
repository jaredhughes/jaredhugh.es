import * as Coordinates from 'lib/coordinates'
import debounce from 'lodash.debounce'
import * as MapboxGL from 'mapbox-gl'
import * as React from 'react'
import { setAccessToken } from '../../lib/utils/mapbox'

import 'mapbox-gl/dist/mapbox-gl.css'

interface IProps {
  coords: Coordinates.ICoord
}

type Offset = [number, number] | undefined

const MAPBOX_STYLE_URL = 'mapbox://styles/jaredhughes/cjrl3qqj56gjd2sqfjubpntrp'

const calculateOffset = (): Offset => {
  const offsetX = -(window.innerWidth * 0.1)
  const offsetY = -(window.innerHeight * 0.35)

  return [offsetX, offsetY]
}

class BackgroundMap extends React.Component<IProps, {}> {
  private marker: MapboxGL.Marker | null
  private map: MapboxGL.Map | null
  private mapContainer = React.createRef<HTMLDivElement>()
  constructor(props: IProps) {
    super(props)
    this.map = null
    this.marker = null
  }

  public componentDidMount() {
    window.addEventListener('resize', debounce(this.handleWindowResize, 800))
    const tokenIsSet = setAccessToken(process.env.MAPBOX_ACCESS_TOKEN)
    const node = this.mapContainer.current as Element

    if (tokenIsSet && node) {
      this.initMap(node)
    }

    if (this.map) {
      this.createMarker(this.props.coords)
      setTimeout(() => this.doFlyTo(this.props.coords), 1000)
    }

    this.setState({
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
    })
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.coords !== this.props.coords) {
      this.doFlyTo(nextProps.coords, { zoom: 10 })
      this.marker!.setLngLat(nextProps.coords)
    }
  }

  public handleWindowResize = () => {
    this.doFlyTo(this.props.coords)
  }

  public initMap = (node: Element) => {
    this.map = new MapboxGL.Map({
      center: [0, 0],
      container: node,
      interactive: false,
      style: MAPBOX_STYLE_URL,
      zoom: 2,
    })

    if (!this.map) {
      throw new Error('Unable to initialize map.')
    }

    this.map.scrollZoom.disable()
    this.map.doubleClickZoom.disable()
    this.map.dragPan.disable()
  }

  public createMarker = (coords: Coordinates.ICoord) => {
    const el = document.createElement('div')
    el.className = 'marker'
    this.marker = new MapboxGL.Marker(el).setLngLat(coords).addTo(this.map!)
  }

  public doFlyTo = (coords: Coordinates.ICoord, opts: any = {}) => {
    this.map!.flyTo({
      center: coords,
      offset: calculateOffset(),
      speed: 0.5,
      curve: 0.6,
      zoom: opts.zoom || 6,
    })
  }

  public render() {
    return <div className='background-map' ref={this.mapContainer} />
  }
}

export default BackgroundMap
