import React from "react";

import SplashScreen from './routes/SplashScreen';
import HomePage from './routes/HomePage';
import VieDuClub from './routes/VieDuClub';
import Contact from './routes/Contact';
import TarifInscription from './routes/TarifInscription';
import PlanAccesGymnase from './routes/PlanAccesGymnase';
import ProgramPage from './routes/ProgramPage';
import ActuPage from './routes/ActuPage';
import Actuality from './routes/Actuality';
import PlanningEntrainement from './routes/PlanningEntrainement';
import N2 from './Categories/N2';
import ENTREPRISE_THALES from './Categories/ENTREPRISE_THALES';
import LOISIRS from './Categories/LOISIRS';
import M11 from './Categories/M11';
import M13_F from './Categories/M13_F';
import M13_M from './Categories/M13_M';
import M13_M2 from './Categories/M13_M2';
import M15_F from './Categories/M15_F';
import M15_M from './Categories/M15_M';
import M18_F from './Categories/M18_F';
import M18_M from './Categories/M18_M';
import OLD_STARS from './Categories/OLD_STARS';
import PERI_SCOLAIRE from './Categories/PERI_SCOLAIRE';
import PRENAT_F from './Categories/PRENAT_F';
import REGIONALE_M from './Categories/REGIONALE_M';
import VOLLEY_INSTIT from './Categories/VOLLEY_INSTIT';
import VOLLEY_POUR_TOUS from './Categories/VOLLEY_POUR_TOUS';
import EquipeSenior from "./routes/EquipeSenior";
import CoachPlayerPage from "./routes/Coach-PlayerPage";

import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() { 
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/" exact component={SplashScreen}/>
            <Route path="/Home" exact component={HomePage}/>
            <Route path="/VieDuClub" exact component={VieDuClub}/>
            <Route path="/Contact" exact component={Contact}/>
            <Route path="/TarifInscription" exact component={TarifInscription}/>
            <Route path="/PlanAccesGymnase" exact component={PlanAccesGymnase}/>
            <Route path="/ProgramPage" exact component={ProgramPage}/>
            <Route path="/ActuPage" exact component={ActuPage}/>
            <Route path="/ActuPage/:id" exact component={Actuality} />
            <Route path="/PlanningEntrainement" exact component={PlanningEntrainement} />
            <Route path="/N2" exact component={N2}/>
            <Route path="/PRENAT_F" exact component={PRENAT_F}/>
            <Route path="/REGIONALE_M" exact component={REGIONALE_M}/>
            <Route path="/LOISIRS" exact component={LOISIRS}/>
            <Route path="/M11" exact component={M11}/>
            <Route path="/M13_F" exact component={M13_F}/>
            <Route path="/M13_M" exact component={M13_M}/>
            <Route path="/M13_M2" exact component={M13_M2}/>
            <Route path="/M15_F" exact component={M15_F}/>
            <Route path="/M15_M" exact component={M15_M}/>
            <Route path="/M18_F" exact component={M18_F}/>
            <Route path="/M18_M" exact component={M18_M}/>
            <Route path="/ENTREPRISE_THALES" exact component={ENTREPRISE_THALES}/>
            <Route path="/OLD_STARS" exact component={OLD_STARS}/>
            <Route path="/PERI_SCOLAIRE" exact component={PERI_SCOLAIRE}/>
            <Route path="/VOLLEY_INSTIT" exact component={VOLLEY_INSTIT}/>
            <Route path="/VOLLEY_POUR_TOUS" exact component={VOLLEY_POUR_TOUS}/>
            <Route path="/EquipeSenior/:id" exact component={EquipeSenior} />
            <Route path="/EquipeSenior/:id/:id" exact component={CoachPlayerPage} />
          </Switch>
      </Router>
                
    </div>
  );  
}

export default App;