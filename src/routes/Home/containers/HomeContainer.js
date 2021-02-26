import {connect} from 'react-redux'
import Home from  '../components/Home'
import {setName} from '../module/home'

const mapStateToProps = (state) => ({
name: state.home.name
}) 

const mapActionCreator = {
    setName
}

export default connect(mapStateToProps, mapActionCreator)(Home)