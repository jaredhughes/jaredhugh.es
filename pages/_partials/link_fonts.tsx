import React from 'react'
import { GOOGLE_FONTS, GOOGLE_FONTS_BASE_URL } from '../../lib/utils/constants'

const LinkFonts: React.SFC<{}> = () => {
  const url = GOOGLE_FONTS.join('|')

  return <link href={GOOGLE_FONTS_BASE_URL + url} rel='stylesheet' />
}

export default LinkFonts
