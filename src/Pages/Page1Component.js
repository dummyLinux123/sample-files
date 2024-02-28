import FirstComponent from '../components/First-component'
import DisplayingData from '../components/Displaying-Data'
import ConditionalRendering from '../components/Conditional-Rendering'
import RenderingLists from '../components/Rendering-Lists';
import Events from '../components/Events';
import Hook1 from '../components/UseState-Hook';
import Hook2 from '../components/UseEffect-Hook';
import Parent from '../components/props/Parent';
import ContextExample from '../components/Context-Example';


const Page1 = () => {
    return ( 
        <div className='App'>
          {/* <FirstComponent/> */}
          {/* <DisplayingData/> */}
         {/*  <ConditionalRendering/> */}
          {/* <RenderingLists/> */}
          {/* <Events/> */}
          {/* <Hook1/> */}
          {/* <Hook2 /> */}
          {/* <Parent/> */}
          <ContextExample />
        </div>
     );
}
 
export default Page1;