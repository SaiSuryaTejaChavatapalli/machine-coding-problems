type BlockProps = {
  value: "X" | "O" | null;
  onClick: () => void;
};

const Block: React.FC<BlockProps> = ({ value, onClick }) => {
  return (
    <div className="block" onClick={onClick}>
      {value}
    </div>
  );
};

export default Block;
