import Navbar from "./Navbar";
import "./App.css";
import { Layout, Space,  } from "antd";
import { Route , Routes , Link  } from "react-router-dom";
import Homepage from "./components/Homepage";
import Exchanges from "./components/Exchanges";
import Cryptocurrencies from "./components/Cryptocurrencies";
import CryptoDetails from "./components/CryptoDetails";
import News from "./components/News";
import Typography from "antd/es/typography/Typography";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar /> 
      </div>
      <div className="main">
      <Layout>
        <div className="routes">
          <Routes>
          
            <Route exact path="/" element={<Homepage/>}>
              
            </Route>
            <Route exact path="/exchanges" element={<Exchanges />}>
              
            </Route>
            <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}>
              
            </Route>
            <Route exact path="/crypto/:coinId" element={<CryptoDetails />}>
              
            </Route>
            <Route exact path="/news" element={<News />}>
              
            </Route>
            </Routes>
        </div>
        </Layout>
      
      <div className="footer">
      <Typography.Title level={5} style={{color:'white' , textAlign:'center'}}>
      
      Cryptoverse <br/>
      All Rights Reserved
      
      </Typography.Title>
      <Space>
      <Link to='/'>Home</Link>
      <Link to='/exchanges'>Exchanges</Link>
      <Link to='/news'>News</Link>
      </Space>
      </div>
    </div>
    </div>
  );
}

export default App;
