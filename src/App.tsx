
import { Box } from "@chakra-ui/react"
import Home from './routes/Home'
import Portfolio from './routes/Portfolio'
import { Routes, Route } from "react-router-dom"


export const App = () => (
    <>
    <Box bg={'beige'}>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </Box>
    </>
)
