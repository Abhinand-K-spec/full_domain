import React from 'react'
import CN from './CN/CN'
import { Provider } from 'react-redux'
import { CnStore } from './CN/CNStore'
// import Parent from './UseCallback-UseMemo/Parent'
// import AutoInc from './Reducer/AutoI/nc'
// import Count from './redux/Count'
// import { Provider } from 'react-redux'
// import { counterStore } from './redux/CountStore'
// import ToDo from './Reducer/ToDo'
// import Counter from './Reducer/Counter'
// import Fetch from './useEffect/Fetch'
// import { ThemeProvider } from './ContextApi/Theme/ThemeProvider'
// import Theme from './ContextApi/Theme/Theme'
// import Clock from './useEffect/Clock'
// import Timer from './useEffect/Timer'
// import Counter from './UseState/Counter'
// import TODO from './UseState/TODO'
// import BGText from './REF/BackgroundColor/BGText'
// import ParentRef from './Communication/PtoC/ParentRef'
// import {CounterProvider} from './ContextApi/Counter/Provider'
// import Counter from './ContextApi/Counter/Counter'


// import TextRef from './REF/TextRef/textRef'

const App = () => {
  return (
    <div>
      {/* <TextRef/> */}
      {/* <ParentRef/> */}
      {/* <BGText/> */}
      {/* <TODO/> */}
      {/* <Counter/> */}
      {/* <Timer/> */}
      {/* <Clock/> */}
      {/* <CounterProvider>
        <Counter/> 
      </CounterProvider> */}
      {/* <Fetch/> */}
      {/* <ThemeProvider>
        <Theme/>
      </ThemeProvider> */}
      {/* <Counter/> */}
      {/* <AutoInc/> */}
        {/* <ToDo/> */}
        {/* <Provider store={counterStore}>
          <Count/>
        </Provider> */}
        {/* <Parent/> */}

       {/* <BrowserRouter>
          <Routes>
            <Route path='/dynamic/' element={<Dynamic/>}/>
          </Routes>

          <Link to={'/dynamic'}>Dynamic</Link>
       </BrowserRouter> */}

       {/* <Counter/> */}
       {/* <Timer></Timer> */}
       {/* <Parent/> */}

       <Provider store={CnStore}>
        <CN/>
       </Provider>
    </div>
  )
}

export default App
