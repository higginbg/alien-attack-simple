import styles from './styles.module.scss';

interface Props {
  attack: () => void;
  recharge: () => void;
  reset: () => void;
  attackDisabled: boolean;
  rechargeDisabled: boolean;
  resetDisabled: boolean;
  gameOver: boolean;
}

const Buttons = ({
  attack,
  recharge,
  reset,
  attackDisabled,
  rechargeDisabled,
  resetDisabled,
  gameOver
}: Props) => (
  <div className={styles.Buttons}>
    <div>
      <button
        className={styles.Recharge}
        onClick={recharge}
        disabled={rechargeDisabled}
      >
        Recharge
      </button>

      <button
        className={styles.Attack}
        onClick={attack}
        disabled={attackDisabled}
      >
        Attack
      </button>
    </div>
    
    <div style={{ marginTop: 10 }}>
      <button
        className={`${styles.Restart} ${gameOver ? 'game-over' : ''}`}
        onClick={reset}
        disabled={resetDisabled}
      >
        {gameOver ? 'Start' : 'Restart'}
      </button>
    </div>
  </div>
);

export default Buttons;
