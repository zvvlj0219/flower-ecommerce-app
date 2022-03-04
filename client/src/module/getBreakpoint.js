import { getWindowSize } from './getWindowSize'

export const getBreakpoint = () => {
  const { width } = getWindowSize()

  switch (true) {
    case width < 350:
      return 'xs'
    case width > 350 && width < 600:
      return 'small'

    case width > 600 && width < 900:
      return 'medium'

    case width > 900 && width < 1200:
      return 'large'

    case width > 1200:
      return 'xl'

    default:
      return 'medium'
  }
}
