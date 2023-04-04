import React, { useEffect, useState } from 'react'
import { Card , Row , Col , Input } from 'antd'
import millify from 'millify'
import { useGetCryptosQuery } from '../services/cryptoApi'
import { Link } from 'react-router-dom'
const Cryptocurrencies = ({simplified}) => {

  const counter = simplified ? 10 : 100
  const {data : cryptosList , isFetching} = useGetCryptosQuery(counter)

  const [cryptos , setCryptos] = useState()
  const [searchTerm , setsearchTerm] = useState()
  useEffect(()=>{
    setCryptos(cryptosList?.data?.coins)
    if(searchTerm){
   const filteredData = cryptosList?.data?.coins.filter(data => data.name.toLowerCase().includes(searchTerm.toLowerCase()))
   setCryptos(filteredData)
   
    }
  },[cryptosList , searchTerm])
  
  return (
    <>
    {!simplified && ( <div className='search-crypto'>
    <Input  placeholder='Search Cryptocurrency' onChange={(e) => setsearchTerm(e.target.value)}/>
    </div>)}
   
    <Row gutter={[32 , 32]} className="crypto-card-container">
    {cryptos && (cryptos.map(currency => (
        <Col xs={24} sm={12} lg={6} className='crypto-card' key ={currency.id}>
        <Link to ={`/crypto${currency.id}`}>
        <Card 
        title ={`${currency.rank} ${currency.name}`}
        extra = {<img  className='crypto-image' src={currency.iconUrl}/>}
        hoverable>
        <p>Price : {millify(currency.price)}</p>
        <p>Market cap : {millify(currency.marketCap)}</p>
        <p>Daily Change : {millify(currency.change)}</p>
      
        </Card>
        </Link>
        </Col>
      )))}
    
    </Row>
    </>
  )
}

export default Cryptocurrencies

//