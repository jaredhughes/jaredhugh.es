import { GOOGLE_FONTS, GOOGLE_FONTS_BASE_URL } from '@lib/constants'
import React from 'react'

const LinkFonts: React.SFC<{}> = () => {
  const url = GOOGLE_FONTS.join('|')

  return <link href={GOOGLE_FONTS_BASE_URL + url} rel='stylesheet' />
}

export default LinkFonts
