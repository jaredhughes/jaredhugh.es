import React from 'react'
import { constants } from '../../lib/utils'

const createInlineJs = () => ({
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments)
    };
    gtag('js', new Date());
    gtag('config', '${constants.GTM_CONTAINER_ID}');
  `,
})

export default () =>
  constants.IS_PROD ? (
    <>
      <script async src={constants.GTM_SRC_URL} />
      <script dangerouslySetInnerHTML={createInlineJs()} />
    </>
  ) : null
