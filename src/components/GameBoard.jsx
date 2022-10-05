import React, { useRef, useState } from "react";
import TableCell from "./cell/TableCell";

const GameBoard = ({ content }) => {
  const [cells, setCells] = useState(content);
  const [loading, setLoading] = useState(false);

  const game = useRef({
    clickCells: [],
  });

  const toggleProperty = (cellIndex, propertyName, propertyValue) => {
    let cellsTemp;
    if (Array.isArray(cellIndex)) {
      cellsTemp = cells.map((element, index) =>
        cellIndex.includes(index)
          ? {
              ...element,
              [propertyName]: propertyValue,
            }
          : element
      );
    } else {
      cellsTemp = cells.map((element, index) =>
        index === cellIndex
          ? {
              ...element,
              [propertyName]: propertyValue,
            }
          : element
      );
    }
    setCells(cellsTemp);
  };
  const closeCell = (cellIndex) => {
    toggleProperty(cellIndex, "open", false);
  };

  const openCell = (cellIndex) => {
    console.log(cellIndex);
    toggleProperty(cellIndex, "open", true);
  };

  const isCellEqual = (cellIndex1, cellIndex2) => {
    return cells[cellIndex1].id === cells[cellIndex2].id;
  };

  const isSameCell = (cellIndex) => {
    return (
      game.current.clickCells.length && game.current.clickCells[0] === cellIndex
    );
  };

  const resetClickCells = () => {
    game.current = { ...game.current, clickCells: [] };
  };

  const handleClick = (cellIndex) => {
    if (isSameCell(cellIndex)) {
      return;
    }
    openCell(cellIndex);
    game.current.clickCells.push(cellIndex);
    if (game.current.clickCells.length === 2) {
      setLoading(true);
      const [firstCellIndex, secondCellIndex] = game.current.clickCells;
      if (isCellEqual(firstCellIndex, secondCellIndex)) {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } else {
        setTimeout(() => {
          closeCell([firstCellIndex, firstCellIndex]);
          setLoading(false);
        }, 500);
      }
      resetClickCells();
    }
  };

  return (
    <>
      <h1 className="title">Majong</h1>
      <div className="d-flex justify-content-center">
        <div className="game-board">
          <div className="d-flex justify-content-center">
            <div
              className="d-grid board-border"
              style={{
                gridTemplateColumns: `repeat(8,1fr)`,
                gridTemplateRows: `repeat(4,1fr)`,
              }}
            >
              {cells &&
                cells.map((element, index) => (
                  <TableCell
                    key={index}
                    index={index}
                    data={element}
                    onClick={handleClick}
                    loading={loading}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameBoard;
