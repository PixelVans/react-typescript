
import './App.css';
import { Button } from './components/Button';
import { Counter } from './components/Counter';
import { Greet} from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Status } from './components/Status';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/userContext';
import { Box } from './components/context/Box';
import { User } from './components/context/User';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Counterr } from './components/class/Counter';
import { Profile } from './components/auth/Profile';
import { Private } from './components/auth/Private';
import { List } from './components/generics/List';
import { Toast } from './components/templateliterals/Toast';
import { CustomInput } from './components/html/CustomInput';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';

function App() {
  return (
    <div className="App">
      <Greet name='evans' />
      <Person name={'mem'} />
      <Status status='loading' />
      <Heading>
        <h1>hollow</h1>
        <p>Jenny</p>
      </Heading>
      <Oscar>
        <Heading>
          jjjj
        </Heading>
      </Oscar>
      <Button handleclick={(event) => {
        alert('hello sir')
      }} />
      <Counter />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
           <User/>
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counterr message='counting' />
      <Private isLoggedIn={true } Component={Profile}/>
      <List items={[{id:1, name: 'evans'}]} onClick={(item)=>alert(item)}/>
      <Toast position={'center'} />
      <CustomInput type='text' />
      <CustomButton variant={'primary'}  content={"custom button"}/>
      <CustomComponent name='eva'/>
    
       
    </div>
  );
}

export default App;
