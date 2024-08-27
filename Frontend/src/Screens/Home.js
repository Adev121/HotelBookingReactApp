import React, { useEffect,useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import RoomsCards from '../components/RoomsCards';
import { DatePicker, Space } from 'antd';
import '../components/Styling.css'

// import Test from '../components/Test';
// import Loader from '../components/Loader';


function Home() {
    const [rooms,setrooms]=useState([]);
    const { RangePicker } = DatePicker;
    const [checkin,setCheckin]= useState('');
    const [checkout,setCheckout]= useState('');
    useEffect(()=>{

        const fetchData = async()=>{
            try {
                const Roomsdata =await axios.get('http://localhost:4000/api/Rooms/allRooms');
                console.log(Roomsdata.data);
                setrooms(Roomsdata.data);
                console.log(rooms);
            } catch (error) {
                console.log(error)
            }
        }
        fetchData();
        
    },[]);

    // Filter by date
    const filterbyDate= (date)=>{
        console.log(date)
        console.log(date[0].format('DD-MM-YY'));
        console.log(date[1].format('DD-MM-YY'));
        const checkinDate = date[0].format('DD-MM-YY');
        const checkoutDate = date[1].format('DD-MM-YY');
        setCheckin(checkinDate);
        setCheckout(checkoutDate);
        console.log(checkin);
        console.log(checkout);
    }
  return (
    <>
    <Navbar/>
    <div className='header-room'>
    <h1>Welcome to Rama Rooms!</h1>
    <h1>There are Total {rooms.length} Rooms</h1>
    </div>
    <div className='datePicker'>
    <Space direction="vertical" size={12}>
    <RangePicker format='DD-MM-YYYY' className='RangePicker' onChange={filterbyDate} />
  </Space>
    </div>
    <div className='card-content-room'>
    {
        rooms.map((item)=>(
            <RoomsCards key={item.id} item={item} checkin={checkin} checkout={checkout}/>
        ))
    }
    </div>
    </>
  )
}

export default Home
