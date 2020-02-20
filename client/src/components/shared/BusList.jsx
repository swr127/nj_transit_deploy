import React, { Component } from 'react'
import moment from 'moment'
import busLine from '../../images/bus-line.png'
import goodService from '../../images/good-service.png'
import '../../styles/buslist.css'

class BusList extends Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        let bus
        console.log(this.props)

        if (this.props.routeId) {
            bus = this.props.routeId.data.route.Buses.map((bus, id) => (
                <div className='bus-list-list' key={id}>
                    <div className='bus-list-box'>
                        <div className='bus-list-number'>Bus #{bus.id} </div>
                        <div className='bus-list-middle'>
                            <img className='bus-list-img' src={busLine} alt='Bus Line'/>
                            <div className='bus-list-platform'>{bus.platform}</div>
                            <img className='bus-list-status' src={goodService} alt='Service Status'/>
                        </div>
                        <div className='bus-list-times'>
                            <span className='bust-start-time'>{bus.departureTime, moment().format('LT')}</span>
                            <span className='bus-end-time'>{bus.arrivalTime, moment().format('LT')}</span>
                        </div>
                    </div>
                    {/* write code for status image */}
                </div>
            ))     
        }
        
        return (
            <div>
                <div className='bus-headers'> 
                    <span className='bus-headers-platform'>Platform</span>
                    <span className='bus-headers-status'>Status</span>
                </div>
                <div>{bus}</div>
            </div>
        )
    }
}

export default BusList