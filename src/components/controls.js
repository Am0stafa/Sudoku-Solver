import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ControlsContainer = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonBase = styled.button`
  margin: 10px;
  padding: 0;
  width: 125px;
  height: 50px;
  background-color: #7f85d4;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  cursor: pointer;
  display: grid;
  place-items: center;
  color: white;
`;

const SolveButton = styled(ButtonBase)`
  height: 75px;
  font-size: 20px;
`;

const SpeedButton = styled(ButtonBase)`
  background: url('${props => props.icon}') no-repeat center center;
  background-size: 50%;
`;

const CheckButton = styled(ButtonBase)`
  width: auto;
  padding: 0 20px;
`;

const IconButton = styled(SpeedButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SolveContainer = styled.div`
  display: grid;
  place-items: center;
`;


function Controls(props) {
  const {
    checkGrid,
    grid,
    setGrid,
    solveGrid,
    setOpenPopup,
    setFoundSolution
  } = props;

  function handleCheck() {
    if (checkGrid(grid)) {
      toast.success("Correct!");
    } else {
      toast.error("Incorrect :(");
    }
  }
  

  function slowDownSolve() {
    window.solveSpeed += 25;
  }

  function speedUpSolve() {
    if (window.solveSpeed - 25 <= 0) {
      window.solveSpeed = 1;
    } else {
      window.solveSpeed -= 25;
    }
  }

  async function startSolve() {
    if (await solveGrid(grid, setGrid)) {
      setFoundSolution(true);
    } else {
      setFoundSolution(false);
    }
    setOpenPopup(true);
  }

  function endSolve() {
    window.solveSpeed = 0;
  }

  return (
    <ControlsContainer>
      <ToastContainer position="top-center" />
      <div>
        <p>Visualization</p>
        <IconButton onClick={slowDownSolve}>
          <AiOutlineMinus />
          <span>Slow Down</span>
        </IconButton>
        <SolveContainer>
          <SolveButton onClick={startSolve}>Start Solve</SolveButton>
          <SolveButton onClick={endSolve}>End Solve</SolveButton>
        </SolveContainer>
        <IconButton onClick={speedUpSolve}>
          <AiOutlinePlus />
          <span>Speed Up</span>
        </IconButton>
        <SolveButton onClick={handleCheck}>Check</SolveButton>
      </div>
    </ControlsContainer>
  );
}

export default Controls;
