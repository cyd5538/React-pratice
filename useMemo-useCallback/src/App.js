import React, {useState, useCallback} from 'react'
import Box from './Box';
const App = () => {
    const [size, setSize] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return{
            backgroundColor: 'purple',
            width : `${size}px`,
            height : `${size}px`
        }
    },[size])
  return (
    <div style={{
        background: isDark ? "black" : "white",
    }}>
        <input type="number" value={size} onChange={(e) => setSize(e.target.value)}/>
        <button onClick={() => setIsDark(!isDark)}>Change</button>
        <Box createBoxStyle={createBoxStyle} />
    </div>
  )
}

export default App