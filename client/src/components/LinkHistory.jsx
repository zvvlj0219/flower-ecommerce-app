import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const LinkHistory = ({ linkdata }) => {
  return (
    <div className='link_wrapper'>
      {
        linkdata.map(data => (
          <div key={data.path}>
            <Link
              to={data.path}
            >
              {data.page}
            </Link>
            <span>&rang;</span>
          </div>
        ))
      }
    </div>
  )
}

LinkHistory.defaultProps = {
  linkdata: []
}

LinkHistory.propTypes = {
  linkdata: PropTypes.arrayOf(PropTypes.object)
}

export default LinkHistory
