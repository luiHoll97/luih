
import { Box } from "@chakra-ui/react"
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import About from './routes/About'
import { Routes, Route } from "react-router-dom"


export const App = () => (
    <>
    <Box bg={'beige'} minH={'100vh'} display={'flex'} flexDirection={'column'}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Box>
    </>
)
